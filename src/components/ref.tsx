"use client"

import { useEffect } from "react"

import { UseRefContext } from "@/hooks/use-context"
import UseObserver from "@/hooks/use-observer"

interface RefProps {
  rootMargin?: string
  thereshold?: number
}

export function Ref(props: RefProps) {
  const [ref, isInteresting] = UseObserver({
    rootMargin: props.rootMargin || "0px",
    threshold: props.thereshold || 0
  })
  const { setIsInteresting } = UseRefContext()

  useEffect(() => {
    setIsInteresting(!isInteresting)
  }, [isInteresting, setIsInteresting])

  return <div ref={ref} />
}
