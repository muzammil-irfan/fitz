import React from 'react'
import AdultTable from './AdultTable'
import AdultTableContent from './AdultTableContent'

export default function AdultSection() {
  return (
    <div className='xl:flex justify-between my-2'>
        <AdultTableContent />
        <AdultTable />
    </div>
  )
}
