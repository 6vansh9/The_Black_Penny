"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import { supabase, type MenuItem } from "@/lib/supabase"

export function DynamicMenu() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [tableExists, setTableExists] = useState(false)

  useEffect(() => {
    fetchMenuItems()
  }, [])

  const fetchMenuItems = async () => {
    try {
      setLoading(true)

      // Try to query the table
      const { data, error } = await supabase.from("menu").select("*").order("name")

      if (error) {
        // Check if the error is about table not existing
        if (error.message.includes("does not exist") || error.message.includes("relation") || error.code === "42P01") {
          console.log("Menu table does not exist")
          setTableExists(false)
          setError("The menu table doesn't exist in the database yet. Please run the setup scripts first.")
        } else {
          throw error
        }
      } else {
        setTableExists(true)
        setMenuItems(data || [])
      }
    } catch (error: any) {
      console.error("Error fetching menu items:", error)
      setError("Failed to load menu items. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  // Sample menu items to show when the table doesn't exist
  const sampleMenuItems = [
    {
      id: 1,
      name: "Truffle Risotto",
      description: "Creamy arborio rice with wild mushrooms and black truffle oil",
      price: 28,
      image_url: "/placeholder.svg?height=200&width=300&text=Truffle+Risotto",
    },
    {
      id: 2,
      name: "Pan-Seared Salmon",
      description: "Atlantic salmon with lemon herb butter and seasonal vegetables",
      price: 32,
      image_url: "/placeholder.svg?height=200&width=300&text=Pan-Seared+Salmon",
    },
    {
      id: 3,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center and vanilla ice cream",
      price: 12,
      image_url: "/placeholder.svg?height=200&width=300&text=Chocolate+Lava+Cake",
    },
    {
      id: 4,
      name: "Dry-Aged Ribeye",
      description: "28-day aged ribeye with roasted bone marrow and red wine jus",
      price: 58,
      image_url: "/placeholder.svg?height=200&width=300&text=Dry-Aged+Ribeye",
    },
    {
      id: 5,
      name: "Burrata Caprese",
      description: "Fresh burrata with heirloom tomatoes, basil oil, and aged balsamic",
      price: 18,
      image_url: "/placeholder.svg?height=200&width=300&text=Burrata+Caprese",
    },
    {
      id: 6,
      name: "Duck Confit",
      description: "Slow-cooked duck leg with cherry gastrique and roasted potatoes",
      price: 36,
      image_url: "/placeholder.svg?height=200&width=300&text=Duck+Confit",
    },
  ]

  if (loading) {
    return (
      <div className="min-h-[300px] flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-amber-600" />
          <p className="text-gray-600">Loading our delicious menu...</p>
        </div>
      </div>
    )
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Featured Dishes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of our most popular dishes, available on our All Day Menu
          </p>
          {!tableExists && (
            <p className="text-sm text-amber-600 mt-2">
              ⚠️ Showing sample menu - run database setup scripts to see actual menu items
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(!tableExists ? sampleMenuItems : menuItems).map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={item.image_url || "/placeholder.svg?height=200&width=300"}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-xl font-bold text-amber-600">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
