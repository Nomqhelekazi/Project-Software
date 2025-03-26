import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import GoogleMap from "./google-map"

export default function ExpansionAlt() {
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
              {/* Interactive Google Map */}
              <GoogleMap />

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

