"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound, useParams } from "next/navigation"
import { Suspense, useEffect, useRef, useState } from "react"

import { NotionContent } from "@/app/bibliotheca/_components/notion-content"
import { paths } from "@/constants/paths"
import { formatDate } from "@/lib/format-date"
import { cn } from "@/lib/utils"

const PostSkeleton = () => (
  <div className="mx-auto max-w-4xl animate-pulse">
    <div className="h-6 w-24 rounded bg-bone" />
    <div className="mt-4 h-10 w-3/4 rounded bg-bone" />
    <div className="mt-4 h-6 w-48 rounded bg-bone" />
    <div className="mt-6 h-[300px] w-full rounded bg-bone" />
    <div className="mt-8 space-y-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="h-4 w-full rounded bg-bone" />
      ))}
    </div>
  </div>
)

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

const PostContent = ({ content }: { content: string }) => {
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={contentRef}>
      <NotionContent content={content} headingLinkable={true} />
    </div>
  )
}

export default function BlogPostPage() {
  const params = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [contentVisible, setContentVisible] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const fetchPost = async () => {
      if (!params?.slug) {
        return notFound()
      }

      try {
        setIsLoading(true)
        const response = await fetch(`/api/notion/${params.slug}`, {
          signal,
          headers: {
            "Cache-Control": "max-age=3600"
          }
        })

        if (!response.ok) {
          throw new Error("Failed to fetch post")
        }

        const post = await response.json()
        setPost(post)

        setTimeout(() => setContentVisible(true), 100)
      } catch (error) {
        if (!signal.aborted) {
          console.error("Error fetching post:", error)
          notFound()
        }
      } finally {
        if (!signal.aborted) {
          setIsLoading(false)
        }
      }
    }

    fetchPost()

    return () => {
      controller.abort()
    }
  }, [params])

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={cn("overflow-hidden")}
      >
        <PostSkeleton />
      </motion.div>
    )
  }

  if (!post) {
    return notFound()
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
              src={post.coverImage}
              alt={post.title}
              fill
              className="rounded-lg object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="eager"
            />
          </div>
        )}

        <div className="mx-auto max-w-4xl">
          <header className="mb-8">
            <h1 className="mb-4 text-3xl font-bold">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-bone">
              <time dateTime={post.date} className="text-sm">
                {formatDate(post.date)}
              </time>

              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-paleOyster px-2.5 py-0.5 text-xs font-medium text-heavyMetal"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>

          <Suspense
            fallback={
              <div className="bg-bone/20 h-96 w-full animate-pulse rounded-lg"></div>
            }
          >
            {contentVisible && <PostContent content={post.content} />}
          </Suspense>
        </div>
      </div>
    </motion.div>
  )
}
