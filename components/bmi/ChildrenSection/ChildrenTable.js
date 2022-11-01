import React from 'react'

export default function ChildrenTable() {
  return (
    <div className='py-10'>
        <table>
            <tr className='text-center bg-gray-200'>
                <th className='py-2 w-48'>Category</th>
                <th className='py-2 w-48'>Percentile Range</th>
            </tr>
            {
                categoryList.map((item,index)=>{
                    return (
                        <tr key={item} className=''>
                            <td className='text-center py-2 border'>{item}</td>
                            <td className='text-center py-2 border'>{rangeList[index]}</td>
                        </tr>
                    )
                })
            }
        </table>
        <p className='text-xs py-1'>BMI table for children and teens</p>
    </div>
  )
}
const categoryList = [
    "Underweight",
    "Healthy weight",
    "At risk of overweight",
    "Overweight"
]
const rangeList = [
    "< 5%",
    "5% - 8%",
    "85% - 95%",
    "> 95%"
];