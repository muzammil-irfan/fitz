import React from 'react'
import ChildrenTable from './ChildrenTable'
import ChildrenTableContent from './ChildrenTableContent'

export default function ChildrenSection() {
  return (
    <div className='xl:flex justify-between my-2'>
        <ChildrenTableContent />
        <ChildrenTable />
    </div>
  )
}
