import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { processInvolvement } from "../actions"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#eaf4fc]">
      <Header />
      <main className="flex-1 container max-w-6xl mx-auto py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6 text-[#0077b6]">Get Involved</h1>
          <p className="text-center mb-8 text-gray-600">
            Join our mission to bring clean water to communities in Uganda. There are many ways you can contribute
            beyond donations.
          </p>

          <Card>
            <CardHeader>
              <CardTitle>How Would You Like to Help?</CardTitle>
              <CardDescription>Please fill out the form below and we'll get in touch with you.</CardDescription>
            </CardHeader>
            <CardContent>
              <form action={processInvolvement} className="space-y-6">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" placeholder="John Doe" required />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input id="phone" name="phone" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>I'm interested in: (Select all that apply)</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="volunteering" name="interestedIn" value="volunteering" />
                      <Label htmlFor="volunteering" className="cursor-pointer">
                        Volunteering
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="fundraising" name="interestedIn" value="fundraising" />
                      <Label htmlFor="fundraising" className="cursor-pointer">
                        Fundraising
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="partnership" name="interestedIn" value="partnership" />
                      <Label htmlFor="partnership" className="cursor-pointer">
                        Corporate Partnership
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="events" name="interestedIn" value="events" />
                      <Label htmlFor="events" className="cursor-pointer">
                        Events
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="skills" name="interestedIn" value="skills" />
                      <Label htmlFor="skills" className="cursor-pointer">
                        Professional Skills
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="other" name="interestedIn" value="other" />
                      <Label htmlFor="other" className="cursor-pointer">
                        Other
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more about how you'd like to get involved..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button type="submit" className="w-full bg-[#0077b6] hover:bg-[#00628f]">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

