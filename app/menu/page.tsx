import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function MenuPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-black/60 to-black/40 flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=400&width=1200&text=Our+Menus"
            alt="Menu hero"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Our Menus</h1>
          <p className="text-xl">Crafted with passion, served with pride</p>
        </div>
      </section>

      {/* Menu Description */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3 flex justify-center">
              <Image
                src="/placeholder.svg?height=200&width=200&text=Coffee+Icon"
                alt="Coffee illustration"
                width={150}
                height={150}
                className="opacity-70"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Our Menus</h2>
              <p className="text-gray-700 leading-relaxed">
                Each menu is created with the utmost care, guaranteeing all our guests enjoy their visit. Offering
                freshly prepared brunch, salads, small plates, specialty coffee and cocktails. With our antique style of
                interiors, vibrant music and attentive staff, we're sure you'll find a penny on your list of exciting
                places to visit.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                The Daily Spoon values sustainability, therefore we work closely with London's best companies to ensure
                we meet these values. Please check menus as items offered may differ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Links Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="relative h-64 mb-6 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Breakfast"
                    alt="Breakfast menu"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Breakfast Menu</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Start your day with our delicious breakfast options, from classic eggs to specialty dishes
                </p>
                <div className="flex justify-center">
                  <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white px-8">
                    <a
                      href="https://www.theblackpenny.com/wp-content/uploads/2025/03/SOUTH-BANK-BREAKFAST.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Breakfast Menu
                    </a>
                  </Button>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="relative h-64 mb-6 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=All+Day"
                    alt="All day menu"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">All Day Menu</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Enjoy our selection of mains, salads, small plates and specialty drinks throughout the day
                </p>
                <div className="flex justify-center">
                  <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white px-8">
                    <a
                      href="https://www.theblackpenny.com/wp-content/uploads/2024/05/SLOANE-SQ-ALL-DAY.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View All Day Menu
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Notes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Menu Notes</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Dietary Information</h4>
                  <p>
                    Please inform your server of any allergies or dietary restrictions. We can accommodate most dietary
                    needs with advance notice.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Seasonal Ingredients</h4>
                  <p>
                    Our menu changes seasonally to feature the freshest local ingredients. Some items may not be
                    available year-round.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
