import { Metadata } from "next"
import Maturity from "./client"

export const metadata: Metadata = {
  title: "Maturity",
  description:
    "Maturity is calculated by the days left after 40 weeks subtracts the days which is received after EDD subtracts today date.",
}

export default function Page() {
  return <Maturity />
}
