import { Metadata } from "next"
import PainNote from "./pain-note"

export const metadata: Metadata = {
  title: "Pain Note",
  description: "Just a stopwatch app to note the labour pain for 10 minutes.",
}

export default function Page() {
  return <PainNote />
}
