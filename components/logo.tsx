import { DropletsIcon as WaterDropIcon } from "lucide-react"

interface LogoProps {
  className?: string
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex items-center">
        <WaterDropIcon className="h-8 w-8 text-white" />
        <div className="absolute -top-1 -right-1">
          <div className="h-3 w-3 rounded-full bg-white/80 animate-pulse" />
        </div>
      </div>
      <div className="font-bold text-xl md:text-2xl tracking-wider text-white">
        <span>OLUM</span>
        <span className="text-blue-200 font-light"> FOUNDATION</span>
      </div>
    </div>
  )
}

