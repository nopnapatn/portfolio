import Image from "next/image"
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { images, links } from "@/lib/constansts"

export function APPSYNTHTimeline() {
  return (
    <>
      <div className="group relative flex gap-x-5">
        <div className="relative after:absolute after:bottom-2 after:start-3 after:top-8 after:w-px after:translate-x-[0.5px] after:bg-gray-200 group-last:after:hidden dark:after:bg-neutral-700">
          <div className="relative z-10 flex size-6 items-center justify-center">
            <Avatar>
              <AvatarImage src={images.appsynth} />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="grow pb-8 group-last:pb-0">
          <p className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
            May 2024 - Oct 2024 (6 months)
          </p>

          <p className="text-sm font-semibold text-gray-800 dark:text-neutral-200">
            Intern Full Stack Developer
          </p>

          <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
            This is an excellent company and have beautiful experience. So the
            culture is as good if you ask me. There are a lot of interesting
            thing to learn and manager respect your time and your personality.
            Great place to work.
          </p>

          <div className="mt-3">
            <Link href={links.appsynth}>
              <Card className="relative flex items-center overflow-hidden">
                <Image
                  className="absolute inset-0 h-full w-64 rounded-s-lg object-cover sm:w-48"
                  src={images.appsynthInfo}
                  width={200}
                  height={200}
                  alt="Appsynth Inc."
                />

                <div className="relative grow bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:ms-48">
                  <div className="flex min-h-24 flex-col justify-center">
                    <p className="text-sm font-semibold text-gray-800 dark:text-neutral-300">
                      Appsynth Inc.
                    </p>
                    <p className="mt-1 text-sm text-gray-500 dark:text-neutral-400">
                      The digital Innovation Consultancy, We help corporates
                      innovate and grow for lasting digital success.
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
