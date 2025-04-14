import { NextRequest, NextResponse } from "next/server"

import { getPostBySlug } from "@/lib/notion"

export const runtime = "edge"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const slug = (await params).slug
    const post = await getPostBySlug(slug)

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 })
    }

    return NextResponse.json(post, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400"
      }
    })
  } catch (error) {
    console.error(`Error fetching post ${(await params).slug}:`, error)
    return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 })
  }
}
