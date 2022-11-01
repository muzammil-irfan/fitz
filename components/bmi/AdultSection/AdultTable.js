import React from 'react'

export default function AdultTable() {
  return (
    <div>
        <table>
            <tr className='text-center bg-gray-200'>
                <th className='py-2 w-48'>Category</th>
                <th className='py-2 w-48'>BMI range - kg/m2</th>
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
        <p className='text-xs py-1'>BMI table for adults</p>
    </div>
  )
}
const categoryList = [
    "Severe Thinness",
    "Moderate Thinness",
    "Mild Thinness",
    "Normal",
    "Overweight",
    "Obese Class I",
    "Obese Class II",
    "Obese Class III"
]
const rangeList = [
    "< 16",
    "16 - 17",
    "17 - 18.5", 
    "18.5 - 25",
    "25 - 30", 
    "30 - 35",
    "35 - 40",
    "> 40"
];