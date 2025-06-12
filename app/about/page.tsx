import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChefHat, Award, Heart, Users, Clock, Star } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Marcus Rivera",
      role: "Executive Chef & Owner",
      bio: "With over 15 years of culinary experience, Chef Marcus brings passion and innovation to every dish. Trained in classical French techniques with a modern American twist.",
      image: "/placeholder.svg?height=300&width=250",
      specialties: ["French Cuisine", "Seasonal Menus", "Wine Pairing"],
    },
    {
      name: "Isabella Chen",
      role: "Pastry Chef",
      bio: "Isabella's artistic background shines through in her exquisite dessert creations. She specializes in combining traditional techniques with contemporary presentation.",
      image: "/placeholder.svg?height=300&width=250",
      specialties: ["Artisan Desserts", "Chocolate Work", "Seasonal Pastries"],
    },
    {
      name: "David Thompson",
      role: "Sous Chef",
      bio: "David's expertise in farm-to-table cooking ensures our ingredients are always fresh and locally sourced. He manages our daily operations with precision and care.",
      image: "/placeholder.svg?height=300&width=250",
      specialties: ["Local Sourcing", "Meat Preparation", "Kitchen Management"],
    },
    {
      name: "Sofia Martinez",
      role: "Restaurant Manager",
      bio: "Sofia ensures every guest has an exceptional dining experience. Her attention to detail and warm hospitality make every visit memorable.",
      image: "/placeholder.svg?height=300&width=250",
      specialties: ["Guest Relations", "Event Planning", "Staff Training"],
    },
  ]

  const achievements = [
    {
      icon: Award,
      title: "Best New Restaurant 2019",
      description: "City Food & Wine Magazine",
    },
    {
      icon: Star,
      title: "4.8/5 Average Rating",
      description: "Based on 500+ reviews",
    },
    {
      icon: Users,
      title: "50,000+ Happy Guests",
      description: "Since opening in 2018",
    },
    {
      icon: Heart,
      title: "Community Partner",
      description: "Supporting local farmers & suppliers",
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-black/60 to-black/40 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/placeholder.svg?height=600&width=1200" alt="Restaurant interior" fill className="object-cover" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About The Black Penny</h1>
          <p className="text-xl">Where culinary passion meets exceptional hospitality</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  The Black Penny was born from a simple belief: that exceptional food brings people together and
                  creates lasting memories. Founded in 2018 by Chef Marcus Rivera, our restaurant has become a
                  cornerstone of the local dining scene.
                </p>
                <p>
                  What started as a dream to create a neighborhood gathering place has evolved into an award-winning
                  restaurant that celebrates both culinary artistry and warm hospitality. We believe in the power of
                  fresh, locally-sourced ingredients and the magic that happens when skilled hands transform them into
                  memorable dishes.
                </p>
                <p>
                  Every day, we strive to create not just meals, but experiences that nourish both body and soul. From
                  intimate date nights to celebratory gatherings, we're honored to be part of your special moments.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Chef Marcus in kitchen"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Philosophy</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe great dining is about more than just food—it's about creating connections, celebrating moments,
              and crafting experiences that linger long after the last bite.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <ChefHat className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Culinary Excellence</h3>
              <p className="text-gray-600">
                We source the finest ingredients and employ time-honored techniques to create dishes that delight the
                senses and showcase the natural flavors of each component.
              </p>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Warm Hospitality</h3>
              <p className="text-gray-600">
                Every guest is welcomed like family. Our attentive service aims to anticipate your needs while giving
                you space to enjoy your dining experience.
              </p>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <Heart className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Community Connection</h3>
              <p className="text-gray-600">
                We're proud to support local farmers, producers, and artisans. By building these relationships, we
                strengthen our community and ensure the freshest ingredients.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate individuals who bring The Black Penny to life every day
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-amber-600 mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty) => (
                      <Badge key={specialty} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Recognitions that reflect our commitment to excellence
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <achievement.icon className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300&text=Ingredients"
                    alt="Fresh ingredients"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300&text=Kitchen"
                    alt="Kitchen"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300&text=Plating"
                    alt="Food plating"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=300&text=Service"
                    alt="Service"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Values</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Tradition & Innovation</h3>
                    <p className="text-gray-600">
                      We honor culinary traditions while embracing innovation, creating dishes that are both familiar
                      and surprising.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Award className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Without Compromise</h3>
                    <p className="text-gray-600">
                      From ingredients to service, we never compromise on quality. Every detail matters in creating an
                      exceptional dining experience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Heart className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                    <p className="text-gray-600">
                      We're committed to sustainable practices, from sourcing local ingredients to minimizing waste and
                      supporting ethical producers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Inclusivity</h3>
                    <p className="text-gray-600">
                      We create a welcoming environment for all guests and team members, celebrating diversity in our
                      community and cuisine.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
