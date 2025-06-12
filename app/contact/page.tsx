"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Navigation } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Contact form submitted:", formData)
    alert("Thank you for your message! We'll get back to you shortly.")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const locations = [
    {
      name: "SouthBank Location",
      address: "17 Casson Square, London, SE1 7BQ",
      phone: "+44 207 928 83 83",
      email: "southbank@theblackpenny.com",
      hours: {
        weekdays: "Mon-Fri: 08:00am-05:00pm",
        saturday: "Saturday: 09:00am-06:00pm",
        sunday: "Sunday: 09:00am-05:00pm",
      },
      transport: "Waterloo Station - 5 minute walk",
      image: "/images/southbank-map.png",
    },
    // You can add more locations here in the future
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with questions, feedback, or to make special arrangements.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>

                  <div>
                    <Label>Subject *</Label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) => handleInputChange("subject", value)}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="reservation">Reservation Question</SelectItem>
                        <SelectItem value="private-event">Private Event</SelectItem>
                        <SelectItem value="catering">Catering Inquiry</SelectItem>
                        <SelectItem value="workplace-catering">Workplace Catering</SelectItem>
                        <SelectItem value="private-venue">Private Venue Hire</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="career">Career Opportunity</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Connect With Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4 mb-6">
                    <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
                      <Facebook className="h-6 w-6 text-gray-700" />
                    </a>
                    <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
                      <Instagram className="h-6 w-6 text-gray-700" />
                    </a>
                    <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
                      <Twitter className="h-6 w-6 text-gray-700" />
                    </a>
                  </div>
                  <p className="text-gray-600">
                    Follow us on social media for updates, behind-the-scenes content, and special promotions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-amber-50 border-amber-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-amber-800 mb-2">Catering & Private Events</h4>
                  <p className="text-sm text-amber-700 mb-4">
                    Looking for workplace catering or private venue hire? We offer comprehensive catering solutions and
                    can accommodate special occasions.
                  </p>
                  <Button asChild variant="outline" className="border-amber-600 text-amber-700 hover:bg-amber-100">
                    <a href="/catering">View Catering Options</a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Accessibility</h4>
                  <p className="text-sm text-gray-600">
                    Our restaurant is fully accessible with ramp entrance and accessible restrooms. Please let us know
                    if you have any specific accessibility requirements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations - Moved to Bottom */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Locations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Visit us at our beautiful locations across London</p>
          </div>

          {locations.map((location, index) => (
            <div key={index} className="max-w-6xl mx-auto mb-12">
              <Card className="overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Location Info */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900">{location.name}</h3>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-amber-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Address</h4>
                          <p className="text-gray-600">{location.address}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-amber-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Phone</h4>
                          <p className="text-gray-600">{location.phone}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-amber-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Email</h4>
                          <p className="text-gray-600">{location.email}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-amber-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Hours</h4>
                          <div className="text-gray-600">
                            <p>{location.hours.weekdays}</p>
                            <p>{location.hours.saturday}</p>
                            <p>{location.hours.sunday}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Navigation className="h-5 w-5 text-amber-600 mt-1" />
                        <div>
                          <h4 className="font-semibold">Transport</h4>
                          <p className="text-gray-600">{location.transport}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild className="bg-amber-600 hover:bg-amber-700">
                        <a
                          href="https://www.google.com/maps/place/The+Black+Penny+Brunch+SouthBank/@51.494367,-0.098994,15z/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MapPin className="mr-2 h-4 w-4" />
                          Get Directions
                        </a>
                      </Button>
                      <Button asChild variant="outline">
                        <a href={`tel:${location.phone}`}>
                          <Phone className="mr-2 h-4 w-4" />
                          Call Now
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Map */}
                  <div className="relative h-96 lg:h-full">
                    <Image
                      src={location.image || "/placeholder.svg"}
                      alt={`${location.name} map`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
