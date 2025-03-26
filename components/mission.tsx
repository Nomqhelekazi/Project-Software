"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Mission() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div id="about-us">
      <Card className="mb-10 overflow-hidden border-none shadow-lg">
        <CardHeader className="bg-gradient-to-r from-[#0077b6] to-[#0099e6] pb-4">
          <CardTitle className="text-2xl md:text-3xl text-center text-white">Our Mission</CardTitle>
        </CardHeader>
        <CardContent className="pt-8 pb-8">
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-xl font-semibold text-[#0077b6] mb-4">Water is Life</h3>
              <p className="text-lg leading-relaxed mb-4">
                We are on a mission to bring safe water, sanitation, and hygiene to Ugandan communities where access to
                clean water remains a daily struggle.
              </p>
              <p className="text-lg leading-relaxed">
                By expanding to the Netherlands, we're building a global network of support to create sustainable
                solutions and lasting change.
              </p>
              <div className="mt-6 p-4 bg-[#0077b6]/10 rounded-lg border-l-4 border-[#0077b6]">
                <p className="font-medium text-[#0077b6]">
                  "Water is not just a basic need—it's a fundamental human right."
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-[350px] w-full rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mission%20section.jpg-SsiN472ug76tgdxR7BjPSrPTu1mwEK.jpeg"
                alt="Clean water mission in Uganda"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm font-medium">Bringing clean water to communities in Uganda</p>
              </div>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

