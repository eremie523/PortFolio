import { NextResponse } from "next/server";

export function POST() {
    return new NextResponse("Hello world");
}