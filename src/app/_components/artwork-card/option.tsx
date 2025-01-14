"use client"

import Image from "next/image"
import Link from "next/link"

import TagArtWorkCard from "@/app/_components/artwork-card/tag"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { siteConfig } from "@/config/site"

interface OptionArtWorkCardProps {
  option: number
  tag: string
  title: string
  subtitle?: string
  image?: string
  metadata?: string
}

export default function OptionArtWorkCard({
  option,
  tag,
  title,
  subtitle,
  image,
  metadata
}: OptionArtWorkCardProps) {
  function RenderTitle() {
    return (
      <div className="font-serif text-3xl font-bold text-birch">
        {title}
        {subtitle && (
          <>
            {" "}
            <span className="border-b-2 border-current">{subtitle}</span>.
          </>
        )}
      </div>
    )
  }

  function RenderImage() {
    return (
      image && (
        <div
          className={`relative ${option === 1 ? "h-[560px]" : "h-48"} overflow-hidden rounded-lg`}
        >
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>
      )
    )
  }

  function RenderMetadata() {
    return (
      metadata && (
        <p className="text-sm leading-relaxed text-heavyMetal">{metadata}</p>
      )
    )
  }

  function RenderContent() {
    switch (option) {
      case 1:
        return (
          <>
            <TagArtWorkCard tag={tag} />
            {RenderTitle()}
            {RenderMetadata()}
            {RenderImage()}
          </>
        )
      case 2:
        return (
          <div className="grid h-full grid-cols-2 gap-12">
            <div className="space-y-4">
              <TagArtWorkCard tag={tag} />
              {RenderTitle()}
              {RenderMetadata()}
            </div>
            {RenderImage()}
          </div>
        )
      case 3:
        return (
          <>
            {RenderImage()}
            <div className="flex items-center justify-between">
              {RenderTitle()}
              <div className="flex justify-center">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="size-8 rounded-full bg-saddle" />
                ))}
              </div>
            </div>
            {RenderMetadata()}
          </>
        )
      case 4:
        return (
          <>
            <div className="flex justify-between">
              <TagArtWorkCard tag={tag} />
              {image && (
                <Avatar className="size-16">
                  <AvatarImage src={image} alt="@nopnapatn" />
                  <AvatarFallback>NN</AvatarFallback>
                </Avatar>
              )}
            </div>
            {RenderTitle()}
            <div className="grid min-h-40 content-between">
              {RenderMetadata()}
              <div>
                <div className="flex items-center justify-between border-t-2 border-heavyMetal py-3 text-sm text-heavyMetal">
                  <span>PUBLIC DOMAIN</span>
                  <Link
                    href={siteConfig.links.brownade}
                    className="cursor-pointer font-semibold hover:text-bone hover:underline"
                  >
                    BRWONADE.COM
                  </Link>
                </div>
                <div className="border-y-2 py-[3px]" />
              </div>
            </div>
          </>
        )
      default:
        return null
    }
  }

  return RenderContent()
}
