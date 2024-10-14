import { PageHeaderDescription } from "@/components/page-header"
import { CardsChat } from "@/registry/default/demo/cards/chat"
import { CardsCookieSettings } from "@/registry/default/demo/cards/cookie-settigs"
import { CardsLofiPlayer } from "@/registry/default/demo/cards/lofi-player"
import { CardsMetric } from "@/registry/default/demo/cards/metric"
import { CardsProfile } from "@/registry/default/demo/cards/profile"
import { CardsReportIssue } from "@/registry/default/demo/cards/report-issue"
import { CardsShare } from "@/registry/default/demo/cards/share"
import { CardsStats } from "@/registry/default/demo/cards/stats"

export default function CardsDemo() {
  return (
    <div className="grid md:gap-4 lg:grid-cols-10 xl:grid-cols-11 xl:gap-4">
      <div className="space-y-4 lg:col-span-4 xl:col-span-6 xl:space-y-4">
        <CardsStats />
        <div className="grid gap-1 sm:grid-cols-[280px_1fr] md:hidden">
          <CardsProfile />
          <div className="pt-3 sm:pl-2 sm:pt-0 xl:pl-4">
            <PageHeaderDescription className="p-4 text-sm">
              Hello, I’m Nopnapat Norasri, a dedicated software developer with
              expertise in building robust applications across mobile, web, and
              desktop platforms. I have a strong track record of delivering
              innovative solutions that meet client needs and enhance user
              experience. I thrive on solving complex challenges and
              continuously seek to improve my skills in this ever-evolving
              field.
            </PageHeaderDescription>
          </div>
          <div className="pt-3 sm:col-span-2 xl:pt-4">
            <CardsMetric />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <div className="space-y-4 xl:space-y-4">
            <PageHeaderDescription className="p-4 text-sm">
              In addition to my development work, I have a keen interest in
              finance and economics. I believe that technology can transform the
              financial landscape, and I’m excited about the potential to create
              applications that analyze data and drive informed decision-making.
              By integrating my technical abilities with my understanding of
              economic principles, I aim to contribute to solutions that empower
              users in their financial journeys.
            </PageHeaderDescription>
            <CardsCookieSettings />
          </div>
          <div className="space-y-4 xl:space-y-4">
            <CardsChat />
            <CardsLofiPlayer />
          </div>
        </div>
      </div>
      <div className="space-y-4 lg:col-span-6 xl:col-span-5 xl:space-y-4">
        <div className="hidden gap-1 sm:grid-cols-[280px_1fr] md:grid">
          <CardsProfile />
          <div className="pt-3 sm:pl-2 sm:pt-0 xl:pl-3">
            <PageHeaderDescription className="p-4 text-sm">
              Hello, I’m Nopnapat Norasri, a dedicated software developer with
              expertise in building robust applications across mobile, web, and
              desktop platforms. I have a strong track record of delivering
              innovative solutions that meet client needs and enhance user
              experience. I thrive on solving complex challenges and
              continuously seek to improve my skills in this ever-evolving
              field.
            </PageHeaderDescription>
          </div>
          <div className="pt-3 sm:col-span-2 xl:pt-3">
            <CardsMetric />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <CardsReportIssue />
          <CardsShare />
        </div>
      </div>
    </div>
  )
}
