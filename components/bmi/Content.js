import React from 'react'

export default function Content({className, title, description}) {
  return (
    <div className={`${className} py-5`}>
         <p className="font-bold">{title}</p>
        <p className="py-3">
            {description}
        </p>
    </div>
  )
}
