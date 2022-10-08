import React from 'react'

export default function Heading({children,className}) {
  return (
    <h2 className={` sm:text-4xl lg:text-5xl font-extrabold ${className}`}>
        {children}
    </h2>   
  )
}
