import React from 'react'
import AdultTable from './AdultTable'
import AdultTableContent from './AdultTableContent'
import ChildrenTable from './ChildrenTable'
import ChildrenTableContent from './ChildrenTableContent'
import OverweightSection from './OverweightSection'

export default function DesktopSection() {
  return (
    <div className='invisible md:visible justify-between'>
        <div className='w-1/2'>
            <AdultTableContent />
            <ChildrenTableContent />
            <OverweightSection />
        </div>
        <div className='pt-10'>
            <AdultTable />
            <ChildrenTable />
        </div>
    </div>
  )
}
