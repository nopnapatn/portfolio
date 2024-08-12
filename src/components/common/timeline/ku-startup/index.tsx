import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { images } from "@/lib/constansts"

export function KUSTARTUPTimeline() {
  return (
    <>
      <div className="group relative flex gap-x-5">
        <div className="relative after:absolute after:bottom-2 after:start-3 after:top-8 after:w-px after:translate-x-[0.5px] after:bg-gray-200 group-last:after:hidden dark:after:bg-neutral-700">
          <div className="relative z-10 flex size-6 items-center justify-center">
            <Avatar>
              <AvatarImage src={images.startup} />
              <AvatarFallback>KS</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="grow pb-8 group-last:pb-0">
          <p className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
            Jun 2023 - Present
          </p>

          <p className="text-sm font-semibold text-gray-800 dark:text-neutral-200">
            Human Resources Development
          </p>

          <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
            <b>KU STARTUP</b> is a Sandbox of Kasetsart University help to
            develop students to have knowledge about startups.
          </p>
          <ul className="ms-6 mt-3 list-disc space-y-1.5">
            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
              I&apos;m in the build startup team, which is the team that
              develops members of the club to have knowledge about startups.
            </li>
            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
              Utilized tools such as Notion for project tracking, Discard, Slack
              for use communication. and Google Drive for document management.
            </li>
            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
              Organized a workshop to develop the skills of members in the club.
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
