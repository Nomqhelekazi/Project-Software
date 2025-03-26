"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, AlertTriangle } from "lucide-react"

interface GoFundMeEmbedProps {
  campaignId?: string
  defaultHeight?: number
}

export default function GoFundMeEmbed({ campaignId = "62d4a791", defaultHeight = 600 }: GoFundMeEmbedProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Create direct and embed URLs
  const directUrl = `https://gofund.me/${campaignId}`
  const embedUrl = `https://www.gofundme.com/f/${campaignId}/widget/large`

  // Handle iframe load error
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setHasError(true)
        setIsLoading(false)
      }
    }, 5000) // If loading takes more than 5 seconds, show error

    return () => clearTimeout(timer)
  }, [isLoading])

  const handleIframeError = () => {
    setHasError(true)
    setIsLoading(false)
  }

  return (
    <div className="w-full flex flex-col items-center">
      {!hasError ? (
        <div className="w-full relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-center p-6">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0077b6] mx-auto mb-4"></div>
                <p className="text-gray-500">Loading GoFundMe campaign...</p>
              </div>
            </div>
          )}

          <iframe
            src={embedUrl}
            height={defaultHeight}
            width="100%"
            style={{ border: "none" }}
            onLoad={() => setIsLoading(false)}
            onError={handleIframeError}
            title="OLUM Foundation - Clean Water for Uganda"
            className="rounded-lg shadow-md"
          />
        </div>
      ) : (
        <div className="w-full bg-orange-50 p-6 rounded-lg border border-orange-200 text-center mb-6">
          <AlertTriangle className="h-12 w-12 text-orange-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-orange-800 mb-2">Unable to load the GoFundMe campaign</h3>
          <p className="text-orange-700 mb-4">
            The campaign embed is currently unavailable. Please use the direct link below to make your donation.
          </p>
        </div>
      )}

      <div className="mt-6 text-center">
        <p className="mb-4 text-gray-600">
          {hasError ? "Please use the button below to donate:" : "Prefer to donate directly on GoFundMe?"}
        </p>
        <Button asChild className="bg-[#0077b6] hover:bg-[#00628f]">
          <a href={directUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
            Open GoFundMe Campaign <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  )
}

