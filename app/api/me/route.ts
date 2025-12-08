import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET() {
  try {
    const supabase = await createClient();
    
    // Get the current user from Supabase
    const { data: { user: authUser }, error: authError } = await supabase.auth.getUser();
    
    if (authError || !authUser) {
      return NextResponse.json({ user: null, errCode: 401, projects: [] }, { status: 401 });
    }

    // Get user projects from your database
    // For now, returning empty projects array - you'll need to implement project storage
    const { data: projects, error: projectsError } = await supabase
      .from('projects')
      .select('*')
      .eq('user_id', authUser.id);

    const user = {
      id: authUser.id,
      email: authUser.email,
      name: authUser.user_metadata?.full_name || authUser.email?.split('@')[0] || 'User',
      fullname: authUser.user_metadata?.full_name || authUser.email?.split('@')[0] || 'User',
      avatarUrl: authUser.user_metadata?.avatar_url || `https://api.dicebear.com/7.x/initials/svg?seed=${authUser.email}`,
      isPro: false, // You can add pro status logic later
    };

    return NextResponse.json({ 
      user, 
      projects: projects || [], 
      errCode: null 
    }, { status: 200 });
  } catch (error) {
    console.error('Error in /api/me:', error);
    return NextResponse.json({ 
      user: null, 
      errCode: 500,
      projects: [] 
    }, { status: 500 });
  }
}
