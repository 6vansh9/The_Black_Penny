"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Loader2, AlertTriangle } from "lucide-react"
import { motion } from "framer-motion"
import { supabase, type GalleryItem } from "@/lib/supabase"

export default function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [tableExists, setTableExists] = useState(false)

  useEffect(() => {
    fetchGalleryItems()
  }, [])

  const fetchGalleryItems = async () => {
    try {
      setLoading(true)

      // Try to query the table
      const { data, error } = await supabase.from("gallery").select("*").order("id", { ascending: false })

      if (error) {
        // Check if the error is about table not existing
        if (error.message.includes("does not exist") || error.message.includes("relation") || error.code === "42P01") {
          console.log("Gallery table does not exist")
          setTableExists(false)
          setError("The gallery table doesn't exist in the database yet. Please run the setup scripts first.")
        } else {
          throw error
        }
      } else {
        setTableExists(true)
        setGalleryItems(data || [])
      }
    } catch (error: any) {
      console.error("Error fetching gallery items:", error)
      setError("Failed to load gallery images. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  const openImageDialog = (image: GalleryItem) => {
    setSelectedImage(image)
    setIsDialogOpen(true)
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  // Sample gallery items to show when the table doesn't exist
  const sampleGalleryItems = [
    {
      id: 1,
      image_url: "/placeholder.svg?height=600&width=800&text=Restaurant+Interior",
      caption: "Our elegant main dining area with warm lighting",
    },
    {
      id: 2,
      image_url: "/placeholder.svg?height=600&width=800&text=Truffle+Risotto+Dish",
      caption: "Signature truffle risotto - a customer favorite",
    },
    {
      id: 3,
      image_url: "/placeholder.svg?height=600&width=800&text=Chef+Plating",
      caption: "Our chef carefully plating a signature dish",
    },
    {
      id: 4,
      image_url: "/placeholder.svg?height=600&width=800&text=Wine+Tasting+Event",
      caption: "Guests enjoying our monthly wine tasting event",
    },
    {
      id: 5,
      image_url: "/placeholder.svg?height=600&width=800&text=Outdoor+Patio",
      caption: "Charming outdoor patio for al fresco dining",
    },
    {
      id: 6,
      image_url: "/placeholder.svg?height=600&width=800&text=Bar+Area",
      caption: "Our well-stocked bar featuring craft cocktails",
    },
    {
      id: 7,
      image_url: "/placeholder.svg?height=600&width=800&text=Private+Dining",
      caption: "Intimate private dining room for special occasions",
    },
    {
      id: 8,
      image_url: "/placeholder.svg?height=600&width=800&text=Kitchen+Team",
      caption: "Our talented kitchen team working together",
    },
  ]

  if (loading) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-amber-600" />
          <p className="text-gray-600">Loading our beautiful gallery...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-black/60 to-black/40 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=400&width=1200&text=Gallery"
            alt="Gallery hero"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl">Experience The Black Penny through our lens</p>
        </div>
      </section>

      {/* Database Setup Notice */}
      {!tableExists && (
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-8 mx-auto max-w-4xl">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-amber-800">Database Setup Required</h3>
              <div className="mt-2 text-amber-700">
                <p>
                  The gallery database table hasn't been set up yet. To see actual gallery images, please run the setup
                  scripts:
                </p>
                <ol className="list-decimal ml-5 mt-2 space-y-1">
                  <li>Go to your Supabase dashboard → SQL Editor</li>
                  <li>
                    Run <code className="bg-amber-100 px-1 rounded">scripts/create-tables.sql</code> to create the
                    tables
                  </li>
                  <li>
                    Run <code className="bg-amber-100 px-1 rounded">scripts/seed-gallery-data.sql</code> to add sample
                    gallery images
                  </li>
                  <li>Refresh this page to see the actual gallery</li>
                </ol>
                <p className="mt-2">In the meantime, we're showing you sample gallery images below.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Gallery</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a visual journey through our restaurant, dishes, and memorable moments
            </p>
            {!tableExists && (
              <p className="text-sm text-amber-600 mt-2">
                ⚠️ Showing sample gallery - run database setup scripts to see actual images
              </p>
            )}
          </div>

          {!tableExists ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {sampleGalleryItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => openImageDialog(item)}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Image
                    src={item.image_url || "/placeholder.svg?height=300&width=300"}
                    alt={item.caption}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-semibold">{item.caption}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600 mb-4">{error}</p>
              <button
                onClick={fetchGalleryItems}
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg"
              >
                Try Again
              </button>
            </div>
          ) : galleryItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No gallery images available at the moment.</p>
              <p className="text-gray-500">
                Please check back later for beautiful photos of our restaurant and dishes.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => openImageDialog(item)}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Image
                    src={item.image_url || "/placeholder.svg?height=300&width=300"}
                    alt={item.caption}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.svg?height=300&width=300&text=" + encodeURIComponent(item.caption)
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-semibold">{item.caption}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Image Dialog/Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
          {selectedImage && (
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="relative h-[70vh]">
                <Image
                  src={selectedImage.image_url || "/placeholder.svg"}
                  alt={selectedImage.caption}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2">{selectedImage.caption}</h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Social Media Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to See More?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Follow us on social media for daily updates and behind-the-scenes content from The Black Penny.
          </p>
          <div className="flex justify-center gap-4">
            <button className="border border-amber-600 text-amber-600 hover:bg-amber-50 px-6 py-2 rounded-lg transition-colors">
              Follow on Instagram
            </button>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg transition-colors">
              Visit Our Facebook
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
