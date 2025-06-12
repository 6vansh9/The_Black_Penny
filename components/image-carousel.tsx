"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Camera } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type CarouselImage = {
  id: number
  src: string
  alt: string
  title: string
  description: string
  category: string
}

const featuredImages: CarouselImage[] = [
  {
    id: 1,
    src: "/placeholder.svg?height=600&width=1200&text=Restaurant+Interior",
    alt: "Restaurant main dining area",
    title: "Elegant Dining Experience",
    description: "Our warm and inviting main dining area sets the perfect atmosphere for memorable meals",
    category: "Interior",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=600&width=1200&text=Truffle+Risotto",
    alt: "Truffle Risotto",
    title: "Signature Truffle Risotto",
    description: "Creamy arborio rice with wild mushrooms and black truffle oil - a customer favorite",
    category: "Food",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=600&width=1200&text=Wine+Tasting+Event",
    alt: "Wine Tasting Event",
    title: "Exclusive Wine Events",
    description: "Join us for intimate wine tastings featuring selections from renowned vineyards",
    category: "Events",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=600&width=1200&text=Chef+Plating",
    alt: "Chef plating a dish",
    title: "Culinary Artistry",
    description: "Watch our talented chefs create beautiful dishes with passion and precision",
    category: "Behind the Scenes",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=600&width=1200&text=Outdoor+Patio",
    alt: "Outdoor patio seating",
    title: "Al Fresco Dining",
    description: "Enjoy your meal in our charming outdoor patio surrounded by beautiful ambiance",
    category: "Interior",
  },
]

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + featuredImages.length) % featuredImages.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredImages.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const currentImage = featuredImages[currentIndex]

  return (
    <section className="relative h-[70vh] overflow-hidden bg-gray-900">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src={currentImage.src || "/placeholder.svg"}
            alt={currentImage.alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-4">
                  <span className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {currentImage.category}
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{currentImage.title}</h2>
                <p className="text-xl mb-8 text-gray-200">{currentImage.description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
                    <Link href="/gallery">
                      <Camera className="mr-2 h-5 w-5" />
                      View Gallery
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black"
                  >
                    <Link href="/reservations">Make Reservation</Link>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {featuredImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-amber-600" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="bg-black/50 hover:bg-black/70 text-white px-3 py-1 rounded-full text-sm transition-colors"
        >
          {isAutoPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </section>
  )
}
