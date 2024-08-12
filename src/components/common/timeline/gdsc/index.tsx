import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { images } from "@/lib/constansts"

export function GDSCTimeline() {
  return (
    <>
      <div className="group relative flex gap-x-5">
        <div className="relative after:absolute after:bottom-2 after:start-3 after:top-8 after:w-px after:translate-x-[0.5px] after:bg-gray-200 group-last:after:hidden dark:after:bg-neutral-700">
          <div className="relative z-10 flex size-6 items-center justify-center">
            <Avatar>
              <AvatarImage src={images.gdsc} />
              <AvatarFallback>GD</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="grow pb-8 group-last:pb-0">
          <p className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
            Oct 2023 - Present
          </p>

          <p className="text-sm font-semibold text-gray-800 dark:text-neutral-200">
            Core Team Lead
          </p>

          <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
            I&apos;m part of the core team of the activity group, responsible
            for organizing activities to provide knowledge to outsiders.
          </p>
        </div>
      </div>
    </>
  )
}
