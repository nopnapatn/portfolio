import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/hooks/use-toast"

type CookiePreferences = {
  necessary: boolean
  functional: boolean
  performance: boolean
}

export function CardsCookieSettings() {
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences>(
    {
      necessary: true,
      functional: false,
      performance: false
    }
  )
  const { toast } = useToast()

  useEffect(() => {
    const savedPreferences = localStorage.getItem("cookiePreferences")
    if (savedPreferences) {
      setCookiePreferences(JSON.parse(savedPreferences))
    }
  }, [])

  const handleToggle = (key: keyof CookiePreferences) => {
    setCookiePreferences((prev) => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const savePreferences = () => {
    localStorage.setItem("cookiePreferences", JSON.stringify(cookiePreferences))
    setCookies(cookiePreferences)
    toast({
      title: "Preferences Saved",
      description: "Your cookie preferences have been updated."
    })
  }

  const setCookies = (preferences: CookiePreferences) => {
    console.log("Setting cookies:", preferences)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cookie Settings</CardTitle>
        <CardDescription>Manage your cookie settings here.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex items-center justify-between space-x-4">
          <Label htmlFor="necessary" className="flex flex-col space-y-1">
            <span>Strictly Necessary</span>
            <span className="text-xs font-normal leading-snug text-muted-foreground">
              These cookies are essential in order to use the website and use
              its features.
            </span>
          </Label>
          <Switch
            id="necessary"
            checked={cookiePreferences.necessary}
            onCheckedChange={() => handleToggle("necessary")}
            disabled={true}
            aria-label="Necessary"
          />
        </div>
        <div className="flex items-center justify-between space-x-4">
          <Label htmlFor="functional" className="flex flex-col space-y-1">
            <span>Functional Cookies</span>
            <span className="text-xs font-normal leading-snug text-muted-foreground">
              These cookies allow the website to provide personalized
              functionality.
            </span>
          </Label>
          <Switch
            id="functional"
            checked={cookiePreferences.functional}
            onCheckedChange={() => handleToggle("functional")}
            aria-label="Functional"
          />
        </div>
        <div className="flex items-center justify-between space-x-4">
          <Label htmlFor="performance" className="flex flex-col space-y-1">
            <span>Performance Cookies</span>
            <span className="text-xs font-normal leading-snug text-muted-foreground">
              These cookies help to improve the performance of the website.
            </span>
          </Label>
          <Switch
            id="performance"
            checked={cookiePreferences.performance}
            onCheckedChange={() => handleToggle("performance")}
            aria-label="Performance"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" onClick={savePreferences}>
          Save preferences
        </Button>
      </CardFooter>
    </Card>
  )
}
