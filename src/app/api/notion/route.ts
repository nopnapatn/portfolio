import { NextResponse } from "next/server"

import { getPostsMetadata } from "@/lib/notion"

export const runtime = "edge"

export async function GET() {
  try {
    const posts = await getPostsMetadata()

    return NextResponse.json(posts, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400"
      }
    })
  } catch (error) {
    console.error("Error in notion API route:", error)
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    )
  }
}
