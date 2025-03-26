import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function Expansion() {
  return (
    <Card className="mb-10 overflow-hidden">
      <CardHeader className="bg-[#0077b6]/10 pb-2">
        <CardTitle className="text-2xl md:text-3xl text-center text-[#0077b6]">
          Our Expansion to the Netherlands
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="order-2 md:order-1">
            <div className="flex flex-col gap-6">
              {/* Netherlands Map - Using a more realistic map image */}
              <div className="relative h-[200px] w-full rounded-lg overflow-hidden border border-gray-200 shadow-md">
                <div className="absolute inset-0 bg-[#f5f5f5]">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Netherlands_location_map.svg/1200px-Netherlands_location_map.svg.png"
                    alt="Map of the Netherlands with Amsterdam highlighted"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
                    <div className="relative">
                      {/* Amsterdam marker - positioned approximately where Amsterdam would be */}
                      <div className="absolute -top-[75px] -left-[10px]">
                        <div className="h-6 w-6 bg-[#e63946] rounded-full border-2 border-white shadow-md flex items-center justify-center">
                          <div className="h-2 w-2 bg-white rounded-full"></div>
                        </div>
                        <div className="absolute top-7 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-md">
                          <p className="text-xs font-semibold text-gray-800 whitespace-nowrap">Amsterdam</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Netherlands Flag */}
              <div className="relative h-[60px] w-full rounded-lg overflow-hidden shadow-sm">
                <div className="absolute inset-0 flex flex-col">
                  <div className="h-1/3 bg-[#AE1C28]"></div>
                  <div className="h-1/3 bg-white"></div>
                  <div className="h-1/3 bg-[#21468B]"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-sm font-semibold drop-shadow-md">The Netherlands</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-lg leading-relaxed mb-4">
              We are establishing a presence in the Netherlands to connect with global partners, increase fundraising,
              and create long-term sustainability for Ugandan communities.
            </p>
            <p className="text-lg leading-relaxed">
              This expansion will help us build stronger international relationships and access additional resources to
              support our mission of providing clean water to those in need.
            </p>
            <div className="mt-4 p-3 bg-[#0077b6]/10 rounded-lg">
              <p className="font-medium text-[#0077b6]">Our Netherlands office will open in Amsterdam in Q3 2025.</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

