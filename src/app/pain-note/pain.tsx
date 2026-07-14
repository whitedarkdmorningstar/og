"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useCallback, useEffect, useMemo, useRef } from "react"

export type PainType = {
  start: number
  end?: number
}

interface PainProps {
  elapsed: number
}

export default function Pain({ pain }: { pain: PainType[] }) {
  const renderItem = useCallback(
    (item: PainType, index: number) => (
      <Row
        key={item.start}
        no={(index + 1).toString()}
        start={msToTime(item.start)!}
        end={msToTime(item.end) || "-"}
        duration={
          item.end ? msToSecond(item.end)! - msToSecond(item.start)! + "s" : "-"
        }
      />
    ),
    []
  )

  const summary = useMemo(() => {
    const count = pain.length
    const maxDuration = Math.max(
      ...pain.map(({ start, end }) =>
        end ? msToSecond(end)! - msToSecond(start)! : 0
      )
    )

    if (maxDuration === 0 || count === 0) return null

    return `${count} in 10 minutes with ${maxDuration} seconds duration`
  }, [pain])

  const divRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight
    }
  }, [pain])

  return (
    <Card className={"view"}>
      <CardContent className={"view"}>
        <Row />
        <div className={"scroll-view"} ref={divRef}>
          {pain.map(renderItem)}
        </div>
        <div className={"p-2"}>{summary}</div>
      </CardContent>
    </Card>
  )
}

function Row({
  no = "No",
  start = "Start",
  end = "End",
  duration = "Duration",
}: {
  no?: string
  start?: string
  end?: string
  duration?: string
}) {
  return (
    <div className={"p-2 w-full flex flex-row items-center border-b"}>
      <div className={"w-12"}>{no}</div>
      <div className={"flex grow-1"}>{start}</div>
      <div className={"flex grow-1"}>{end}</div>
      <div className={"flex grow-1 text-end"}>{duration}</div>
    </div>
  )
}

function msToTime(millisecond?: number) {
  if (millisecond === 0) return "00:00"

  if (!millisecond) return null

  const sec = Math.floor((millisecond % (60 * 1000)) / 1000)
  const min = Math.floor(millisecond / (60 * 1000))

  return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`
}

function msToSecond(millisecond?: number) {
  if (millisecond === 0) return 0

  if (!millisecond) return null

  return Math.floor(millisecond / 1000)
}
