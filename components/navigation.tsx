"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const leftNavItems = [
    { href: "/", label: "HOME" },
    { href: "/menu", label: "MENU" },
    { href: "/reservations", label: "BOOKINGS" },
    { href: "/locations", label: "LOCATIONS" },
  ]

  const rightNavItems = [
    { href: "/events", label: "CATERING" },
    { href: "/gallery", label: "NEWS" },
    { href: "/about", label: "WORK WITH US" },
    { href: "/contact", label: "CONTACT US" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-teal-800 border-b border-teal-700 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {leftNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-teal-200 transition-colors text-xs font-medium tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
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
                  <div className="pt-6 border-t">
                    <a href="tel:+442079288383" className="flex items-center text-gray-700 hover:text-amber-600 mb-4">
                      <Phone className="h-4 w-4 mr-2" />
                      +44 207 928 83 83
                    </a>
                    <Button asChild className="w-full bg-amber-600 hover:bg-amber-700">
                      <Link href="/reservations" onClick={() => setIsOpen(false)}>
                        Reserve Table
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Centered Logo */}
          <div className="flex-1 md:flex-none flex justify-center">
            <Link
              href="/"
              className="text-xl md:text-2xl font-bold text-white tracking-widest uppercase border-b-2 border-transparent"
            >
              THE BLACK PENNY
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {rightNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-teal-200 transition-colors text-xs font-medium tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
