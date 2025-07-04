"use client"

import { Github, Instagram, Linkedin, Mail, MoreHorizontal } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import ArtworkCard from "@/app/(normal)/_components/artwork-card"
import Container from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { siteConfig } from "@/config/site"
import { paths } from "@/constants/paths"
import { cn } from "@/lib/utils"

function MobilePage() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/nopnapatn",
      color: "hover:text-bone hover:bg-bone-100/10"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/nopnapatn",
      color: "hover:text-[#0077B5] hover:bg-blue-100/10"
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/nopnapatn",
      color: "hover:text-[#E1306C] hover:bg-pink-100/10"
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:contact@nopnapatn.com",
      color: "hover:text-[#D44638] hover:bg-red-100/10"
    }
  ]

  return (
    <div className="flex flex-col items-center px-4 py-8">
      <div className="flex w-full max-w-sm flex-col items-center text-center">
        <div className="mb-6 size-24 overflow-hidden rounded-full border-2 border-bone">
          <Image
            src={siteConfig.links.image}
            alt="Profile picture"
            width={96}
            height={96}
            className="size-full object-cover"
          />
        </div>

        <h1 className="mb-4 text-xl font-semibold">Nopnapat Norasri</h1>

        <p className="mb-4 px-2 text-sm leading-relaxed text-paleOyster">
          I&apos;m a software engineer who loves to create digital experiences
          that inspire transformation.
        </p>

        <div className="p-4">
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className={cn(
                  "border-paleOyster/20 group relative flex h-9 w-9 items-center justify-center rounded-full border transition-colors",
                  link.color
                )}
              >
                <link.icon className="size-4 text-bone transition-colors group-hover:text-inherit" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-background px-2 py-1 text-xs opacity-0 shadow-md transition-opacity group-hover:opacity-100">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-sm space-y-4">
        <Card className="rounded-xl border border-paleOyster bg-transparent p-4 transition-colors hover:border-bone">
          <Link
            href="https://nopnapatn.dev/"
            className="flex items-center justify-between"
          >
            <span className="font-medium text-bone">nopnapatn</span>
            <Button variant="ghost" size="icon" className="size-8">
              <MoreHorizontal className="size-4" />
              <span className="sr-only">More options</span>
            </Button>
          </Link>
        </Card>

        <Card className="rounded-xl border-birch bg-transparent p-4 transition-colors hover:border-bone">
          <Link
            href="https://brownade.com/"
            className="flex items-center justify-between"
          >
            <span className="font-medium">Brownade</span>
            <Button variant="ghost" size="icon" className="size-8">
              <MoreHorizontal className="size-4" />
              <span className="sr-only">More options</span>
            </Button>
          </Link>
        </Card>

        <Card className="rounded-xl border-birch bg-transparent p-4 transition-colors hover:border-bone">
          <Link
            href="https://github.com/nopnapatn"
            className="flex items-center justify-between"
          >
            <span className="font-medium">Github</span>
            <Button variant="ghost" size="icon" className="size-8">
              <MoreHorizontal className="size-4" />
              <span className="sr-only">More options</span>
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  )
}

function WebPage() {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2 lg:grid-cols-3">
        <ArtworkCard
          option={1}
          color="bg-bone"
          className="relative sm:col-span-2 lg:col-span-1 lg:row-span-2"
          tag="SOFTWARE ENGINEER"
          title="Nopnapat"
          subtitle="Norasri"
          metadata="I'm a software engineer who loves to create digital experiences that inspire transformation."
          href={paths.contact}
          image={siteConfig.links.image}
        />
        <ArtworkCard
          option={2}
          color="bg-paleOyster"
          className="relative sm:col-span-2 lg:col-span-2"
          tag="Library"
          title={siteConfig.bibliotheca.name}
          subtitle=""
          metadata={siteConfig.bibliotheca.description}
          href={siteConfig.bibliotheca.href}
          image="/images/library.jpg"
        />
        {/* <ArtworkCard
          option={3}
          color="bg-persianOrange"
          tag=""
          title=""
          subtitle=""
          metadata=""
        /> */}
        <ArtworkCard
          option={4}
          color="bg-vanilla"
          tag="OTHER PAGE"
          title="The"
          subtitle="Brownade"
          metadata="Step into Brownade's realm, digital experience that inspires transformation."
          href={siteConfig.links.brownade}
        />
      </div>
    </Container>
  )
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)

    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  return isMobile
}

export default function ResponsiveLayout() {
  const isMobile = useIsMobile()

  return isMobile ? <MobilePage /> : <WebPage />
}
