import React from 'react'

export default function Content({className, title, description}) {
  return (
    <div className={`${className} py-5`}>
         <h3 className="font-bold text-2xl">{title}</h3>
        <p className="py-3">
            {description}
        </p>
    </div>
  )
}
