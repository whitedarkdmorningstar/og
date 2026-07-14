"use client"

import StopWatch from "@/components/common/stop-watch"
import { Button } from "@/components/ui/button"
import { FieldGroup } from "@/components/ui/field"
import { clsx } from "clsx"
import { useCallback, useState } from "react"
import Pain, { PainType } from "./pain"

export default function PainNote() {
  const [pain, setPain] = useState<PainType[]>([])
  const [painStarted, setPainStarted] = useState<boolean>(false)

  const togglePain = useCallback(
    ({ isRunning, elapsed }: { isRunning: boolean; elapsed: number }) => (
      <Button
        disabled={!isRunning}
        className={clsx(
          isRunning
            ? painStarted
              ? "bg-green-600 hover:bg-green-600/80"
              : "bg-red-600 hover:bg-red-600/80"
            : "bg-gray-600 hover:bg-gray-600/80"
        )}
        onClick={() => {
          if (painStarted) {
            setPain((prev) =>
              prev.map((e, i) =>
                i === prev.length - 1 ? { ...e, end: elapsed } : e
              )
            )
            setPainStarted(false)
          } else {
            setPain((prev) => [...prev, { start: elapsed }])
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
      <Pain pain={pain} />
    </FieldGroup>
  )
}
