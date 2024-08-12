import { TimelineDemo } from "@/components/common/timeline"
import Footer from "@/components/layout/footer"
import { Card } from "@/components/ui/card"

import Header from "../components/layout/header"

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 md:px-0 md:pt-8">
        <Header />
        <Card className="bg-background/95 p-8 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <TimelineDemo />
        </Card>
        <Footer />
      </div>
    </>
  )
}
