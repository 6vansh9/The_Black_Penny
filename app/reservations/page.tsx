"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Clock, Users, Phone, Mail, CheckCircle, Loader2, AlertTriangle } from "lucide-react"
import { format } from "date-fns"
import { supabase, type Reservation } from "@/lib/supabase"

export default function ReservationsPage() {
  const [date, setDate] = useState<Date>()
  const [loading, setLoading] = useState(false)
  const [checkingTable, setCheckingTable] = useState(true)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [tableExists, setTableExists] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    people: "",
    time: "",
  })

  const timeSlots = [
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
    "10:00 PM",
  ]

  useEffect(() => {
    checkTableExists()
  }, [])

  const checkTableExists = async () => {
    try {
      setCheckingTable(true)

      // Try to query the table with a simple select
      const { data, error } = await supabase.from("reservations").select("id").limit(1)

      if (error) {
        // Check if the error is about table not existing
        if (error.message.includes("does not exist") || error.message.includes("relation") || error.code === "42P01") {
          console.log("Reservations table does not exist")
          setTableExists(false)
        } else {
          // Some other error, but table might exist
          console.error("Error checking table:", error)
          setTableExists(true) // Assume it exists and let the form handle the error
        }
      } else {
        // Query succeeded, table exists
        setTableExists(true)
      }
    } catch (error) {
      console.error("Error checking table existence:", error)
      setTableExists(false)
    } finally {
      setCheckingTable(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!tableExists) {
      setError("The reservations table doesn't exist in the database yet. Please run the setup scripts first.")
      return
    }

    if (!date) {
      setError("Please select a date for your reservation.")
      return
    }

    setLoading(true)
    setError(null)

    try {
      const reservationData: Omit<Reservation, "id"> = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: format(date, "yyyy-MM-dd"),
        time: formData.time,
        people: Number.parseInt(formData.people),
      }

      const { error } = await supabase.from("reservations").insert([reservationData])

      if (error) {
        if (error.message.includes("does not exist") || error.message.includes("relation") || error.code === "42P01") {
          setTableExists(false)
          setError("The reservations table doesn't exist in the database yet. Please run the setup scripts first.")
        } else {
          throw error
        }
        return
      }

      setSuccess(true)
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        people: "",
        time: "",
      })
      setDate(undefined)
    } catch (error: any) {
      console.error("Error creating reservation:", error)
      setError("Failed to create reservation. Please try again or call us directly.")
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (error) setError(null)
  }

  if (checkingTable) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-amber-600" />
          <p className="text-gray-600">Loading reservation system...</p>
        </div>
      </div>
    )
  }

  if (success) {
    return (
      <div className="min-h-screen pt-16 bg-gray-50">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <Card className="p-8">
                <div className="text-center">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h1 className="text-3xl font-bold mb-4 text-gray-900">Reservation Confirmed!</h1>
                  <p className="text-lg text-gray-600 mb-6">
                    Thank you for your reservation. We've sent a confirmation email with all the details.
                  </p>
                  <p className="text-gray-600 mb-8">
                    We look forward to serving you at The Black Penny. If you need to make any changes, please call us
                    at{" "}
                    <a href="tel:555-123-7766" className="text-amber-600 font-semibold">
                      (555) 123-SPOON
                    </a>
                  </p>
                  <Button onClick={() => setSuccess(false)} className="bg-amber-600 hover:bg-amber-700">
                    Make Another Reservation
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Make a Reservation</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Reserve your table for an unforgettable dining experience. We look forward to serving you.
          </p>
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
                  The reservations database table hasn't been set up yet. To enable actual reservations, please run the
                  setup scripts:
                </p>
                <ol className="list-decimal ml-5 mt-2 space-y-1">
                  <li>Go to your Supabase dashboard → SQL Editor</li>
                  <li>
                    Run <code className="bg-amber-100 px-1 rounded">scripts/create-tables.sql</code> to create the
                    tables
                  </li>
                  <li>Refresh this page to enable reservations</li>
                </ol>
                <p className="mt-2">
                  You can still fill out the form below, but reservations won't be saved until the database is set up.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Reservation Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Reservation Details</CardTitle>
                {!tableExists && (
                  <p className="text-sm text-amber-600">
                    ⚠️ Demo mode - reservations won't be saved until database is set up
                  </p>
                )}
              </CardHeader>
              <CardContent>
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        disabled={loading}
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
                        disabled={loading}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                      disabled={loading}
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label>Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                            disabled={loading}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            disabled={(date) => date < new Date()}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <Label>Time *</Label>
                      <Select
                        value={formData.time}
                        onValueChange={(value) => handleInputChange("time", value)}
                        disabled={loading}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Party Size *</Label>
                      <Select
                        value={formData.people}
                        onValueChange={(value) => handleInputChange("people", value)}
                        disabled={loading}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Guests" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((size) => (
                            <SelectItem key={size} value={size.toString()}>
                              {size} {size === 1 ? "Guest" : "Guests"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700" size="lg" disabled={loading}>
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating Reservation...
                      </>
                    ) : tableExists ? (
                      "Submit Reservation Request"
                    ) : (
                      "Demo Form (Database Setup Required)"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Restaurant Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Reservation Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-amber-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Operating Hours</h4>
                      <p className="text-gray-600">Monday - Sunday: 5:00 PM - 11:00 PM</p>
                      <p className="text-sm text-gray-500">Last seating at 10:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-amber-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Party Size</h4>
                      <p className="text-gray-600">We accommodate parties of 1-8 guests</p>
                      <p className="text-sm text-gray-500">For larger groups, please call us directly</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CalendarIcon className="h-5 w-5 text-amber-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Advance Booking</h4>
                      <p className="text-gray-600">Reservations accepted up to 30 days in advance</p>
                      <p className="text-sm text-gray-500">Same-day reservations subject to availability</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Us Directly</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-amber-600" />
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-gray-600">(555) 123-SPOON</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-amber-600" />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-600">reservations@theblackpenny.com</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600">
                      For immediate assistance or special arrangements, please call us directly. We're here to make your
                      dining experience exceptional.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-amber-50 border-amber-200">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-amber-800 mb-2">Cancellation Policy</h4>
                  <p className="text-sm text-amber-700">
                    Please provide at least 2 hours notice for cancellations. No-shows may be subject to a cancellation
                    fee for future reservations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
