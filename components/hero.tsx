"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="relative h-[500px] md:h-[600px] flex items-center justify-center text-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero%20image.jpg-JfpGAVciAWRxB5OpdjrpmikyErOzT7.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-0"></div>
      </div>

      {/* Content */}
      <div ref={ref} className="relative z-10 px-4 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Clean Water Changes <span className="text-blue-300">Everything</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
          Join our mission to bring sustainable water solutions to communities in Uganda
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-[#0077b6] hover:bg-[#00628f] text-white rounded-full px-8 py-6 text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            asChild
          >
            <a href="https://gofund.me/62d4a791" target="_blank" rel="noopener noreferrer">
              Donate Now
            </a>
          </Button>
          <Button
            size="lg"
            className="bg-transparent text-white hover:bg-white/10 border-2 border-white rounded-full px-8 py-6 text-lg transition-all duration-300"
            asChild
          >
            <Link href="#about-us">Learn More</Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 bg-white rounded-full"
            animate={{ opacity: [0.5, 1, 0.5], y: [0, 6, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </div>
  )
}

