import React from 'react'

export default function Heading({children}) {
  return (
    <h2 className="text-xl md:text-3xl lg:text-5xl font-extrabold">
        {children}
    </h2>   
  )
}
