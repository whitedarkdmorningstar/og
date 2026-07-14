import { Metadata } from "next"
import EDD from "./client"

export const metadata: Metadata = {
  title: "EDD",
  description: "EDD is calculated by adding 40 weeks to date of LMP.",
}

export default function Page() {
  return <EDD />
}
