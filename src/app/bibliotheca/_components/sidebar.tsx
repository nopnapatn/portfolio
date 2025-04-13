"use client"

import { motion } from "framer-motion"
import { Search } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { paths } from "@/constants/paths"
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

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [allTags, setAllTags] = useState<string[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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
        setFilteredPosts(posts)

        // Extract all unique tags from posts
        const tags = Array.from(
          new Set(posts.flatMap((post: BlogPost) => post.tags || []))
        ).sort() as string[]
        setAllTags(tags)
      } catch (error) {
        console.error("Error fetching posts:", error)
      } finally {
        setIsLoading(false)
      }
    }

    if (mounted) {
      fetchPosts()
    }
  }, [mounted])

  useEffect(() => {
    if (!mounted) return

    let result = [...posts]

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          (post.description?.toLowerCase() || "").includes(query) ||
          (post.content?.toLowerCase() || "").includes(query)
      )
    }

    if (selectedTag) {
      result = result.filter(
        (post) => post.tags && post.tags.includes(selectedTag)
      )
    }

    setFilteredPosts(result)
  }, [searchQuery, selectedTag, posts, mounted])

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn("overflow-hidden")}
    >
      <div className={cn("pb-12", className)}>
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <div className="relative text-bone">
              <Search className="absolute left-2 top-2.5 size-4 text-bone" />
              <Input
                placeholder="Search posts..."
                className="pl-8 text-bone"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {allTags.length > 0 && (
            <div className="px-3 py-2">
              <h4 className="mb-2 px-2 text-sm font-medium">Filter by tag</h4>
              <div className="flex flex-wrap gap-2 px-2">
                {allTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTag === tag ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div className="px-3 py-2">
            <h4 className="mb-2 px-2 text-sm font-medium">
              Posts{" "}
              {filteredPosts.length > 0 ? `(${filteredPosts.length})` : ""}
            </h4>
            {isLoading ? (
              <div className="grid grid-flow-row auto-rows-max text-sm">
                <div className="px-2 py-1">
                  <div className="h-5 w-24 animate-pulse rounded bg-bone"></div>
                </div>
                <div className="px-2 py-1">
                  <div className="h-5 w-32 animate-pulse rounded bg-bone"></div>
                </div>
              </div>
            ) : filteredPosts.length > 0 ? (
              <div className="grid grid-flow-row auto-rows-max text-sm">
                {filteredPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`${paths.bibliotheca}/${post.slug}`}
                    className={cn(
                      "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
                      pathname === `${paths.bibliotheca}/${post.slug}`
                        ? "bg-muted font-medium"
                        : "text-muted-foreground transition-colors"
                    )}
                  >
                    {post.title}
                  </Link>
                ))}
              </div>
            ) : (
              <p className="px-2 text-sm text-paleOyster">No posts found</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
