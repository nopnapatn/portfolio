import { Client } from "@notionhq/client"
import { NotionToMarkdown } from "notion-to-md"
import { cache } from "react"

import { config } from "@/config"

export type NotionProperty = {
  title?: Array<{ plain_text: string }>
  rich_text?: Array<{ plain_text: string }>
  date?: { start: string }
  multi_select?: Array<{ name: string }>
}

export interface NotionPage {
  id: string
  properties: Record<string, NotionProperty>
  cover?: {
    type: "external" | "file"
    external?: { url: string }
    file?: { url: string }
  }
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  coverImage?: string
  description?: string
  date: string
  tags?: string[]
  content: string
}

// Create cached Notion client instance
const notion = new Client({
  auth: config.notion.apiKey
})

const n2m = new NotionToMarkdown({ notionClient: notion })

// Cache database results
export const getDatabase = cache(async () => {
  const response = await notion.databases.query({
    database_id: config.notion.databaseId,
    sorts: [
      {
        property: "Date",
        direction: "ascending"
      }
    ],
    filter: {
      property: "Published",
      checkbox: {
        equals: true
      }
    }
  })
  return response.results
})

export const getPage = cache(async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId })
  return response
})

export const getBlocks = cache(async (blockId: string) => {
  const mdblocks = await n2m.pageToMarkdown(blockId)
  const mdString = n2m.toMarkdownString(mdblocks)
  return mdString.parent
})

export const getAllPosts = cache(async (): Promise<BlogPost[]> => {
  const posts = await getDatabase()

  return Promise.all(
    posts.map(async (post) => {
      try {
        const page = post as unknown as NotionPage
        const properties = page.properties

        const title = properties.Name?.title?.[0]?.plain_text || "Untitled"
        const slug =
          properties.Slug?.rich_text?.[0]?.plain_text ||
          `untitled-${Date.now()}`
        const date =
          properties.Date?.date?.start || new Date().toISOString().split("T")[0]
        const description =
          properties.Description?.rich_text?.[0]?.plain_text || ""
        const tags = properties.Tags?.multi_select?.map((tag) => tag.name) || []

        let coverImage = ""
        if (page.cover) {
          if (page.cover.type === "external" && page.cover.external) {
            coverImage = page.cover.external.url
          } else if (page.cover.type === "file" && page.cover.file) {
            coverImage = page.cover.file.url
          }
        }

        const content = await getBlocks(page.id)

        return {
          id: page.id,
          title,
          slug,
          coverImage,
          description,
          date,
          tags,
          content
        }
      } catch (error) {
        console.error(`Error processing post ${post.id}:`, error)
        return {
          id: post.id || `error-${Date.now()}`,
          title: "Error Loading Post",
          slug: `error-${Date.now()}`,
          date: new Date().toISOString().split("T")[0],
          content: "There was an error loading this post."
        }
      }
    })
  )
})

export const getPostBySlug = cache(
  async (slug: string): Promise<BlogPost | null> => {
    const posts = await getAllPosts()
    const post = posts.find((post) => post.slug === slug)
    return post || null
  }
)

export const getPostsMetadata = cache(
  async (): Promise<Omit<BlogPost, "content">[]> => {
    const posts = await getDatabase()

    return Promise.all(
      posts.map(async (post) => {
        try {
          const page = post as unknown as NotionPage
          const properties = page.properties

          const title = properties.Name?.title?.[0]?.plain_text || "Untitled"
          const slug =
            properties.Slug?.rich_text?.[0]?.plain_text ||
            `untitled-${Date.now()}`
          const date =
            properties.Date?.date?.start ||
            new Date().toISOString().split("T")[0]
          const description =
            properties.Description?.rich_text?.[0]?.plain_text || ""
          const tags =
            properties.Tags?.multi_select?.map((tag) => tag.name) || []

          let coverImage = ""
          if (page.cover) {
            if (page.cover.type === "external" && page.cover.external) {
              coverImage = page.cover.external.url
            } else if (page.cover.type === "file" && page.cover.file) {
              coverImage = page.cover.file.url
            }
          }

          return {
            id: page.id,
            title,
            slug,
            coverImage,
            description,
            date,
            tags
          }
        } catch (error) {
          console.error(`Error processing post metadata ${post.id}:`, error)
          return {
            id: post.id || `error-${Date.now()}`,
            title: "Error Loading Post",
            slug: `error-${Date.now()}`,
            date: new Date().toISOString().split("T")[0]
          }
        }
      })
    )
  }
)
