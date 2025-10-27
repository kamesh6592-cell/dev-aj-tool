/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata, Viewport } from "next";
import { Inter, PT_Sans } from "next/font/google";
import Script from "next/script";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import "@/assets/globals.css";
import { Toaster } from "@/components/ui/sonner";
import IframeDetector from "@/components/iframe-detector";
import AppContext from "@/components/contexts/app-context";
import TanstackContext from "@/components/contexts/tanstack-query-context";
import { LoginProvider } from "@/components/contexts/login-context";
import { ProProvider } from "@/components/contexts/pro-context";
import { generateSEO, generateStructuredData } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const ptSans = PT_Sans({
  variable: "--font-ptSans-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  ...generateSEO({
    title: "DeepSite | Build with AI ✨",
    description:
      "DeepSite is a web development tool that helps you build websites with AI, no code required. Let's deploy your website with DeepSite and enjoy the magic of AI.",
    path: "/",
  }),
  appleWebApp: {
    capable: true,
    title: "DeepSite",
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
};

// async function getMe() {
//   const cookieStore = await cookies();
//   const cookieName = MY_TOKEN_KEY();
//   const token = cookieStore.get(cookieName)?.value;

//   if (!token) return { user: null, projects: [], errCode: null };
//   try {
//     const res = await apiServer.get("/me", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return { user: res.data.user, projects: res.data.projects, errCode: null };
//   } catch (err: any) {
//     return { user: null, projects: [], errCode: err.status };
//   }
// }

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Domain redirect check
  const headersList = await headers();
  const forwardedHost = headersList.get("x-forwarded-host");
  const host = headersList.get("host");
  const hostname = (forwardedHost || host || "").split(":")[0];

  const isLocalDev =
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname.startsWith("192.168.");
  const isHuggingFace =
    hostname === "huggingface.co" || hostname.endsWith(".huggingface.co");

  if (!isHuggingFace && !isLocalDev) {
    const pathname = headersList.get("x-invoke-path") || "/deepsite";
    redirect(`https://huggingface.co${pathname}`);
  }

  // const data = await getMe();

  // Generate structured data
  const structuredData = generateStructuredData("WebApplication", {
    name: "DeepSite",
    description: "Build websites with AI, no code required",
    url: "https://huggingface.co/deepsite",
  });

  const organizationData = generateStructuredData("Organization", {
    name: "DeepSite",
    url: "https://huggingface.co/deepsite",
  });

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ptSans.variable} antialiased bg-black dark h-[100dvh] overflow-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationData),
          }}
        />
        <Script
          defer
          data-domain="deepsite.hf.co"
          src="https://plausible.io/js/script.js"
        />
        <IframeDetector />
        <Toaster richColors position="bottom-center" />
        <TanstackContext>
          <AppContext>
            <LoginProvider>
              <ProProvider>{children}</ProProvider>
            </LoginProvider>
          </AppContext>
        </TanstackContext>
      </body>
    </html>
  );
}
