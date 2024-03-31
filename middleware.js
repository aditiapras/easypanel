import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export { default } from "next-auth/middleware";

export const config = { matcher: ["/dashboard", "/api/users"] };

export async function middleware(req) {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/api/users")) {
    if (!token) {
      return NextResponse.json({ error: "Not Authorized", status: 401 });
    }
  }

  if (!token) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }
}
