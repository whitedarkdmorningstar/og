"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trash2Icon } from "lucide-react"
import { useCallback, useEffect, useMemo, useRef } from "react"
import colors from "tailwindcss/colors"

export type PainType = {
  start: number
  end?: number
  duration?: number
  id: string
  hidden: boolean
}

interface PainProps {
  elapsed: number
}

export default function Pain({
  pain,
  deletePain,
}: {
  pain: PainType[]
  deletePain: (id: string) => void
}) {
  const filterPain = useMemo(
    () => pain.filter((item: PainType) => !item.hidden),
    [pain]
  )

  const renderItem = useCallback(
    (item: PainType, index: number) => (
      <Row
        key={item.start}
        no={(index + 1).toString()}
        start={msToTime(item.start)!}
        end={msToTime(item.end) || "-"}
        duration={item.duration ? item.duration + "s" : "-"}
        deleteItem={() => deletePain(item.id)}
      />
    ),
    [deletePain]
  )

  const summary = useMemo(() => {
    const count = filterPain.filter(
      ({ end, duration }) => Boolean(end) && Boolean(duration)
    ).length
    const maxDuration = Math.max(
      ...filterPain.map(({ start, end }) =>
        end ? msToSecond(end)! - msToSecond(start)! : 0
      )
    )

    if (maxDuration === 0 || count === 0) return null

    return `${count} in 10 minutes with ${maxDuration} seconds duration`
  }, [filterPain])

  const divRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight
    }
  }, [filterPain])

  return (
    <Card className={"view"}>
      <CardContent className={"view"}>
        <Row />
        <div className={"scroll-view"} ref={divRef}>
          {filterPain.map(renderItem)}
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
  deleteItem,
}: {
  no?: string
  start?: string
  end?: string
  duration?: string
  deleteItem?: () => void
}) {
  return (
    <div className={"p-2 gap-2 w-full flex flex-row items-center border-b"}>
      <div className={"min-w-12 w-12"}>{no}</div>
      <div className={"flex-1"}>{start}</div>
      <div className={"flex-1"}>{end}</div>
      <div className={"text-right flex-1"}>{duration}</div>
      <div className={"flex-1 flex justify-end"}>
        {deleteItem ? (
          <Button size={"icon"} variant={"ghost"} onClick={deleteItem}>
            <Trash2Icon color={colors.red[600]} />
          </Button>
        ) : (
          ""
        )}
      </div>
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

export function msToSecond(millisecond?: number) {
  if (millisecond === 0) return 0

  if (!millisecond) return null

  return Math.floor(millisecond / 1000)
}
