import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const host = req.headers.get("host") ?? "localhost:3000";
  
  let url: string;
  if (host.includes("localhost")) {
    url = host;
  } else if (host.includes("hf.space") || host.includes("/spaces/enzostvs")) {
    url = "enzostvs-deepsite.hf.space";
  } else {
    url = "huggingface.co/deepsite";
  }
  
  const redirect_uri =
    `${host.includes("localhost") ? "http://" : "https://"}` +
    url +
    "/auth/callback";

  const loginRedirectUrl = `https://huggingface.co/oauth/authorize?client_id=${process.env.OAUTH_CLIENT_ID}&redirect_uri=${redirect_uri}&response_type=code&scope=openid%20profile%20write-repos%20manage-repos%20inference-api&prompt=consent&state=1234567890`;
  
  return NextResponse.json({ loginUrl: loginRedirectUrl });
}
