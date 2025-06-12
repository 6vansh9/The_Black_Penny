import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Phone, Star, Calendar, Users, ChefHat } from "lucide-react"
import { ImageCarousel } from "@/components/image-carousel"

export default function HomePage() {
  const featuredMenuItems = [
    {
      name: "Truffle Risotto",
      description: "Creamy arborio rice with wild mushrooms and black truffle oil",
      price: "$28",
      image: "/placeholder.svg?height=200&width=300",
      category: "Main Course",
      dietary: ["Vegetarian"],
    },
    {
      name: "Pan-Seared Salmon",
      description: "Atlantic salmon with lemon herb butter and seasonal vegetables",
      price: "$32",
      image: "/placeholder.svg?height=200&width=300",
      category: "Main Course",
      dietary: ["Gluten-Free"],
    },
    {
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center and vanilla ice cream",
      price: "$12",
      image: "/placeholder.svg?height=200&width=300",
      category: "Dessert",
      dietary: [],
    },
  ]

  const upcomingEvents = [
    {
      title: "Wine Tasting Evening",
      date: "December 15, 2024",
      time: "7:00 PM",
      description: "Join us for an exclusive wine tasting featuring selections from local vineyards",
    },
    {
      title: "Chef's Table Experience",
      date: "December 22, 2024",
      time: "6:30 PM",
      description: "An intimate dining experience with our head chef's special tasting menu",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-black/60 to-black/40">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source
              src="https://xsaecrrqjokviynpuvwp.supabase.co/storage/v1/object/sign/homepage-media/My%20Movie.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80OWVmOTg4NC0yZDc0LTQwNmUtOWFmZi1mNWM3MzdmMjRkN2MiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJob21lcGFnZS1tZWRpYS9NeSBNb3ZpZS5tcDQiLCJpYXQiOjE3NDk3MjY2NjQsImV4cCI6MTgzNjEyNjY2NH0.ohkVd3tNkqjrzDRn3yHgghhB8ebTNOf-PwoNZ7XXoYE"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">The Black Penny</h1>
          <p className="text-xl md:text-2xl mb-8 font-light">A modern take on classic British fare.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
              <Link href="/reservations">Make a Reservation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3"
            >
              <Link href="/menu">View Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-amber-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Mon-Fri: 08:00am-05:00pm | Weekends: 09:00am-06:00pm</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>17 Casson Square, London, SE1 7BQ</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+44 207 928 83 83</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image Carousel */}
      <ImageCarousel />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2018, The Black Penny has been serving exceptional cuisine that celebrates both local
                ingredients and international flavors. Our passionate team of chefs creates memorable dining experiences
                that bring people together around the table.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From intimate date nights to celebratory gatherings, we provide the perfect setting for life's special
                moments with our carefully crafted dishes and warm, welcoming atmosphere.
              </p>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">8+</div>
                  <div className="text-sm text-gray-600">Years Serving</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">60K+</div>
                  <div className="text-sm text-gray-600">Happy Guests</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">4.7</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Chef preparing food"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <ChefHat className="h-8 w-8 text-amber-600" />
                  <div>
                    <div className="font-semibold">Chef Marcus Rivera</div>
                    <div className="text-sm text-gray-600">Executive Chef</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Featured Dishes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our chef's signature creations, crafted with the finest ingredients and presented with artistic
              flair
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredMenuItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90">
                      {item.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <span className="text-xl font-bold text-amber-600">{item.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  {item.dietary.length > 0 && (
                    <div className="flex gap-2">
                      {item.dietary.map((diet) => (
                        <Badge key={diet} variant="outline" className="text-xs">
                          {diet}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Upcoming Events</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us for special dining experiences and culinary celebrations
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Calendar className="h-6 w-6 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span>{event.date}</span>
                      <span>{event.time}</span>
                    </div>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/events">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Guests Say</h2>
            <div className="flex justify-center items-center gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-lg">4.8 out of 5 stars</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                review:
                  "Absolutely incredible dining experience! The truffle risotto was divine and the service was impeccable.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                review:
                  "Perfect for our anniversary dinner. The ambiance is romantic and the food exceeded our expectations.",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                review:
                  "The chef's table experience was unforgettable. Every course was a work of art. Highly recommend!",
                rating: 5,
              },
            ].map((review, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{review.review}"</p>
                <div className="font-semibold">- {review.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Dine With Us?</h2>
          <p className="text-xl mb-8 opacity-90">Reserve your table today and experience culinary excellence</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="px-8 py-3">
              <Link href="/reservations">
                <Users className="mr-2 h-5 w-5" />
                Make Reservation
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
