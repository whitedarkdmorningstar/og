import TabsNavigation from "@/components/common/tabs-navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"
import NextTopLoader from "nextjs-toploader"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body>
        <ThemeProvider>
          <SidebarProvider>
            <NextTopLoader height={4} color={"rgb(20, 71, 230)"} />
            <div className={"view md:flex-row gap-5 p-5"}>
              <main className={"view"}>{children}</main>
              <TabsNavigation />
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
