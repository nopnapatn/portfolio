import { siteConfig } from "@/config/site"

export const paths = {
  home: siteConfig.href,
  bibliotheca: siteConfig.bibliotheca.href,
  brownade: siteConfig.brownade.href,
  contact: "/contact"
} as const
