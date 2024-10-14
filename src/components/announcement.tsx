import { ArrowRightIcon } from "@radix-ui/react-icons"
import { RocketIcon } from "lucide-react"
import Link from "next/link"

import { Separator } from "@/components/ui/separator"

export function Announcement() {
  return (
    <Link
      href="/docs/changelog"
      className="group inline-flex items-center px-0.5 text-sm font-medium"
    >
      <RocketIcon className="size-4" />{" "}
      <Separator className="mx-2 h-4" orientation="vertical" />{" "}
      <span className="underline-offset-4 group-hover:underline">
        Hello World!
      </span>
      <ArrowRightIcon className="ml-1 size-4" />
    </Link>
  )
}
