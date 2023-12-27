/* eslint-disable react/no-unescaped-entities */
"use client"

import { Icons } from "@/components/shared/icons"
import { ModeSwitch } from "@/components/shared/mode"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CalendarDays, ChevronsUpDown } from "lucide-react"
import * as React from "react"

export default function Demo() {
  return (
    <>
      <div className="fixed h-screen w-full z-20 top-0 start-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex justify-center items-center max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-3xl h-screen">
            {/* header */}
            <div></div>

            {/* content */}
            <div className="h-5/6 mt-10">
              <ScrollArea className="h-full rounded-xl">
                <div className="p-4">
                  <div className="flex justify-start items-center pb-6">
                    <AvatarDemo />
                    <HoverCardDemo />
                  </div>
                  <div className="space-y-5 md:space-y-8">
                    <TypograhpyDemo />
                  </div>
                </div>
              </ScrollArea>
            </div>

            {/* footer */}
            <div>
              <div className="absolute bottom-0 inset-x-0 text-center py-5">
                <div className="flex justify-center items-center max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                  <p className="text-sm mr-2">
                    Write by <span className="font-bold">Nopnapat Norasri</span>{" "}
                  </p>
                  <a
                    href="https://github.com/nopnapatn"
                    className="h-5 w-5 mr-2"
                  >
                    <Icons.gitHub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/nopnapatn.png" />
      <AvatarFallback>NN</AvatarFallback>
    </Avatar>
  )
}

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nopnapatn</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/nopnapatn.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nopnapatn</h4>
            <p className="text-sm">
              I'm Mobile, Full Stack developer, And Minecraft Pro Player.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Kasetsart University
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export function ChatBubbleDemo() {
  return (
    <>
      <div className="flex items-start gap-2.5">
        <AvatarDemo />
        <div className="flex flex-col gap-1 w-full max-w-[320px]">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              Nopnapat Norasri
            </span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              11:46
            </span>
          </div>
          <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-primary-foreground rounded-e-xl rounded-es-xl">
            <p className="text-sm font-normal text-gray-900 dark:text-white">
              {" "}
              That's awesome. I think our users will really appreciate the
              improvements.
            </p>
          </div>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Delivered
          </span>
        </div>
      </div>
    </>
  )
}

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-2"
    >
      <div className="flex items-center justify-between space-x-4">
        <Label htmlFor="theme-mode">Theme select</Label>
        <CollapsibleTrigger asChild>
          <Button
            id="theme-mode"
            variant="ghost"
            size="sm"
            className="w-9 p-0"
          >
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm">
        Default
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          Gruvbox
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          Onedark
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export function TypograhpyDemo() {
  return (
    <>
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Nopnapat Norasri <span className=" text-xl">(Neuw)</span>
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Hi there! I'm a mobile and full-stack developer currently studying at{" "}
          <span className="font-bold">Kasetsart University</span>. Excited about
          creating innovative solutions in the tech world! 👋
        </p>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Motto
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          I love using{" "}
          <a
            href="https://neovim.io/"
            className="font-medium text-primary underline underline-offset-4"
          >
            Neovim
          </a>{" "}
          for work because it lets me stay productive with minimal keyboard
          interruption, enhancing my overall workflow.
        </p>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          “I've been using Vim for about 2 years now, mostly because I can't
          figure out how to exit it.” p.s. Some Developer
        </blockquote>
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Setting
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Personalize your experience effortlessly by adjusting a myriad of
          settings to suit your preferences!
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <ModeSwitch />
          </li>
          <li>
            <CollapsibleDemo />
          </li>
        </ul>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          As a result, people stopped telling jokes, and the kingdom fell into a
          gloom. But there was one person who refused to let the king's
          foolishness get him down: a court jester named Jokester.
        </p>
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Jokester's Revolt
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the king's pillow, in his
          soup, even in the royal toilet. The king was furious, but he couldn't
          seem to stop Jokester.
        </p>
        <div className="leading-7 [&:not(:first-child)]:mt-6">
          <ChatBubbleDemo />
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          And then, one day, the people of the kingdom discovered that the jokes
          left by Jokester were so funny that they couldn't help but laugh. And
          once they started laughing, they couldn't stop.
        </p>
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          The People's Rebellion
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The people of the kingdom, feeling uplifted by the laughter, started
          to tell jokes and puns again, and soon the entire kingdom was in on
          the joke.
        </p>
        <div className="my-6 w-full overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                  King's Treasury
                </th>
                <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                  People's happiness
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Empty
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Overflowing
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Modest
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Satisfied
                </td>
              </tr>
              <tr className="m-0 border-t p-0 even:bg-muted">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Full
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Ecstatic
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The king, seeing how much happier his subjects were, realized the
          error of his ways and repealed the joke tax. Jokester was declared a
          hero, and the kingdom lived happily ever after.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The moral of the story is: never underestimate the power of a good
          laugh and always be careful of bad ideas.
        </p>
      </div>
    </>
  )
}
