"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound, useParams } from "next/navigation"
import { useEffect, useRef, useState } from "react"

import { NotionContent } from "@/app/bibliotheca/_components/notion-content"
import { paths } from "@/constants/paths"
import { formatDate } from "@/lib/format-date"
import { cn } from "@/lib/utils"

interface BlogPost {
  id: string
  title: string
  slug: string
  coverImage?: string
  description?: string
  date: string
  tags?: string[]
  content: string
}

export default function BlogPostPage() {
  const params = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchPost = async () => {
      if (!params?.slug) {
        notFound()
      }

      try {
        setIsLoading(true)
        const response = await fetch(`/api/notion/${params.slug}`)
        if (!response.ok) {
          throw new Error("Failed to fetch post")
        }
        const post = await response.json()
        setPost(post)
      } catch (error) {
        console.error("Error fetching post:", error)
        notFound()
      } finally {
        setIsLoading(false)
      }
    }

    fetchPost()
  }, [params])

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={cn("overflow-hidden")}
      >
        <div className="mx-auto max-w-4xl animate-pulse">
          <div className="h-6 w-24 rounded bg-bone" />
          <div className="mt-4 h-10 w-3/4 rounded bg-bone" />
          <div className="mt-4 h-6 w-48 rounded bg-bone" />
          <div className="mt-6 h-[300px] w-full rounded bg-bone" />
          <div className="mt-8 space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-4 w-full rounded bg-bone" />
            ))}
          </div>
        </div>
      </motion.div>
    )
  }

  if (!post) {
    notFound()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn("overflow-hidden")}
    >
      <div className="relative">
        <div className="mx-auto max-w-4xl">
          <Link
            href={paths.bibliotheca}
            className="mb-6 inline-flex items-center text-sm hover:text-primary"
          >
            <ArrowLeft className="mr-2 size-4" />
            Back to posts
          </Link>
        </div>

        {post.coverImage && (
          <div className="relative mx-auto mb-8 h-[300px] max-w-4xl">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              fill
              className="rounded-lg object-cover"
              priority
            />
          </div>
        )}

        <div className="mx-auto max-w-4xl">
          <header className="mb-8">
            <h1 className="mb-4 text-3xl font-bold">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <time dateTime={post.date} className="text-sm">
                {formatDate(post.date)}
              </time>
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>

          <div ref={contentRef}>
            <NotionContent content={post.content} headingLinkable={true} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
