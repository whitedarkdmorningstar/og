"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useIsMobile } from "@/hooks/use-mobile"
import { Laptop, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useCallback } from "react"

const THEMES = [
  { label: "Light", icon: <Sun />, value: "light" },
  { label: "Dark", icon: <Moon />, value: "dark" },
  {
    label: "System",
    icon: <Laptop />,
    value: "system",
  },
] as const

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()
  const isMobile = useIsMobile()

  const renderSidebarItem = useCallback(
    (item: (typeof THEMES)[number]) => (
      <SidebarMenuItem key={item.value}>
        <SidebarMenuButton
          isActive={theme === item.value}
          onClick={() => setTheme(item.value)}
        >
          {item.icon} {item.label}
        </SidebarMenuButton>
      </SidebarMenuItem>
    ),
    [setTheme, theme]
  )

  const renderDropdownItem = useCallback(
    (item: (typeof THEMES)[number]) => (
      <DropdownMenuItem key={item.value} onClick={() => setTheme(item.value)}>
        {item.icon} {item.label}
      </DropdownMenuItem>
    ),
    [setTheme]
  )

  if (isMobile === undefined) return null

  if (isMobile === false) {
    return (
      <SidebarGroup>
        <SidebarGroupLabel>Theme</SidebarGroupLabel>
        <SidebarMenu>{THEMES.map(renderSidebarItem)}</SidebarMenu>
      </SidebarGroup>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={"min-w-0 md:min-w-0 rounded-[100px] h-11 w-11"}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {THEMES.map(renderDropdownItem)}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
