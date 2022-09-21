import React from 'react'

export default function CustomButton({children}) {
  return (
    <button  className='px-8 m-2 py-2 yellow-background '>
        {children}
    </button>
  )
}
