interface LogoProps {
  className?: string
}

export default function LogoAltInline({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="20" fill="#0077b6" />
          <path
            d="M24 8C24 8 14 18 14 26C14 30.4183 18.4817 34 24 34C29.5183 34 34 30.4183 34 26C34 18 24 8 24 8Z"
            fill="white"
          />
          <circle cx="24" cy="26" r="4" fill="#0077b6" />
          <circle cx="32" cy="16" r="2" fill="white" opacity="0.8" />
        </svg>
      </div>
      <div className="font-bold text-xl md:text-2xl tracking-wider text-white">
        OLUM FOUNDATION <span className="text-blue-200 font-normal text-sm md:text-base">Co. Ltd</span>
      </div>
    </div>
  )
}

