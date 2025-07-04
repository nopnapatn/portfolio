"use client"

import { motion } from "framer-motion"
import { Github, Instagram, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CardContent, CardHeader } from "@/components/ui/card"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export default function Page() {
  const skills = [
    {
      category: "Development",
      items: [
        "Proficient in utilizing diverse development tools and frameworks to architect and deliver scalable software solutions."
      ]
    },
    { category: "Collaboration", items: ["Notion", "Slack", "Atlassian"] }
  ]

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn("overflow-hidden rounded-3xl")}
    >
      <div className="h-[75vh]">
        <div className="flex h-full items-center justify-center">
          <div className="w-full max-w-2xl">
            <CardHeader>
              <div className="flex items-center gap-x-3">
                <Avatar className="size-16 rounded-lg">
                  <AvatarImage
                    src={siteConfig.links.image || "/placeholder.svg"}
                  />
                  <AvatarFallback className="size-16 rounded-lg">
                    NN
                  </AvatarFallback>
                </Avatar>
                <div className="grow">
                  <h1 className="font-serif text-lg font-medium text-bone">
                    Nopnapat Norasri
                  </h1>
                  <p className="text-sm text-paleOyster">
                    Software Engineer, Startup
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="mt-4">
                <p className="text-sm text-paleOyster">
                  <span className="text-bone">
                    I&apos;m a software engineer based in Bangkok, Thailand.
                  </span>{" "}
                  I specialize in building web applications and have
                  professional experience working with TypeScript, React, and
                  Node.js. I am also a writer and write about web development,
                  programming, and software engineering on my blog.
                </p>
                <p className="mt-3 text-sm text-paleOyster">
                  Currently,{" "}
                  <span className="text-bone">
                    I&apos;m passionate about technology and enjoy building
                    products that make people&apos;s lives easier.
                  </span>{" "}
                  I&apos;m interested in learning more about startups,
                  entrepreneurship, and business development. I am also looking
                  to collaborate with other developers, designers, and product
                  managers on interesting projects.{" "}
                  <span className="text-bone">
                    Feel free to reach out to me if you want to connect or
                    collaborate.
                  </span>
                </p>

                <div className="my-6 space-y-4">
                  {skills.map((skillGroup, index) => (
                    <dl key={index} className="flex flex-col gap-1 sm:flex-row">
                      <dt className="min-w-40">
                        <span className="block text-sm text-paleOyster">
                          {skillGroup.category}:
                        </span>
                      </dt>
                      <dd>
                        <ul className="flex flex-wrap gap-1">
                          {skillGroup.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="inline-flex items-center text-sm text-bone"
                            >
                              {item}
                              {itemIndex < skillGroup.items.length - 1 && (
                                <span className="mx-1">,</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </dl>
                  ))}
                </div>

                {/* Contact Section */}
                <div className="mt-8">
                  <div className="mb-3">
                    <span className="text-sm text-paleOyster">Connect:</span>
                  </div>
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
                        <link.icon className="size-4 text-paleOyster transition-colors group-hover:text-inherit" />
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-background px-2 py-1 text-xs opacity-0 shadow-md transition-opacity group-hover:opacity-100">
                          {link.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
