import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

BigInt.prototype.toJSON = function () {
  return this.toString();
};

export async function POST(req, res) {
  // Insert New Data
  try {
    const reqBody = await req.json();

    //multiple data: createMany
    let result = await prisma.user.create({
      data: reqBody,
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (err) {
    return NextResponse.json({ status: "error", message: err.toString() });
  }
}

export async function GET(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    //findMany() for multiple data
    let result = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (err) {
    return NextResponse.json({ status: "error", message: err.toString() });
  }
}

export async function PUT(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const reqBody = await req.json();

    //multiple data: createMany
    let result = await prisma.user.update({
      where: { id: parseInt(id) },
      data: reqBody,
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (err) {
    return NextResponse.json({ status: "error", message: err.toString() });
  }
}

export async function DELETE(req, res) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    let result = await prisma.user.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (err) {
    return NextResponse.json({ status: "error", message: err.toString() });
  }
}
