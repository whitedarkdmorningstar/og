"use client"

import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCallback } from "react"
import { Card, CardContent } from "../ui/card"
import { Field } from "../ui/field"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar"
import { Skeleton } from "../ui/skeleton"
import { ThemeSwitcher } from "./theme-switcher"

const pathnames = {
  pain: "/pain-note",
  maturity: "/maturity",
  EDD: "/edd",
  Notes: "/notes",
} as const

export default function TabsNavigation() {
  const path = usePathname()
  const isMobile = useIsMobile()

  const renderItem = useCallback(
    (key: keyof typeof pathnames) => (
      <Button
        asChild
        key={key}
        variant={path === pathnames[key] ? "outline" : "ghost"}
        className={path === pathnames[key] ? "bg-accent" : ""}
      >
        <Link href={pathnames[key]} className={"capitalize"}>
          {key}
        </Link>
      </Button>
    ),
    [path]
  )

  const renderSideBarItem = useCallback(
    (key: keyof typeof pathnames) => (
      <SidebarMenuItem key={key}>
        <SidebarMenuButton asChild isActive={path === pathnames[key]}>
          <Link href={pathnames[key]} className={"capitalize"}>
            {key}
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    ),
    [path]
  )

  // Skeleton before isMobile is determined
  if (isMobile === undefined) {
    return (
      <Skeleton
        className={
          "h-9 w-75 self-center md:h-50 md:w-48 md:self-start md:order-first"
        }
      />
    )
  }

  if (isMobile === false) {
    return (
      <div className={"order-first md:w-32 lg:w-48"}>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarMenu>
            {(Object.keys(pathnames) as (keyof typeof pathnames)[]).map(
              renderSideBarItem
            )}
          </SidebarMenu>
        </SidebarGroup>
        <ThemeSwitcher />
      </div>
    )
  }

  return (
    <div className={"items-center flex flex-row justify-center gap-6"}>
      <Card className={"self-center [--card-spacing:--spacing(1)]"}>
        <CardContent>
          <Field orientation={"horizontal"} className={"gap-1"}>
            {(Object.keys(pathnames) as (keyof typeof pathnames)[]).map(
              renderItem
            )}
          </Field>
        </CardContent>
      </Card>
      <ThemeSwitcher />
    </div>
  )
}
