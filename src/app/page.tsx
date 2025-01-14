import Container from "@/components/layout/container"

import ArtworkCard from "./_components/artwork-card"

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
        />
        <ArtworkCard
          option={4}
          color="bg-vanilla"
          tag="OTHER PAGE"
          title="The"
          subtitle="Brownade"
          metadata="Step into Brownade's realm, digital experience that inspires transformation."
        />
      </div>
    </Container>
  )
}
