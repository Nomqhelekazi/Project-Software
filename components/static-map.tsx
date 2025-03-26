import Image from "next/image"

export default function StaticMap() {
  return (
    <div className="relative h-[300px] w-full rounded-lg overflow-hidden border border-gray-200 shadow-md">
      <Image
        src="https://geology.com/world/netherlands-map.gif"
        alt="Map of the Netherlands with Amsterdam highlighted"
        fill
        className="object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none">
        <div className="relative">
          {/* Amsterdam marker - positioned approximately where Amsterdam would be */}
          <div className="absolute -top-[5px] -left-[5px]">
            <div className="h-6 w-6 bg-[#e63946] rounded-full border-2 border-white shadow-md flex items-center justify-center">
              <div className="h-2 w-2 bg-white rounded-full"></div>
            </div>
            <div className="absolute top-7 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-md">
              <p className="text-xs font-semibold text-gray-800 whitespace-nowrap">Amsterdam</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

