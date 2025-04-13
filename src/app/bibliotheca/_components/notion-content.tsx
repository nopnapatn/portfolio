import "highlight.js/styles/base16/gruvbox-light-hard.css"
import Image from "next/image"
import type { ComponentPropsWithoutRef } from "react"
import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import rehypeRaw from "rehype-raw"
import rehypeSanitize from "rehype-sanitize"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

import { cn } from "@/lib/utils"

interface NotionContentProps {
  content: string
  className?: string
  headingLinkable?: boolean
}

export function NotionContent({
  content,
  className,
  headingLinkable = true
}: NotionContentProps) {
  const components = {
    h1: ({ ...props }: ComponentPropsWithoutRef<"h1">) => (
      <h1
        className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
        {...props}
      >
        {headingLinkable ? (
          <a href={`#${props.id}`} className="no-underline hover:text-primary">
            {props.children}
          </a>
        ) : (
          props.children
        )}
      </h1>
    ),
    h2: ({ ...props }: ComponentPropsWithoutRef<"h2">) => (
      <h2
        className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors"
        {...props}
      >
        {headingLinkable ? (
          <a href={`#${props.id}`} className="no-underline hover:text-primary">
            {props.children}
          </a>
        ) : (
          props.children
        )}
      </h2>
    ),
    h3: ({ ...props }: ComponentPropsWithoutRef<"h3">) => (
      <h3
        className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
        {...props}
      >
        {headingLinkable ? (
          <a href={`#${props.id}`} className="no-underline hover:text-primary">
            {props.children}
          </a>
        ) : (
          props.children
        )}
      </h3>
    ),
    h4: ({ ...props }: ComponentPropsWithoutRef<"h4">) => (
      <h4
        className="mt-6 scroll-m-20 text-xl font-semibold tracking-tight"
        {...props}
      >
        {headingLinkable ? (
          <a href={`#${props.id}`} className="no-underline hover:text-primary">
            {props.children}
          </a>
        ) : (
          props.children
        )}
      </h4>
    ),
    h5: ({ ...props }: ComponentPropsWithoutRef<"h5">) => (
      <h5
        className="mt-6 scroll-m-20 text-lg font-semibold tracking-tight"
        {...props}
      >
        {headingLinkable ? (
          <a href={`#${props.id}`} className="no-underline hover:text-primary">
            {props.children}
          </a>
        ) : (
          props.children
        )}
      </h5>
    ),
    h6: ({ ...props }: ComponentPropsWithoutRef<"h6">) => (
      <h6
        className="mt-6 scroll-m-20 text-base font-semibold tracking-tight"
        {...props}
      >
        {headingLinkable ? (
          <a href={`#${props.id}`} className="no-underline hover:text-primary">
            {props.children}
          </a>
        ) : (
          props.children
        )}
      </h6>
    ),
    blockquote: ({ ...props }: ComponentPropsWithoutRef<"blockquote">) => (
      <blockquote
        className="mt-6 border-l-4 border-primary pl-6 italic text-muted-foreground"
        {...props}
      />
    ),
    code: ({
      inline,
      className,
      children,
      ...props
    }: ComponentPropsWithoutRef<"code"> & { inline?: boolean }) => {
      if (inline) {
        return (
          <code
            className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
            {...props}
          >
            {children}
          </code>
        )
      }
      return (
        <code className={cn("rounded-md text-sm", className)} {...props}>
          {children}
        </code>
      )
    },
    ul: ({ ...props }: ComponentPropsWithoutRef<"ul">) => (
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />
    ),
    ol: ({ ...props }: ComponentPropsWithoutRef<"ol">) => (
      <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />
    ),
    table: ({ ...props }: ComponentPropsWithoutRef<"table">) => (
      <div className="my-6 w-full overflow-y-auto">
        <table className="w-full" {...props} />
      </div>
    ),
    img: ({
      src,
      alt,
      width,
      height,
      ...props
    }: ComponentPropsWithoutRef<"img">) => (
      <Image
        src={src || ""}
        alt={alt || ""}
        width={
          typeof width === "string" ? Number.parseInt(width) : width || 800
        }
        height={
          typeof height === "string" ? Number.parseInt(height) : height || 400
        }
        className="my-8 w-full rounded-lg object-cover shadow-md"
        {...props}
      />
    )
  }

  return (
    <div
      className={cn(
        "prose prose-stone dark:prose-invert max-w-none",
        "prose-headings:font-semibold prose-headings:tracking-tight",
        "prose-p:leading-7 prose-p:my-5",
        "prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
        "prose-code:rounded prose-code:bg-muted prose-code:p-1",
        "prose-pre:rounded-lg prose-pre:border prose-pre:bg-muted prose-pre:p-4",
        className
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeHighlight, rehypeSlug]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
