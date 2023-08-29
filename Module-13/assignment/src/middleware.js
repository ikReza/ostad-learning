import { NextResponse } from "next/server";

// Request Header
// Response Header

export function middleware(req) {
  if (req.nextUrl.pathname === "/redirect") {
    return NextResponse.redirect(new URL("/contact", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/api/product")) {
    const authToken = req.headers.get("Auth-Token");
    const newAuthToken = `Bearer${authToken}`;
    const response = NextResponse.next();
    response.headers.set("Auth-Token", newAuthToken);

    return response;
  }
}
