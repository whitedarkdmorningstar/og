"use client"

import DatePicker from "@/components/common/date-picker"
import { Alert, AlertTitle } from "@/components/ui/alert"
import { CardDescription } from "@/components/ui/card"
import { FieldGroup, FieldLegend } from "@/components/ui/field"
import { clsx } from "clsx"
import { Info } from "lucide-react"
import { useCallback, useState } from "react"
import { calculateEDDByLMP } from "./formula"

export default function EDD() {
  const [EDD, setEDD] = useState<string>("")

  const handleChange = useCallback(
    (day: number, month: number, year: number) => {
      setEDD(calculateEDDByLMP(day, month, year))
    },
    []
  )

  return (
    <FieldGroup className={"flex-1"}>
      <FieldLegend>Enter Last Menstrual Period Date</FieldLegend>

      <DatePicker onValueChange={handleChange} />

      {Boolean(EDD) && (
        <Alert
          variant={EDD.startsWith("Error") ? "destructive" : "default"}
          className={clsx(EDD.startsWith("Error") && "border-destructive")}
        >
          <AlertTitle>
            EDD: <b>{EDD}</b>
          </AlertTitle>
        </Alert>
      )}

      <div className={"flex flex-1"} />

      <CardDescription className={"flex flex-row items-center gap-4"}>
        <span>
          <Info size={20} />
        </span>
        EDD is calculated by adding 40 weeks to date of LMP.
      </CardDescription>
    </FieldGroup>
  )
}
