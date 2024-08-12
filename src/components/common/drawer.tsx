"use client"

import { AlignLeft, Mail } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

import { links } from "../../lib/constansts"

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon">
          <AlignLeft className="size-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>My Contact</DrawerTitle>
          <DrawerDescription>
            You can contact me via email or social media.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileInfo className="px-4" />
        <DrawerFooter className="pt-4">
          <Button size="sm" asChild>
            <Link href={links.mail}>
              <Mail className="mr-2 size-4" />
              Contact Me
            </Link>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function ProfileInfo({ className }: any) {
  return (
    <div className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input disabled defaultValue="nopnapatn@gmail.com" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Github & Instagram</Label>
        <Input disabled defaultValue="@nopnapatn" />
      </div>
    </div>
  )
}
