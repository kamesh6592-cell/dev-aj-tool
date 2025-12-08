import { User } from "@/types";
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// UserResponse = type User & { token: string };
type UserResponse = User & { token: string };

export const isAuthenticated = async (): // req: NextRequest
Promise<UserResponse | NextResponse<unknown> | undefined> => {
  try {
    const supabase = await createClient();
    
    const { data: { user: authUser }, error } = await supabase.auth.getUser();

    if (error || !authUser) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please sign in to continue",
        },
        {
          status: 401,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Convert Supabase user to our User type
    const user: UserResponse = {
      id: authUser.id,
      name: authUser.user_metadata?.full_name || authUser.email?.split('@')[0] || 'User',
      fullname: authUser.user_metadata?.full_name || authUser.email?.split('@')[0] || 'User',
      avatarUrl: authUser.user_metadata?.avatar_url || `https://api.dicebear.com/7.x/initials/svg?seed=${authUser.email}`,
      isPro: false,
      token: authUser.id, // Use user ID as token for Supabase
      ...(authUser.email && { email: authUser.email }), // Only include email if it exists
    };

    return user;
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      {
        ok: false,
        message: "Authentication failed",
      },
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
