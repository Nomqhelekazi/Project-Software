import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Help() {
  return (
    <Card className="mb-10 overflow-hidden">
      <CardHeader className="bg-[#0077b6]/10 pb-2">
        <CardTitle className="text-2xl md:text-3xl text-center text-[#0077b6]">How You Can Help</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-lg leading-relaxed mb-6">
              Every donation, volunteer, and partnership gets us closer to a water-secure future. Your support makes a
              direct impact on communities in need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#0077b6] hover:bg-[#00628f]" asChild>
                <a href="https://gofund.me/62d4a791" target="_blank" rel="noopener noreferrer">
                  Donate Now
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-[#0077b6] text-[#0077b6]" asChild>
                <Link href="/get-involved">Get Involved</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[250px] w-full rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/How%20You%20Can%20Help%20section.jpg-M4wwH3DY0qyfOpaYVclIxJqmkutyZs.jpeg"
              alt="Hands joined together in unity and support"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

