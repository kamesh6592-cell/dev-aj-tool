/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCookie } from "react-use";
import { useRouter } from "next/navigation";

import { ProjectType, User } from "@/types";
import { api } from "@/lib/api";
import { toast } from "sonner";
import MY_TOKEN_KEY from "@/lib/get-cookie-name";
import { useBroadcastChannel } from "@/lib/useBroadcastChannel";


export const useUser = (initialData?: {
  user: User | null;
  errCode: number | null;
  projects: ProjectType[];
}) => {
  const client = useQueryClient();
  const router = useRouter();
  const [, setCurrentRoute, removeCurrentRoute] = useCookie("deepsite-currentRoute");
  const [token, setToken, removeToken] = useCookie(MY_TOKEN_KEY());

  const { data: { user, errCode } = { user: null, errCode: null }, isLoading, refetch: refetchMe } =
    useQuery({
      queryKey: ["user.me"],
      queryFn: async () => {
        const me = await api.get("/me");
        if (me.data) {
          if (me.data.projects) {
            setProjects(me.data.projects);
          }
          return { user: me.data.user, errCode: me.data.errCode };
        }
        return { user: null, errCode: null };
      },
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      retry: false,
      enabled: true,
    });

  const { data: loadingAuth } = useQuery({
    queryKey: ["loadingAuth"],
    queryFn: async () => false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
  const setLoadingAuth = (value: boolean) => {
    client.setQueryData(["setLoadingAuth"], value);
  };

  const { data: projects } = useQuery({
    queryKey: ["me.projects"],
    queryFn: async () => [],
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    initialData: initialData?.projects || [],
  });
  const setProjects = (projects: ProjectType[]) => {
    client.setQueryData(["me.projects"], projects);
  };

  // Listen for OAuth callback from popup window
  useBroadcastChannel("auth", (message: any) => {
    if (message.type === "user-oauth" && message.code) {
      loginFromCode(message.code);
    }
  });

  const isInIframe = () => {
    try {
      return window.self !== window.top;
    } catch {
      return true;
    }
  };

  const openLoginWindow = async () => {
    setCurrentRoute(window.location.pathname);
    
    // If in iframe, open OAuth in popup window
    if (isInIframe()) {
      try {
        const response = await api.get("/auth/login-url");
        const loginUrl = response.data?.loginUrl;
        
        if (loginUrl) {
          const width = 600;
          const height = 700;
          const left = (window.screen.width - width) / 2;
          const top = (window.screen.height - height) / 2;
          
          window.open(
            loginUrl,
            "HuggingFace Login",
            `width=${width},height=${height},left=${left},top=${top},popup=yes`
          );
          return;
        }
      } catch (error) {
        console.error("Failed to open login popup:", error);
        toast.error("Failed to open login window");
      }
    }
    
    // Default: navigate to auth page (for non-iframe contexts)
    return router.push("/auth");
  };

  const loginFromCode = async (code: string) => {
    setLoadingAuth(true);
    if (loadingAuth) return;
    await api
      .post("/auth", { code })
      .then(async (res: any) => {
        if (res.data && res.data.access_token) {
          const expiresIn = res.data.expires_in || 3600;
          const expiresDate = new Date();
          expiresDate.setTime(expiresDate.getTime() + expiresIn * 1000);
          
          const isProduction = window.location.protocol === 'https:';
          
          const cookieOptions: any = {
            expires: expiresDate,
            path: '/',
            sameSite: isProduction ? 'none' : 'lax',
          };
          
          if (isProduction) {
            cookieOptions.secure = true;
          }
          
          setToken(res.data.access_token, cookieOptions);
          
          const cookieString = `${MY_TOKEN_KEY()}=${res.data.access_token}; path=/; max-age=${expiresIn}; samesite=${isProduction ? 'none' : 'lax'}${cookieOptions.secure ? '; secure' : ''}`;
          document.cookie = cookieString;
          
          refetchMe();
          router.push("/")
          toast.success("Login successful");
        }
      })
      .catch((err: any) => {
        toast.error(err?.data?.message ?? err.message ?? "An error occurred");
      })
      .finally(() => {
        setLoadingAuth(false);
      });
  };

  const logout = async () => {
    removeToken();
    removeCurrentRoute();
    toast.success("Logout successful");
    client.clear();
    window.location.reload();
  };

  return {
    user,
    projects,
    setProjects,
    errCode,
    loading: isLoading || loadingAuth,
    openLoginWindow,
    loginFromCode,
    token,
    logout,
  };
};
