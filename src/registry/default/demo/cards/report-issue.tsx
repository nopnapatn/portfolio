"use client"

import { useId, useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function CardsReportIssue() {
  const id = useId()
  const [subject, setSubject] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:nopnapatn@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(description)}`
    window.location.href = mailtoLink

    setSubject("")
    setDescription("")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Report an issue</CardTitle>
        <CardDescription>
          What area are you having problems with?
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor={`subject-${id}`}>Subject</Label>
            <Input
              id={`subject-${id}`}
              placeholder="I need help with..."
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor={`description-${id}`}>Description</Label>
            <Textarea
              id={`description-${id}`}
              placeholder="Please include all information relevant to your issue."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter className="justify-between space-x-2">
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              setSubject("")
              setDescription("")
            }}
          >
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </CardFooter>
      </form>
    </Card>
  )
}
