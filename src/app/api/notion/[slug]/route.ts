import { NextRequest, NextResponse } from "next/server"

import { getPostBySlug } from "@/lib/notion"

export async function GET(
  request: NextRequest,
  context: { params: { slug: string } }
) {
  try {
    // Wait for params to be resolved
    const params = await context.params

    // Make sure params and slug exist
    if (!params || !params.slug) {
      return NextResponse.json(
        { error: "Slug parameter is missing" },
        { status: 400 }
      )
    }

    const slug = params.slug
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
