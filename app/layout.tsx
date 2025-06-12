import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation-centered"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Black Penny - Fine Dining Restaurant",
  description:
    "Experience culinary excellence at The Black Penny. Fine dining restaurant featuring seasonal menus, wine pairings, and exceptional service.",
  keywords: "restaurant, fine dining, seasonal menu, wine pairing, reservations",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
