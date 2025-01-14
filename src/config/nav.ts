import { DocumentNavItem, HeaderNavItem } from "@/types/nav"

interface NavConfig {
  header: HeaderNavItem[]
  documents: DocumentNavItem[]
}

export const navConfig: NavConfig = {
  header: [],
  documents: []
}
