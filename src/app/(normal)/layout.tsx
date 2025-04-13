import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"

export default async function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
