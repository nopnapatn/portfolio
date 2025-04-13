import { siteConfig } from "@/config/site"
import { DocumentNavItem, HeaderNavItem } from "@/types/nav"

interface NavConfig {
  header: HeaderNavItem[]
  documents: DocumentNavItem[]
}

export const navConfig: NavConfig = {
  header: [
    {
      title: siteConfig.bibliotheca.name,
      href: siteConfig.bibliotheca.href
    }
  ],
  documents: []
}
