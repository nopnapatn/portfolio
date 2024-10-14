"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { siteConfig } from "@/config/site"
import { useToast } from "@/hooks/use-toast"

export function CardsShare() {
  const [isCopied, setIsCopied] = useState(false)
  const shareLink = siteConfig.url
  const { toast } = useToast()

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareLink)
      setIsCopied(true)
      toast({
        title: "Link Copied",
        description: "The share link has been copied to your clipboard."
      })
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
      toast({
        title: "Copy Failed",
        description: "Failed to copy the link. Please try again.",
        variant: "destructive"
      })
    }
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Share this document</CardTitle>
        <CardDescription>
          Anyone with the link can view this document.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2">
          <Label htmlFor="link" className="sr-only">
            Link
          </Label>
          <Input id="link" value={shareLink} readOnly />
          <Button
            variant="secondary"
            className="shrink-0"
            onClick={copyToClipboard}
          >
            {isCopied ? "Copied!" : "Copy Link"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
