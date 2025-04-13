import { NextRequest, NextResponse } from "next/server"

import { getPostBySlug } from "@/lib/notion"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    if (!params || !(await params).slug) {
      return NextResponse.json(
        { error: "Slug parameter is missing" },
        { status: 400 }
      )
    }

    const slug = (await params).slug
    // Log the slug to help with debugging
    console.log(`Fetching post with slug: ${slug}`)

    const post = await getPostBySlug(slug)
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 })
    }

    return NextResponse.json(post)
  } catch (error) {
    console.error(`Error fetching post:`, error)
    return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 })
  }
}
