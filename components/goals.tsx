import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function Goals() {
  const goals = [
    "Provide clean water to 1,000 families in 2025",
    "Build 5 community wells by 2026",
    "Open our Netherlands office to expand global outreach by 2027",
  ]

  return (
    <Card className="mb-10 overflow-hidden">
      <CardHeader className="bg-[#0077b6]/10 pb-2">
        <CardTitle className="text-2xl md:text-3xl text-center text-[#0077b6]">Our Goals</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="order-2 md:order-1 relative h-[250px] w-full rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Goals%20section.jpg-8Iumcb1qtAmrqs77IRLYq3dUwQ9yz8.jpeg"
              alt="Child using a community water pump in Uganda"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <ul className="space-y-4">
              {goals.map((goal, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#0077b6] flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

