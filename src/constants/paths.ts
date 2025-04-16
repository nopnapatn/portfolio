import { siteConfig } from "@/config/site"

export const paths = {
  home: siteConfig.href,
  bibliotheca: siteConfig.bibliotheca.href,
  contact: "/contact",

  maintenance: "/maintenance"
} as const
