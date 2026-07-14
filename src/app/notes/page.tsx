import { FieldContent } from "@/components/ui/field"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Metadata } from "next"
import DeliveryNote from "./delivery"
import EctopicNote from "./ectopic"
import LSCSNote from "./lscs"
import MVANote from "./mva"

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Notes of OG. Delivery notes, OT Notes, LSCS, Ectopic pregnancy, MVA Notes.",
}

export default function Page() {
  return (
    <FieldContent className={"view"}>
      <Tabs defaultValue={"delivery"} className={"view w-full"}>
        <TabsList className={"w-full"}>
          <TabsTrigger value={"delivery"}>Delivery</TabsTrigger>
          <TabsTrigger value={"lscs"}>LSCS</TabsTrigger>
          <TabsTrigger value={"ectopic"}>Ectopic</TabsTrigger>
          <TabsTrigger value={"mva"}>MVA</TabsTrigger>
        </TabsList>
        <DeliveryNote />
        <LSCSNote />
        <EctopicNote />
        <MVANote />
      </Tabs>
    </FieldContent>
  )
}
