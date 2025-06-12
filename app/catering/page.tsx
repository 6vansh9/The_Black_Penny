import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function CateringPage() {
  const cateringServices = [
    {
      title: "CORPORATE LUNCH",
      image: "/placeholder.svg?height=300&width=400&text=Corporate+Lunch",
      description: "Professional lunch solutions for your business meetings and corporate events",
    },
    {
      title: "OFFICE BREAKFAST",
      image: "/placeholder.svg?height=300&width=400&text=Office+Breakfast",
      description: "Start your team's day right with our delicious breakfast catering options",
    },
    {
      title: "TEAM TREATS",
      image: "/placeholder.svg?height=300&width=400&text=Team+Treats",
      description: "Special treats and refreshments to celebrate your team's achievements",
    },
    {
      title: "WORKPLACE EVENTS",
      image: "/placeholder.svg?height=300&width=400&text=Workplace+Events",
      description: "Complete catering solutions for your workplace celebrations and events",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section - With new image */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src="https://xsaecrrqjokviynpuvwp.supabase.co/storage/v1/object/sign/catering-media/workplace%20events.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80OWVmOTg4NC0yZDc0LTQwNmUtOWFmZi1mNWM3MzdmMjRkN2MiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJjYXRlcmluZy1tZWRpYS93b3JrcGxhY2UgZXZlbnRzLmpwZyIsImlhdCI6MTc0OTczMjE2NiwiZXhwIjoxODM2MTMyMTY2fQ.noI5gibl9XQxrTNR2TMqwyUM6SrPOluyp7KLt9iY7jY"
            alt="Workplace catering events"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[#f5f1eb]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1
              className="text-6xl font-light mb-8 text-[#b8860b] tracking-[0.3em] uppercase"
              style={{ fontFamily: "'Playfair Display', 'Times New Roman', serif" }}
            >
              CATERING
            </h1>
            <h2
              className="text-3xl font-light mb-12 text-[#b8860b] tracking-[0.1em] uppercase"
              style={{ fontFamily: "'Playfair Display', 'Times New Roman', serif" }}
            >
              WORKPLACE CATERING IN LONDON
            </h2>
            <p
              className="text-lg text-black max-w-4xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              We are delighted to offer you and your clients restaurant quality breakfast or lunch. You may order off
              the menu, or if you fancy something more specific, please don't hesitate to ask
            </p>
          </div>

          {/* First CTA Button */}
          <div className="text-center mb-20">
            <Button
              asChild
              size="lg"
              className="bg-[#004d4d] hover:bg-[#003a3a] text-white px-12 py-4 text-sm font-bold tracking-[0.2em] uppercase border-0 rounded-none"
              style={{ fontFamily: "sans-serif" }}
            >
              <Link href="/contact">WORKPLACE CATERING</Link>
            </Button>
          </div>

          {/* Second Section */}
          <div className="text-center mb-16 relative">
            {/* Decorative Phone Illustration - Left */}
            <div className="absolute left-8 top-1/2 transform -translate-y-1/2 opacity-30 hidden lg:block">
              <div className="w-24 h-32">
                <svg viewBox="0 0 100 130" className="w-full h-full text-[#b8860b]">
                  {/* Vintage phone illustration */}
                  <circle cx="50" cy="25" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
                  <rect x="40" y="37" width="20" height="8" fill="currentColor" />
                  <rect x="35" y="45" width="30" height="40" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="45" cy="55" r="3" fill="currentColor" />
                  <circle cx="55" cy="55" r="3" fill="currentColor" />
                  <circle cx="45" cy="65" r="3" fill="currentColor" />
                  <circle cx="55" cy="65" r="3" fill="currentColor" />
                  <circle cx="45" cy="75" r="3" fill="currentColor" />
                  <circle cx="55" cy="75" r="3" fill="currentColor" />
                  <path d="M35 85 Q50 95 65 85" fill="none" stroke="currentColor" strokeWidth="2" />
                  <rect x="45" y="95" width="10" height="20" fill="currentColor" />
                  <ellipse cx="50" cy="120" rx="15" ry="8" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Decorative Wine Glass - Right */}
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 opacity-30 hidden lg:block">
              <div className="w-16 h-32">
                <svg viewBox="0 0 60 130" className="w-full h-full text-[#b8860b]">
                  {/* Wine glass illustration */}
                  <circle cx="30" cy="25" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 25 Q30 45 48 25" fill="none" stroke="currentColor" strokeWidth="2" />
                  <rect x="28" y="43" width="4" height="50" fill="currentColor" />
                  <rect x="20" y="93" width="20" height="4" fill="currentColor" />
                  <circle cx="25" cy="20" r="2" fill="currentColor" />
                  <circle cx="35" cy="18" r="1.5" fill="currentColor" />
                  <circle cx="30" cy="30" r="1" fill="currentColor" />
                </svg>
              </div>
            </div>

            <p
              className="text-lg text-black max-w-4xl mx-auto leading-relaxed mb-12"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              For enquiries about booking our private and semi-private spaces, or to book the entire restaurant click
              here.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#004d4d] hover:bg-[#003a3a] text-white px-12 py-4 text-sm font-bold tracking-[0.2em] uppercase border-0 rounded-none"
              style={{ fontFamily: "sans-serif" }}
            >
              <Link href="/contact">PRIVATE VENUE</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#f5f1eb]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {cateringServices.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow bg-white border-0 rounded-none"
              >
                <CardContent className="p-6">
                  <h3
                    className="text-lg font-bold tracking-[0.15em] uppercase mb-4 text-[#004d4d]"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: "sans-serif" }}>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-[#2f4f4f] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "serif" }}>
            Ready to Cater Your Next Event?
          </h2>
          <p className="text-xl mb-8 opacity-90" style={{ fontFamily: "sans-serif" }}>
            Contact us today to discuss your catering needs
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#b8860b] hover:bg-[#a0750a] text-white px-8 py-3 border-0 rounded-none tracking-[0.1em] uppercase"
            style={{ fontFamily: "sans-serif" }}
          >
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
