import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, MapPin, Wine, Music, Heart, Star } from "lucide-react"

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "Wine Tasting Evening",
      date: "December 15, 2024",
      time: "7:00 PM - 10:00 PM",
      price: "$75 per person",
      description:
        "Join us for an exclusive wine tasting featuring selections from renowned vineyards. Our sommelier will guide you through five carefully chosen wines paired with artisanal cheeses and charcuterie.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Wine Event",
      capacity: "Limited to 20 guests",
      icon: Wine,
    },
    {
      title: "Chef's Table Experience",
      date: "December 22, 2024",
      time: "6:30 PM - 9:30 PM",
      price: "$125 per person",
      description:
        "An intimate dining experience where you'll watch our head chef prepare a seven-course tasting menu. Interact with the chef and learn about the inspiration behind each dish.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Culinary Experience",
      capacity: "Limited to 8 guests",
      icon: Star,
    },
    {
      title: "Live Jazz Night",
      date: "December 28, 2024",
      time: "8:00 PM - 11:00 PM",
      price: "No cover charge",
      description:
        "Enjoy smooth jazz performances by local musicians while dining on our regular menu. The perfect atmosphere for a romantic evening or night out with friends.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Live Music",
      capacity: "Regular seating",
      icon: Music,
    },
    {
      title: "New Year's Eve Celebration",
      date: "December 31, 2024",
      time: "8:00 PM - 1:00 AM",
      price: "$150 per person",
      description:
        "Ring in the new year with a special five-course menu, champagne toast at midnight, and live entertainment. Includes party favors and a memorable evening.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Holiday Special",
      capacity: "Full restaurant",
      icon: Star,
    },
  ]

  const privateEventTypes = [
    {
      title: "Wedding Receptions",
      description: "Celebrate your special day with elegant dining and personalized service",
      capacity: "Up to 80 guests",
      image: "/placeholder.svg?height=200&width=300",
      icon: Heart,
    },
    {
      title: "Corporate Events",
      description: "Professional atmosphere for business dinners and company celebrations",
      capacity: "10-60 guests",
      image: "/placeholder.svg?height=200&width=300",
      icon: Users,
    },
    {
      title: "Birthday Parties",
      description: "Make your birthday memorable with custom menus and decorations",
      capacity: "8-40 guests",
      image: "/placeholder.svg?height=200&width=300",
      icon: Star,
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-black/60 to-black/40 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/placeholder.svg?height=400&width=1200" alt="Events hero" fill className="object-cover" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Events & Experiences</h1>
          <p className="text-xl">Special occasions deserve exceptional moments at The Black Penny</p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Upcoming Events</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us for these special culinary experiences and celebrations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-amber-600 text-white">{event.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <event.icon className="h-6 w-6 text-amber-600 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {event.capacity}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-amber-600">{event.price}</span>
                        <Button className="bg-amber-600 hover:bg-amber-700">Reserve Spot</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Private Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Private Events</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Host your special occasion in our elegant dining room with personalized service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {privateEventTypes.map((eventType, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <div className="relative h-40">
                  <Image
                    src={eventType.image || "/placeholder.svg"}
                    alt={eventType.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <eventType.icon className="h-8 w-8 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{eventType.title}</h3>
                  <p className="text-gray-600 mb-3">{eventType.description}</p>
                  <Badge variant="outline">{eventType.capacity}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Private Event Inquiry */}
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Plan Your Private Event</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4">What We Offer</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Customized menus for dietary preferences</li>
                    <li>• Dedicated event coordinator</li>
                    <li>• Flexible seating arrangements</li>
                    <li>• Audio/visual equipment available</li>
                    <li>• Personalized decorations</li>
                    <li>• Professional photography coordination</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Event Packages</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-amber-600 pl-4">
                      <div className="font-semibold">Intimate Gathering</div>
                      <div className="text-sm text-gray-600">8-20 guests • Starting at $65/person</div>
                    </div>
                    <div className="border-l-4 border-amber-600 pl-4">
                      <div className="font-semibold">Celebration Package</div>
                      <div className="text-sm text-gray-600">21-50 guests • Starting at $55/person</div>
                    </div>
                    <div className="border-l-4 border-amber-600 pl-4">
                      <div className="font-semibold">Grand Event</div>
                      <div className="text-sm text-gray-600">51-80 guests • Starting at $45/person</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-8">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  <MapPin className="mr-2 h-5 w-5" />
                  Inquire About Private Events
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Event Gallery</h2>
            <p className="text-lg text-gray-600">Take a look at some of our memorable events and celebrations</p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="relative h-48 rounded-lg overflow-hidden hover:scale-105 transition-transform">
                <Image
                  src={`/placeholder.svg?height=200&width=300&text=Event${i}`}
                  alt={`Event photo ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
