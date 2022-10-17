import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Heading from '../../components/common/Heading';
import Text from '../../components/common/Text';
import titleToSlugConverter from '../../utils/titleToSlugConverter';
import categoriesData from '../../utils/categoriesData';
import axios from 'axios';
import backendHost from '../../utils/backendHost';

export default function Category({data}) {
    console.log(data);
  return (
    <div className='p-2'>
        {/* Home / PTs */}
        <p className='yellow py-1'>{data.length} CATEGORIES</p>
        <Heading >
            PTs
        </Heading>
        <Text className={"py-2"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        </Text>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 my-4'>
            {
                categoriesData.map(item=>{
                    return(//"/pt" + item.href
                        <Link href={`/pt/fitness`} key={item.title}>
                            <a>
                                <div  className="shadow-md" >
                                    <div className='aspect-square relative'>
                                        <Image src={`https://${item.img}`} alt={item.title} layout="fill" />
                                    </div>
                                    <div>
                                        <p className='text-center py-2' >{item.title}</p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export async function getStaticPaths() {
    const returnObj = {
        paths:[] ,
        fallback: false
    };
    categoriesData.map(item=>{
        const obj = {
            params: {
                category: titleToSlugConverter(item.title)
            }
        }
        returnObj.paths.push(obj)
    });
    return returnObj;
    /*
    return axios
    .get(`${backendHost}/blog`)
    .then((res) => {
      const arr = res.data.length > 0 ? res.data.map(item=>({params:{slug:item.slug}})) : {params:{}}
      returnObj.paths = [...arr];
      return returnObj;
    })
    .catch((err) => {
      console.log(err.response.data);
      return returnObj;
    });*/
};

export async function getStaticProps(context) {
    const {category } = context.params;
  const props = {
    data: [],
  };
  let id;
  categoriesData.map(item=>{
    if(titleToSlugConverter(item.title) === category){
        id = item.id;
    }
  });

  
  return axios
    .get(`${backendHost}/category/${id}`)
    .then((res) => {
      props.data = [...res.data];
      return {
        props,
      };
    })
    .catch((err) => {
      console.log(err.response.data);
      return {
        props,
      };
    });

}

/*
export const categoriesData = [
    {
        name:"MMA",
        href:"/mma",
        src:"/mma.png"
    },
    {
        name:"Swimming",
        href:"/swimmming",
        src:"/swimming.png"
    },
    {
        name:"Boxing",
        href:"/boxing",
        src:"/boxing.png"
    },
    {
        name:"Wrestling",
        href:"/wrestling",
        src:"/wrestling.png"
    },
    {
        name:"Fitness",
        href:"/fitness",
        src:"/fitness.png"
    },
    {
        name:"Yoga",
        href:"/yoga",
        src:"/yoga.png"
    },
    {
        name:"Body Building",
        href:'/body-building',
        src:"/body-building.png"
    },
    {
        name:"Soccer Academys",
        href:"/soccer",
        src:"/soccer.png"
    },
    {
        name:"Tennis",
        href:"/tennis",
        src:"/tennis.png"
    },
    {
        name:"Table Tennis",
        href:"/table-tennis",
        src:"/table-tennis.png"
    },
    {
        name:"Jiu Jitsu",
        href:"/jiu-jitsu",
        src:"/jiu-jitsu.png"
    },
    {
        name:"Shooting",
        href:"/shooting",
        src:"/shooting.png"
    },
    {
        name:"Kickboxing",
        href:"/kickboxing",
        src:"/kickboxing.png"
    },
]*/