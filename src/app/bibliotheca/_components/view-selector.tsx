"use client"

import { Grid, List, Rows } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"

export type ViewMode = "grid" | "list" | "card"

interface ViewSelectorProps {
  onChange?: (mode: ViewMode) => void
  defaultMode?: ViewMode
  className?: string
}

export function ViewSelector({
  onChange,
  defaultMode = "grid",
  className
}: ViewSelectorProps) {
  const [viewMode, setViewMode] = useState<ViewMode>(defaultMode)

  useEffect(() => {
    const savedView = localStorage.getItem(
      "bibliotheca-view-mode"
    ) as ViewMode | null
    if (savedView) {
      setViewMode(savedView)
    }
  }, [])

  const handleViewChange = (mode: ViewMode) => {
    setViewMode(mode)
    localStorage.setItem("bibliotheca-view-mode", mode)
    onChange?.(mode)
  }

  const views = [
    { mode: "grid" as const, icon: Grid, label: "Grid View" },
    { mode: "list" as const, icon: List, label: "List View" },
    { mode: "card" as const, icon: Rows, label: "Card View" }
  ]

  return (
    <div className={className}>
      <div className="hidden items-center space-x-1 sm:flex">
        <TooltipProvider>
          {views.map((view) => (
            <Tooltip key={view.mode}>
              <TooltipTrigger asChild>
                <Button
                  variant={viewMode === view.mode ? "default" : "ghost"}
                  size="icon"
                  onClick={() => handleViewChange(view.mode)}
                  aria-label={view.label}
                  className="size-8"
                >
                  <view.icon className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">{view.label}</TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>

      <div className="sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="flex h-8 items-center gap-1"
            >
              <span>View</span>
              {viewMode === "grid" && <Grid className="ml-1 size-4" />}
              {viewMode === "list" && <List className="ml-1 size-4" />}
              {viewMode === "card" && <Rows className="ml-1 size-4" />}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {views.map((view) => (
              <DropdownMenuItem
                key={view.mode}
                onClick={() => handleViewChange(view.mode)}
                className={viewMode === view.mode ? "bg-muted" : ""}
              >
                <view.icon className="mr-2 size-4" />
                <span>{view.label}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
