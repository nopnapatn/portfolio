import Link from "next/link"

import { Announcement } from "@/components/announcement"
import { ThemesTabs } from "@/components/demo/tabs"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading
} from "@/components/page-header"
import { ThemeWrapper } from "@/components/theme-wrapper"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export default function DemoPage() {
  return (
    <div className="container">
      <ThemeWrapper
        defaultTheme="zinc"
        className="relative flex w-full flex-col items-start md:flex-row"
      >
        <PageHeader className="w-full">
          <Announcement />
          <PageHeaderHeading className="hidden md:block">
            <div className="flex items-center justify-start gap-2">
              <Avatar className="size-8 rounded-md">
                <AvatarImage src="https://github.com/nopnapatn.png" />
                <AvatarFallback>NN</AvatarFallback>
              </Avatar>
              NOPNAPAT NORASRI
            </div>
          </PageHeaderHeading>
          <PageHeaderHeading className="md:hidden">
            <div className="flex items-center justify-start gap-2 text-2xl">
              <Avatar className="size-8 rounded-md">
                <AvatarImage src="https://github.com/nopnapatn.png" />
                <AvatarFallback>NN</AvatarFallback>
              </Avatar>
              NOPNAPAT NORASRI
            </div>
          </PageHeaderHeading>
          <PageHeaderDescription>
            I&apos;m a software engineer based in Bangkok, Thailand.
          </PageHeaderDescription>
          <PageActions>
            <Button asChild size="sm">
              <Link href="/docs">Get Started</Link>
            </Button>
            <Button asChild size="sm" variant="ghost">
              <Link
                target="_blank"
                rel="noreferrer"
                href={siteConfig.links.github}
              >
                GitHub
              </Link>
            </Button>
          </PageActions>
        </PageHeader>
      </ThemeWrapper>
      <ThemesTabs />
    </div>
  )
}
