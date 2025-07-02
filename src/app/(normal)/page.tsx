import ArtworkCard from "@/app/(normal)/_components/artwork-card"
import Container from "@/components/layout/container"
import { siteConfig } from "@/config/site"
import { paths } from "@/constants/paths"

export default function Home() {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2 lg:grid-cols-3">
        <ArtworkCard
          option={1}
          color="bg-bone"
          className="relative sm:col-span-2 lg:col-span-1 lg:row-span-2"
          tag="SOFTWARE ENGINEER"
          title="Nopnapat"
          subtitle="Norasri"
          metadata="I'm a software engineer who loves to create digital experiences that inspire transformation."
          href={paths.contact}
          image={siteConfig.links.image}
        />
        <ArtworkCard
          option={2}
          color="bg-paleOyster"
          className="relative sm:col-span-2 lg:col-span-2"
          tag="Library"
          title={siteConfig.bibliotheca.name}
          subtitle=""
          metadata={siteConfig.bibliotheca.description}
          href={siteConfig.bibliotheca.href}
          image="/images/library.jpg"
        />
        {/* <ArtworkCard
          option={3}
          color="bg-persianOrange"
          tag=""
          title=""
          subtitle=""
          metadata=""
        /> */}
        <ArtworkCard
          option={4}
          color="bg-vanilla"
          tag="OTHER PAGE"
          title="The"
          subtitle="Brownade"
          metadata="Step into Brownade's realm, digital experience that inspires transformation."
          href={siteConfig.links.brownade}
        />
      </div>
    </Container>
  )
}
