import React from 'react'
import AdultTable from './AdultSection/AdultTable'
import AdultTableContent from './AdultTableContent'
import ChildrenTable from './ChildrenSection/ChildrenTable'
import ChildrenTableContent from './ChildrenTableContent'
import OverweightSection from './OverweightSection'

export default function MobileSection() {
  return (
    <div className='md:invisible'>
        <AdultTableContent />
        <AdultTable />
        <ChildrenTableContent />
        <ChildrenTable />
        <OverweightSection />
    </div>
  )
}
