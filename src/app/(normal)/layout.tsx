import { Announcement } from "@/components/announcement"
import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"

export default async function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Announcement />
      <Header />
      {children}
      <Footer />
    </div>
  )
}
