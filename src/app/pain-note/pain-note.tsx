"use client"

import StopWatch, { msToTime } from "@/components/common/stop-watch"
import { Button } from "@/components/ui/button"
import { FieldGroup } from "@/components/ui/field"
import { clsx } from "clsx"
import { useCallback, useState } from "react"
import { toast } from "sonner"
import Pain, { msToSecond, PainType } from "./pain"

export default function PainNote() {
  const [pain, setPain] = useState<PainType[]>([])
  const [painStarted, setPainStarted] = useState<boolean>(false)

  const deletePain = useCallback(
    (id: string) => {
      const startTime = msToTime(
        pain.find((e) => e.id === id)?.start || undefined
      )
      setPain((prev) =>
        prev.map((item: PainType) =>
          item.id === id ? { ...item, hidden: true } : item
        )
      )
      toast(
        startTime
          ? `Deleted one pain note with start time ${startTime}`
          : `Delete one pain note`,
        {
          action: {
            label: "Undo",
            onClick: () =>
              setPain((prev) =>
                prev.map((item: PainType) =>
                  item.id === id ? { ...item, hidden: false } : item
                )
              ),
          },
        }
      )
    },
    [pain]
  )

  const togglePain = useCallback(
    ({ isRunning, elapsed }: { isRunning: boolean; elapsed: number }) => (
      <Button
        disabled={!isRunning}
        className={clsx(
          isRunning
            ? painStarted
              ? "bg-red-600 hover:bg-red-600/80 dark:bg-red-800 dark:hover:bg-red-800/80"
              : "bg-green-600 hover:bg-green-600/80 dark:bg-green-800 dark:hover:bg-green-800/80"
            : "bg-gray-600 hover:bg-gray-600/80"
        )}
        onClick={() => {
          if (painStarted) {
            setPain((prev) =>
              prev.map((e, i) =>
                i === prev.length - 1
                  ? {
                      ...e,
                      end: elapsed,
                      duration: msToSecond(elapsed)! - msToSecond(e.start)!,
                    }
                  : e
              )
            )
            setPainStarted(false)
          } else {
            const newPain = {
              start: elapsed,
              id: elapsed.toString(),
              hidden: false,
            }
            setPain((prev) => [...prev, newPain])
            setPainStarted(true)
          }
        }}
      >
        {painStarted ? "Pain Ends" : "Pain Starts"}
      </Button>
    ),
    [painStarted]
  )

  return (
    <FieldGroup className={"view"}>
      <StopWatch
        onReset={() => {
          setPain([])
          setPainStarted(false)
        }}
        textClassName={"text-6xl"}
        footerLeft={togglePain}
      />
      <Pain pain={pain} deletePain={deletePain} />
    </FieldGroup>
  )
}
