"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function DocsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn("overflow-hidden")}
    >
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl">Documentation</h1>
        <p className="text-lg text-muted-foreground">
          Welcome to the documentation for your project.
        </p>
      </div>

      <div className="my-8">
        <h2 id="getting-started" className="mb-4 text-2xl md:text-3xl">
          Getting Started
        </h2>
        <p className="mb-6 text-muted-foreground">
          Choose a section to get started with your project.
        </p>
        <div className="grid grid-cols-1 gap-4 pt-10 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>
                Learn how to install and set up your project.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/docs/getting-started">
                <Button variant="ghost" className="flex items-center gap-1">
                  Read More <ArrowRight className="size-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Components</CardTitle>
              <CardDescription>
                Explore the components available in your project.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/docs/components">
                <Button variant="ghost" className="flex items-center gap-1">
                  Read More <ArrowRight className="size-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>API Reference</CardTitle>
              <CardDescription>
                Detailed API documentation for your project.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/docs/api">
                <Button variant="ghost" className="flex items-center gap-1">
                  Read More <ArrowRight className="size-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="my-8">
        <h2 id="features" className="mb-4 text-2xl md:text-3xl">
          Features
        </h2>
        <p className="mb-6 text-muted-foreground">
          Key features of your project documentation.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Comprehensive API documentation</li>
          <li>Interactive examples</li>
          <li>Easy navigation with table of contents</li>
          <li>Responsive design for all devices</li>
          <li>Dark and light mode support</li>
        </ul>
      </div>

      <div className="my-8">
        <h2 id="resources" className="mb-4 text-2xl md:text-3xl">
          Resources
        </h2>
        <p className="mb-6 text-muted-foreground">
          Additional resources to help you get the most out of your project.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>GitHub Repository</CardTitle>
              <CardDescription>
                Access the source code and contribute to the project.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="https://github.com">
                <Button variant="ghost" className="flex items-center gap-1">
                  View Repository <ArrowRight className="size-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Community</CardTitle>
              <CardDescription>
                Join our community for support and discussions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/community">
                <Button variant="ghost" className="flex items-center gap-1">
                  Join Community <ArrowRight className="size-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  )
}
