import React from 'react'

export default function Text({children,className}) {
  return (
    <p className={`text-xs sm:text-md md:text-base xl:text-xl ${className}`}>{children}</p>
  )
}
