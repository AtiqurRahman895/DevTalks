import React from 'react'

const PfpBadgesCard = ({badge}) => {
  return (
    <div
    className="p-6 rounded-2xl shadow-lg border bg-custom-half-gray"
  >
    {/* icons and name */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        {badge.icon}
        <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-300">
          {badge.name}
        </h5>
      </div>

      {/* bade level */}
      <p
        className={`px-3 py-1 rounded-full font-bold text-white ${
          badge.level === "Gold"
            ? "bg-yellow-500"
            : badge.level === "Silver"
            ? "bg-gray-500"
            : "bg-yellow-800"
        }`}
      >
        {badge.level}
      </p>
    </div>
    
    {/* badge description */}
    <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
      {badge.description}
    </p>
    {/* <p className="mt-3 text-gray-500 dark:text-gray-400 text-xs">
      <strong>How to Earn:</strong> {badge.criteria}
    </p> */}
  </div>
  )
}

export default PfpBadgesCard
