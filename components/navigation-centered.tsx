"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const leftNavItems = [
    { href: "/", label: "HOME" },
    { href: "/menu", label: "MENU" },
    { href: "/reservations", label: "BOOKINGS" },
    { href: "/catering", label: "CATERING" },
  ]

  const rightNavItems = [
    { href: "/events", label: "EVENTS" },
    { href: "/gallery", label: "GALLERY" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-[#004d4d] z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-8">
              {leftNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-gray-300 text-xs font-semibold tracking-[0.1em] py-6 inline-block uppercase transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden py-4">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-6 mt-8">
                  {[...leftNavItems, ...rightNavItems].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg font-medium text-gray-700 hover:text-amber-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Centered Logo */}
          <div className="flex justify-center py-4">
            <Link
              href="/"
              className="text-white text-xl font-bold tracking-[0.25em] border-b border-white/40 pb-1 uppercase"
            >
              THE BLACK PENNY
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-8">
              {rightNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-gray-300 text-xs font-semibold tracking-[0.1em] py-6 inline-block uppercase transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
