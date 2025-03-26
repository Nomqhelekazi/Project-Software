import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function ThankYouPage({ searchParams }: { searchParams: { type?: string } }) {
  const type = searchParams.type || "general"

  let title = "Thank You!"
  let message = "Your submission has been received."

  if (type === "donation") {
    title = "Thank You for Your Donation!"
    message =
      "Your generous contribution will help us provide clean water to communities in Uganda. We've sent a confirmation email with details of your donation."
  } else if (type === "involvement") {
    title = "Thank You for Getting Involved!"
    message =
      "We appreciate your interest in supporting our mission. A member of our team will contact you soon to discuss how you can get involved."
  } else if (type === "subscription") {
    title = "Thank You for Subscribing!"
    message = "You've been added to our newsletter. We'll keep you updated on our projects and impact."
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#eaf4fc]">
      <Header />
      <main className="flex-1 container max-w-6xl mx-auto py-10 px-4 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-24 w-24 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold mb-6 text-[#0077b6]">{title}</h1>
          <p className="text-lg mb-8 text-gray-600">{message}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#0077b6] hover:bg-[#00628f]">
              <Link href="/">Return to Home</Link>
            </Button>
            {type === "donation" && (
              <Button asChild variant="outline" className="border-[#0077b6] text-[#0077b6]">
                <Link href="/get-involved">Get Involved</Link>
              </Button>
            )}
            {type === "involvement" && (
              <Button asChild variant="outline" className="border-[#0077b6] text-[#0077b6]">
                <Link href="/donate">Make a Donation</Link>
              </Button>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

