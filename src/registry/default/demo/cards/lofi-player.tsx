"use client"

import {
  PauseIcon,
  PlayIcon,
  TrackNextIcon,
  TrackPreviousIcon
} from "@radix-ui/react-icons"
import { useEffect, useRef, useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

const SONGS = [
  {
    title: "Chill Lo-Fi Beat",
    artist: "Alex Productions",
    src: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3"
  }
]

export function CardsLofiPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isLooping, setIsLooping] = useState(true)
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  useEffect(() => {
    const audio = new Audio(SONGS[currentSongIndex].src)
    audioRef.current = audio

    const setAudioData = () => {
      setDuration(audio.duration)
    }

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime)
    }

    const handleEnded = () => {
      if (isLooping) {
        audio.currentTime = 0
        audio.play()
      } else {
        nextSong()
      }
    }

    audio.addEventListener("loadedmetadata", setAudioData)
    audio.addEventListener("timeupdate", setAudioTime)
    audio.addEventListener("ended", handleEnded)

    audio.loop = isLooping

    audio.play().catch((error) => {
      setIsPlaying(false)
    })

    toast({
      title: "Lofi Player",
      description: "Music started playing. Click to view player.",
      action: (
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            if (cardRef.current) {
              const cardRect = cardRef.current.getBoundingClientRect()
              const cardCenter = cardRect.top + cardRect.height / 2
              const windowCenter = window.innerHeight / 2
              const scrollTo = window.scrollY + cardCenter - windowCenter

              window.scrollTo({
                top: scrollTo,
                behavior: "smooth"
              })
            }
          }}
        >
          View
        </Button>
      )
    })

    return () => {
      audio.pause()
      audio.currentTime = 0
      audio.removeEventListener("loadedmetadata", setAudioData)
      audio.removeEventListener("timeupdate", setAudioTime)
      audio.removeEventListener("ended", handleEnded)
    }
  }, [currentSongIndex, isLooping, toast])

  const togglePlayback = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch((error) => {
        setIsPlaying(false)
      })
    }
    setIsPlaying(!isPlaying)
  }

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return

    const bounds = e.currentTarget.getBoundingClientRect()
    const percent = (e.clientX - bounds.left) / bounds.width
    const newTime = percent * duration
    audioRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const toggleLoop = () => {
    if (audioRef.current) {
      const newLoopState = !isLooping
      audioRef.current.loop = newLoopState
      setIsLooping(newLoopState)
    }
  }

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % SONGS.length)
    setCurrentTime(0)
  }

  const previousSong = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + SONGS.length) % SONGS.length
    )
    setCurrentTime(0)
  }

  return (
    <Card ref={cardRef}>
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="flex size-16 items-center justify-center rounded-md bg-gradient-to-br from-zinc-600 to-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18V5l12-2v13"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="16" r="3"></circle>
          </svg>
        </div>
        <div>
          <CardTitle>{SONGS[currentSongIndex].title}</CardTitle>
          <CardDescription>{SONGS[currentSongIndex].artist}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="size-8 rounded-full"
              onClick={toggleLoop}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke={isLooping ? "currentColor" : "gray"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4"
              >
                <path d="M17 2l4 4-4 4"></path>
                <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
                <path d="M7 22l-4-4 4-4"></path>
                <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
              </svg>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-8 rounded-full"
              onClick={previousSong}
            >
              <TrackPreviousIcon className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-10 rounded-full"
              onClick={togglePlayback}
            >
              {isPlaying ? (
                <PauseIcon className="size-4" />
              ) : (
                <PlayIcon className="size-4" />
              )}
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-8 rounded-full"
              onClick={nextSong}
            >
              <TrackNextIcon className="size-4" />
            </Button>
          </div>
        </div>
        <div className="mt-2">
          <div
            className="h-1 cursor-pointer rounded-full bg-secondary"
            onClick={handleSeek}
          >
            <div
              className="h-1 rounded-full bg-primary"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            ></div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
