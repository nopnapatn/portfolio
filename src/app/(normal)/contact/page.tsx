"use client"

import { motion } from "framer-motion"

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
                  <AvatarImage src={siteConfig.links.image} />
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

                <br />
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
            </CardContent>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
