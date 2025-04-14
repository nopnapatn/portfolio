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
        className="mb-6 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
        {...props}
      >
        {headingLinkable && props.id ? (
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
        className="border-bone/30 mt-12 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
        {...props}
      >
        {headingLinkable && props.id ? (
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
        {headingLinkable && props.id ? (
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
        {headingLinkable && props.id ? (
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
        {headingLinkable && props.id ? (
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
        {headingLinkable && props.id ? (
          <a href={`#${props.id}`} className="no-underline hover:text-primary">
            {props.children}
          </a>
        ) : (
          props.children
        )}
      </h6>
    ),

    p: ({ ...props }: ComponentPropsWithoutRef<"p">) => (
      <p className="my-5 text-base leading-7" {...props} />
    ),
    a: ({ ...props }: ComponentPropsWithoutRef<"a">) => (
      <a
        className="font-medium text-primary underline-offset-4 hover:underline"
        target={props.href?.startsWith("http") ? "_blank" : undefined}
        rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
        {...props}
      />
    ),
    strong: ({ ...props }: ComponentPropsWithoutRef<"strong">) => (
      <strong className="font-semibold" {...props} />
    ),
    em: ({ ...props }: ComponentPropsWithoutRef<"em">) => (
      <em className="italic" {...props} />
    ),
    del: ({ ...props }: ComponentPropsWithoutRef<"del">) => (
      <del className="line-through" {...props} />
    ),
    hr: ({ ...props }: ComponentPropsWithoutRef<"hr">) => (
      <hr className="border-bone/30 my-8" {...props} />
    ),

    blockquote: ({ ...props }: ComponentPropsWithoutRef<"blockquote">) => (
      <blockquote
        className="mt-6 border-l-4 border-bone pl-6 italic text-paleOyster"
        {...props}
      />
    ),

    ul: ({ ...props }: ComponentPropsWithoutRef<"ul">) => (
      <ul
        className="my-6 ml-6 list-disc marker:text-paleOyster [&>li]:mt-2"
        {...props}
      />
    ),
    ol: ({ ...props }: ComponentPropsWithoutRef<"ol">) => (
      <ol
        className="my-6 ml-6 list-decimal marker:text-paleOyster [&>li]:mt-2"
        {...props}
      />
    ),
    li: ({ ...props }: ComponentPropsWithoutRef<"li">) => (
      <li className="leading-7" {...props} />
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
        <code
          className={cn("rounded-md font-mono text-sm", className)}
          {...props}
        >
          {children}
        </code>
      )
    },

    table: ({ ...props }: ComponentPropsWithoutRef<"table">) => (
      <div className="my-6 w-full overflow-y-auto">
        <table className="w-full border-collapse" {...props} />
      </div>
    ),
    thead: ({ ...props }: ComponentPropsWithoutRef<"thead">) => (
      <thead className="border-bone/20 border-b" {...props} />
    ),
    tbody: ({ ...props }: ComponentPropsWithoutRef<"tbody">) => (
      <tbody className="divide-bone/20 divide-y" {...props} />
    ),
    tr: ({ ...props }: ComponentPropsWithoutRef<"tr">) => (
      <tr className="m-0 p-0 even:bg-muted" {...props} />
    ),
    th: ({ ...props }: ComponentPropsWithoutRef<"th">) => (
      <th
        className="border-bone/20 border px-4 py-2 text-left font-semibold"
        {...props}
      />
    ),
    td: ({ ...props }: ComponentPropsWithoutRef<"td">) => (
      <td className="border-bone/20 border px-4 py-2 text-left" {...props} />
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
    ),

    dl: ({ ...props }: ComponentPropsWithoutRef<"dl">) => (
      <dl className="divide-bone/20 my-6 divide-y" {...props} />
    ),
    dt: ({ ...props }: ComponentPropsWithoutRef<"dt">) => (
      <dt className="pt-6 font-semibold first:pt-0" {...props} />
    ),
    dd: ({ ...props }: ComponentPropsWithoutRef<"dd">) => (
      <dd className="pb-6 pl-4 text-paleOyster" {...props} />
    ),

    sup: ({ ...props }: ComponentPropsWithoutRef<"sup">) => (
      <sup className="align-super text-xs" {...props} />
    ),
    sub: ({ ...props }: ComponentPropsWithoutRef<"sub">) => (
      <sub className="align-sub text-xs" {...props} />
    ),
    kbd: ({ ...props }: ComponentPropsWithoutRef<"kbd">) => (
      <kbd
        className="border-bone/30 rounded border bg-muted px-1.5 py-0.5 font-mono text-xs"
        {...props}
      />
    ),
    mark: ({ ...props }: ComponentPropsWithoutRef<"mark">) => (
      <mark className="rounded bg-primary/20 px-1 py-0.5" {...props} />
    ),
    abbr: ({ ...props }: ComponentPropsWithoutRef<"abbr">) => (
      <abbr className="cursor-help underline decoration-dotted" {...props} />
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
        "prose-blockquote:border-l-4 prose-blockquote:border-bone prose-blockquote:text-paleOyster",
        "prose-img:rounded-lg prose-img:shadow-md",
        "prose-li:leading-7",
        "prose-table:border-collapse",
        "prose-th:border prose-th:border-bone/20 prose-th:p-2",
        "prose-td:border prose-td:border-bone/20 prose-td:p-2",
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
