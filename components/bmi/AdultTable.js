import { useRouter } from 'next/router';
import React from 'react'
import { FormattedMessage } from 'react-intl';

export default function AdultTable() {
    const router = useRouter();
  return (
    <div className='py-5 sm:py-0'>
        <table className='text-xs w-full sm:text-sm md:text-base md:w-[450px] mb-3'> 
            <tr className='text-center bg-[#e7e8e8]'>
                <th className='py-4 border-r border-white font-[600]'>
                    <FormattedMessage id="page.bmi.adult.table.title.category" />
                </th>
                <th className='py-4 font-[600]'>
                    <FormattedMessage id="page.bmi.adult.table.title.range" />
                </th>
            </tr>
            {
                categoryList[router.locale].map((item,index)=>{
                    return (
                        <tr key={item} className=''>
                            <td className='text-center py-3 border'>{item}</td>
                            <td className='text-center py-3 border'>{rangeList[index]}</td>
                        </tr>
                    )
                })
            }
        </table>
        <p className='text-xs py-1'>
            <FormattedMessage id="page.bmi.adult.title" />
        </p>
    </div>
  )
}
const categoryList = {
    en:[
    "Severe Thinness",
    "Moderate Thinness",
    "Mild Thinness",
    "Normal",
    "Overweight",
    "Obese Class I",
    "Obese Class II",
    "Obese Class III"
],
    ar:[
    "النحافة الشديدة",
    "رقة معتدلة",
    "نحافة خفيفة",
    "طبيعي",
    "زيادة الوزن",
    "فئة السمنة الأولى",
    "فئة السمنة الثانية",
    "فئة السمنة الثالثة"
],
};
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