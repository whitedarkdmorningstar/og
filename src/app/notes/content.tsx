import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TabsContent } from "@/components/ui/tabs"
import { ReactNode } from "react"

export function Content({
  value,
  title,
  description,
  children,
}: {
  value: string
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <TabsContent className={"view items-center justify-center"} value={value}>
      <Card className={"view flex-1 w-full"}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className={"view"}>
          <div className={"scroll-view leading-6"}>{children}</div>
        </CardContent>
      </Card>
    </TabsContent>
  )
}

export function getTodayDate() {
  const date = new Date()
  const dd = date.getDate().toString().padStart(2, "0")
  const mm = (date.getMonth() + 1).toString().padStart(2, "0")
  const yyyy = date.getFullYear()
  return `${dd}.${mm}.${yyyy}`
}
