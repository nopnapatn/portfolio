"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import {
  ViewSelector,
  type ViewMode
} from "@/app/bibliotheca/_components/view-selector"
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

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [viewMode, setViewMode] = useState<ViewMode>("grid")

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true)
        const response = await fetch("/api/notion")
        if (!response.ok) {
          throw new Error("Failed to fetch posts")
        }
        const posts = await response.json()
        setPosts(posts)
      } catch (error) {
        console.error("Error fetching posts:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()

    const savedView = localStorage.getItem(
      "bibliotheca-view-mode"
    ) as ViewMode | null
    if (savedView) {
      setViewMode(savedView)
    }
  }, [])

  const handleViewChange = (mode: ViewMode) => {
    setViewMode(mode)
  }

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={cn("overflow-hidden")}
      >
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">All Posts</h1>
          <div className="opacity-50">
            <ViewSelector onChange={handleViewChange} defaultMode={viewMode} />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-lg border p-4">
              <div className="aspect-video h-24 w-full animate-pulse rounded-md bg-bone" />
              <div className="mt-4 h-4 w-3/4 animate-pulse rounded bg-bone" />
              <div className="mt-2 h-3 w-1/2 animate-pulse rounded bg-bone" />
            </div>
          ))}
        </div>
      </motion.div>
    )
  }

  if (viewMode === "grid") {
    return (
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">All Posts</h1>
          <ViewSelector onChange={handleViewChange} defaultMode={viewMode} />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`${paths.bibliotheca}/${post.slug}`}
              className="group"
            >
              <div className="overflow-hidden rounded-lg border transition-all hover:shadow-md">
                {post.coverImage && (
                  <div className="relative aspect-video">
                    <Image
                      src={post.coverImage || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-4">
                  <p className="mb-2 text-sm text-muted-foreground">
                    {formatDate(post.date)}
                  </p>
                  <h2 className="mb-2 text-lg font-semibold group-hover:text-primary">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="line-clamp-2 text-sm text-muted-foreground">
                      {post.description}
                    </p>
                  )}
                  {post.tags && post.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  }

  if (viewMode === "list") {
    return (
      <div>
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">All Posts</h1>
          <ViewSelector onChange={handleViewChange} defaultMode={viewMode} />
        </div>
        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`${paths.bibliotheca}/${post.slug}`}
              className="group"
            >
              <div className="flex flex-col rounded-lg border p-4 transition-all hover:bg-muted/50 sm:flex-row sm:items-center">
                {post.coverImage && (
                  <div className="relative mb-4 aspect-video w-full sm:mb-0 sm:mr-4 sm:w-48">
                    <Image
                      src={post.coverImage || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="rounded-md object-cover"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold group-hover:text-primary">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {formatDate(post.date)}
                    </p>
                  </div>
                  {post.description && (
                    <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">
                      {post.description}
                    </p>
                  )}
                  {post.tags && post.tags.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">All Posts</h1>
        <ViewSelector onChange={handleViewChange} defaultMode={viewMode} />
      </div>
      <div className="grid grid-cols-1 gap-8">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`${paths.bibliotheca}/${post.slug}`}
            className="group"
          >
            <div className="overflow-hidden rounded-lg border transition-all hover:shadow-lg">
              <div className="flex flex-col lg:flex-row">
                {post.coverImage && (
                  <div className="relative aspect-video w-full lg:w-1/3">
                    <Image
                      src={post.coverImage || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <p className="mb-2 text-sm text-muted-foreground">
                      {formatDate(post.date)}
                    </p>
                    <h2 className="mb-3 text-xl font-bold group-hover:text-primary">
                      {post.title}
                    </h2>
                    {post.description && (
                      <p className="line-clamp-3 text-muted-foreground">
                        {post.description}
                      </p>
                    )}
                  </div>
                  {post.tags && post.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
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
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
