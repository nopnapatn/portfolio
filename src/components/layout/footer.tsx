import Link from "next/link"

import { socials } from "@/lib/constansts"

export default function Footer() {
  return (
    <>
      <div className="sticky py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <Link
              href={socials.x}
              className="font-medium text-black underline underline-offset-4 dark:text-white"
            >
              nopnapatn
            </Link>
            {". The source code is available on "}
            <Link
              href={socials.github}
              className="font-medium text-black underline underline-offset-4 dark:text-white"
            >
              Github
            </Link>
            {"."}
          </p>
        </div>
      </div>
    </>
  )
}
