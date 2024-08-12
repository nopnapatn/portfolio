import { ModeToggle } from "@/components/shared/mode"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { images } from "@/lib/constansts"

import { DrawerDemo } from "../common/drawer"

export default function Header() {
  return (
    <>
      <div className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center justify-between py-6">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src={images.nopnapatn} />
              <AvatarFallback>NN</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@nopnapatn</h4>
              <p className="text-sm">I&apos;m Full Stack Developer</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <ModeToggle />
            <DrawerDemo />
          </div>
        </div>
      </div>
    </>
  )
}
