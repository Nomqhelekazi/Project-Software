import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GoFundMeEmbed from "@/components/gofundme-embed"

export default function DonatePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#eaf4fc] to-white">
      <Header />
      <main className="flex-1 container max-w-6xl mx-auto py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-4 text-[#0077b6]">Make a Donation</h1>
          <p className="text-center mb-8 text-gray-600">
            Your donation helps us provide clean water to communities in Uganda. Every contribution makes a difference.
          </p>

          <Card className="shadow-lg border-none overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[#0077b6] to-[#0099e6] text-white">
              <CardTitle>Donation Information</CardTitle>
              <CardDescription className="text-white/80">
                Support our mission through our GoFundMe campaign
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <GoFundMeEmbed campaignId="62d4a791" />
            </CardContent>
          </Card>

          <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 text-[#0077b6]">Your Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <p className="text-2xl font-bold text-[#0077b6]">€25</p>
                <p className="text-gray-600">Provides clean water to a family for a month</p>
              </div>
              <div className="p-4">
                <p className="text-2xl font-bold text-[#0077b6]">€100</p>
                <p className="text-gray-600">Helps maintain a community water point</p>
              </div>
              <div className="p-4">
                <p className="text-2xl font-bold text-[#0077b6]">€250</p>
                <p className="text-gray-600">Contributes to a new well construction</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

