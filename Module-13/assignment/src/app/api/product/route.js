import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  let headersList = headers();
  let token = headersList.get("Auth-Token");

  return NextResponse.json({ message: token });
}