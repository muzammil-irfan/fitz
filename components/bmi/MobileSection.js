import React from 'react'
import AdultTable from './AdultTable'
import AdultTableContent from './AdultTableContent'
import ChildrenTable from './ChildrenTable'
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
