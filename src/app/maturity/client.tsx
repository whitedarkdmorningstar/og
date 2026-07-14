"use client";

import DatePicker from "@/components/common/date-picker";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { CardDescription } from "@/components/ui/card";
import { FieldGroup, FieldLegend } from "@/components/ui/field";
import { clsx } from "clsx";
import { Info } from "lucide-react";
import { useCallback, useState } from "react";
import { calculateMaturityByEDD } from "./formula";

export default function Maturity() {
  const [maturity, setMaturity] = useState<string>("");

  const handleChange = useCallback(
    (day: number, month: number, year: number) => {
      setMaturity(calculateMaturityByEDD(day, month, year));
    },
    [],
  );

  return (
    <FieldGroup className={"flex-1"}>
      <FieldLegend>Enter Expected Date of Delivery</FieldLegend>

      <DatePicker onValueChange={handleChange} />

      {Boolean(maturity) && (
        <Alert
          variant={maturity.startsWith("Error") ? "destructive" : "default"}
          className={clsx(maturity.startsWith("Error") && "border-destructive")}
        >
          <AlertTitle>
            {maturity.startsWith("Error") ? (
              maturity
            ) : (
              <>
                Maturity: <b>{maturity}</b>
              </>
            )}
          </AlertTitle>
        </Alert>
      )}

      <div className={"flex flex-1"} />

      <CardDescription className={"flex flex-row items-center gap-4"}>
        <span>
          <Info size={20} />
        </span>
        Maturity is calculated by the days left after 40 weeks subtracts the
        days which is received after EDD subtracts today date.
      </CardDescription>
    </FieldGroup>
  );
}
