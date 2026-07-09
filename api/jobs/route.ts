import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    jobs: [
      {
        id: 1,
        status: "running",
        gpu: "RTX 4090",
        reward: 0.14
      }
    ]
  });
}
