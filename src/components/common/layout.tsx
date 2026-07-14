import React from "react"

export default function Layout({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={"view lg:flex-row gap-5"}>{children}</div>
}
