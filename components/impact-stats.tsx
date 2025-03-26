"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { DropletIcon, Users, Home, Globe } from "lucide-react"

export default function ImpactStats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    {
      icon: DropletIcon,
      value: "5,000+",
      label: "People to Receive Clean Water",
      subtext: "Target by end of 2025",
      delay: 0,
    },
    {
      icon: Home,
      value: "12",
      label: "Communities to be Served",
      subtext: "Planned for 2024-2025",
      delay: 0.2,
    },
    {
      icon: Users,
      value: "200+",
      label: "Volunteers to Mobilize",
      subtext: "Recruitment goal for 2025",
      delay: 0.4,
    },
    {
      icon: Globe,
      value: "2",
      label: "Countries of Operation",
      subtext: "Uganda and Netherlands by 2025",
      delay: 0.6,
    },
  ]

  return (
    <div ref={ref} className="py-16 bg-gradient-to-r from-[#0077b6]/10 to-[#0077b6]/5 rounded-xl mb-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0077b6] mb-8">Our Impact Goals</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          With your support, here's the impact we aim to achieve in the coming years. Together, we can bring clean water
          to communities in need.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: stat.delay }}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-[#0077b6] p-4 rounded-full mb-4 text-white">
                <stat.icon size={28} />
              </div>
              <motion.h3
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: stat.delay + 0.2 }}
                className="text-3xl md:text-4xl font-bold text-[#0077b6] mb-2"
              >
                {stat.value}
              </motion.h3>
              <p className="text-gray-700 font-medium">{stat.label}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.subtext}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-[#0077b6] mb-3">Our 2025 Vision</h3>
          <p className="text-gray-600">
            By the end of 2025, we aim to establish a sustainable water infrastructure that will serve communities for
            generations to come. Our projects will focus on both immediate access to clean water and long-term
            sustainability through community training and maintenance programs.
          </p>
        </div>
      </div>
    </div>
  )
}

