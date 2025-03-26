"use client"

import type React from "react"
import { Facebook, Instagram, Twitter, Mail, Heart, ArrowRight, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { subscribeToNewsletter } from "@/app/actions"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"
import LogoAlt from "./logo-alt"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData()
    formData.append("email", email)

    try {
      const result = await subscribeToNewsletter(formData)

      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
        })
        setEmail("")
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-[#0077b6] text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-white/10">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Join Our Newsletter</h3>
            <p className="mb-6 text-white/80">
              Stay updated with our projects, events, and the impact we're making together.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" variant="secondary" disabled={isSubmitting} className="whitespace-nowrap">
                {isSubmitting ? (
                  "Subscribing..."
                ) : (
                  <>
                    Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <LogoAlt />
            <p className="mt-4 text-white/80">
              Bringing clean water, sanitation, and hygiene to communities in Uganda.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about-us" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-white/80 hover:text-white transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <a
                  href="https://gofund.me/62d4a791"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Donate
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-white/80" />
                <span className="text-white/80">Kira, Wakiso, Uganda</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5 text-white/80" />
                <a href="mailto:ayatgabriella@gmail.com" className="text-white/80 hover:text-white transition-colors">
                  ayatgabriella@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 flex-shrink-0 mt-0.5 text-white/80" />
                <div>
                  <p className="text-white/80">+31645396333 (Netherlands)</p>
                  <p className="text-white/80">+256 743 109210 (Uganda)</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:ayatgabriella@gmail.com"
                className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <div className="mt-6">
              <Button asChild variant="secondary" className="w-full">
                <a href="https://gofund.me/62d4a791" target="_blank" rel="noopener noreferrer">
                  <Heart className="mr-2 h-4 w-4" /> Donate Now
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-white/10 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} OLUM Foundation Co. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

