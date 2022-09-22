import React from 'react'

export default function Text({children,className}) {
  return (
    <p className={`text-xs sm:text-md md:text-base ${className}`}>{children}</p>
  )
}
