import { NextResponse } from "next/server";
import { VerifyToken } from "./JWTHelper";

export async function checkCookieAuth(req) {
  try {
    let authToken = req.cookies.get("token");
    let payload = await VerifyToken(authToken.value);

    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("email", payload["email"]);

    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
