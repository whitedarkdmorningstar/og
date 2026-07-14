"use client"

import { clsx } from "clsx"
import React from "react"
import { Button } from "../ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"

export interface StopWatchProps {
  className?: string
  onValueChange?: (value: number) => void
  onFinished?: () => void
  onReset?: () => void
  maxTime?: number // in millisecond
  textClassName?: string
  actionClassName?: string
  render?: ({
    elapsed,
    setElapsed,
    isRunning,
    toggle,
    start,
    stop,
  }: {
    elapsed: number
    isRunning: boolean
    setElapsed: React.Dispatch<React.SetStateAction<number>>
    toggle: () => void
    start: () => void
    stop: () => void
  }) => React.ReactNode
  footerLeft?: ({
    elapsed,
    isRunning,
  }: {
    elapsed: number
    isRunning: boolean
  }) => React.ReactNode
  footerRight?: ({
    elapsed,
    isRunning,
  }: {
    elapsed: number
    isRunning: boolean
  }) => React.ReactNode
}

export default function StopWatch({
  onValueChange,
  maxTime = 10 * 60 * 1000, // 10 min
  className,
  textClassName,
  actionClassName,
  onFinished,
  onReset,
  render,
  footerLeft,
  footerRight,
}: StopWatchProps) {
  const [elapsed, setElapsed] = React.useState<number>(0)
  const [isRunning, setIsRunning] = React.useState<boolean>(false)
  const startRef = React.useRef<number | null>(null)

  React.useEffect(() => {
    let interval: any | null = null

    if (isRunning) {
      startRef.current = Date.now() - elapsed
      interval = setInterval(() => {
        const newElapsed = Date.now() - (startRef.current ?? Date.now())

        if (newElapsed >= maxTime) {
          setElapsed(maxTime) // clamp at 10 minutes
          setIsRunning(false) // stop the stopwatch
          clearInterval(interval) // clear the interval
          onFinished?.()
        } else {
          setElapsed(newElapsed)
          onValueChange?.(newElapsed)
        }
      }, 10) // update every 10ms
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isRunning])

  const stopwatchTime = React.useMemo(() => msToTime(elapsed, true), [elapsed])

  const toggle = React.useCallback(() => {
    setIsRunning((prev) => !prev)
  }, [])

  const start = React.useCallback(() => {
    setIsRunning(true)
  }, [])

  const stop = React.useCallback(() => {
    setIsRunning(false)
  }, [])

  const handleReset = React.useCallback(() => {
    setElapsed(0)
    setIsRunning(false)
    onReset?.()
  }, [onReset])

  return (
    <div className={className}>
      <Card>
        <CardHeader>
          <CardTitle className={clsx(textClassName)}>{stopwatchTime}</CardTitle>
          <CardDescription>
            Maximum duration <b>{Math.floor(maxTime / (60 * 1000))} minutes</b>
          </CardDescription>
        </CardHeader>
        <CardFooter className={clsx("justify-between", actionClassName)}>
          {footerLeft?.({ elapsed, isRunning })}
          <Button onClick={toggle} className={"min-w-16"}>
            {isRunning ? "Stop" : "Start"}
          </Button>
          <Button
            className={"min-w-16"}
            onClick={handleReset}
            variant={"destructive"}
          >
            Reset
          </Button>
          {footerRight?.({ elapsed, isRunning })}
        </CardFooter>
      </Card>
      {render?.({ elapsed, isRunning, setElapsed, toggle, start, stop })}
    </div>
  )
}

export function msToTime(ms?: number, showMilliseconds = false) {
  if (ms === 0) return showMilliseconds ? `00:00:00` : `00:00`

  if (!ms) return null

  // Format MM:SS:MS (two digits each)
  const minutes = Math.floor(ms / 60000)
  const seconds = Math.floor((ms % 60000) / 1000)
  const milliseconds = Math.floor((ms % 1000) / 10) // two digits

  return showMilliseconds
    ? `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`
    : `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`
}
