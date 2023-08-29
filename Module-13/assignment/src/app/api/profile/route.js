import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req, res) {
  const cookie = cookies(req);
  cookie.set("theme", "dark", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });

  const getCookie = req.cookies.get("theme");
  
  return NextResponse.json({
    cookie: getCookie,
  });
}

export async function GET(req, res) {
  return NextResponse.json({
    message: "Welcome to our API!",
    version: "1.0",
  });
}
