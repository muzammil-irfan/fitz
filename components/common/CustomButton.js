import React from 'react'

export default function CustomButton({children,arrow}) {
  return (
    <button  className={`px-8 m-2 py-2 yellow-background`}  >
        {arrow ? <div className='flex items-center'>{children}</div> : children}
    </button>
  )
}
