import React from 'react'
import DesktopCategoryCard from '../../../components/pt/DesktopCategoryCard'
import Heading from '../../../components/common/Heading'
import Text from '../../../components/common/Text'
import MobileCategoryCard from '../../../components/pt/MobileCategoryCard'

export default function PTCategory() {
  return (
    <div className='p-2'>
        {/* Home / PTs */}
        <p className='yellow py-1'>23 PTS</p>
        <Heading >
            Fitness
        </Heading>
        <Text className={"py-2"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        </Text>
        <p className='yellow py-1'>FILTER (1)</p>
        <div >
            {profilesData.map(item=>{
                return <DesktopCategoryCard 
                key={item.title}
                title={item.title}
                description={item.description}
                amount={item.amount}
                location={item.location}
                language={item.language}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}

                />
            })}
            {profilesData.map(item=>{
                return <MobileCategoryCard 
                key={item.title}
                title={item.title}
                description={item.description}
                amount={item.amount}
                location={item.location}
                language={item.language}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}

                />
            })}
        </div>
    </div>
  )
}
// const 
// export async function getStaticPaths() {

//   // Get the paths we want to pre-render based on posts
//   const paths = categoriesData.map((item) => ({
//     params: { category: item.href },
//   }))

//   return { paths, fallback: false }
// }
const profilesData = [
    {
        title:"Marcelo joe Ayala ",
        description:"reative fitness professional with more than 25 years of solid experience in fitness industry | Certified coach level 2 & 3, Rehab specialist level 1.",
        location:"Amman, Jordan",
        amount:25,
        language:"Arabic, English",
        imageSrc:"/marcelo.png",
        imageAlt:"Marcelo"

    },
    {
        title:"Lena Pereviazkina",
        description:"Hello,my name is Lena Pereviazkina , I am a Certified Personal Trainer and Nutritional Advisor in Abu Dhabi. Since I have 7 years of experience in this field.",
        location:"Amman, Jordan",
        amount:25,
        language:"Arabic, English",
        imageSrc:"/lena.png",
        imageAlt:"Lena"
    },
    {
        title:"Hamada Ali",
        description:"Whatever your goal is, I am here to help you to achieve it, and I have a passion for fitness since I was a child. I have the experience-backed since to do that...",
        location:"Amman, Jordan",
        amount:25,
        language:"Arabic, English",
        imageSrc:"/hamada.png",
        imageAlt:"Hamada"
    },
]