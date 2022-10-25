import React, { useEffect } from 'react'
import DesktopCategoryCard from '../../../components/pt/DesktopCategoryCard'
import Heading from '../../../components/common/Heading'
import Text from '../../../components/common/Text'
import MobileCategoryCard from '../../../components/pt/MobileCategoryCard'
import axios from 'axios';
import backendHost from '../../../utils/backendHost'

export default function SubCategory() {
    useEffect(()=>{
        axios.get(`${backendHost}/category`)
        .then(res=>{
            console.log("category",res);
        })
        .catch(err=>{
            console.log("category",err);
        })
        axios.get(`${backendHost}/partner/132`)
        .then(res=>{
            console.log("partner",res);
        })
        .catch(err=>{
            console.log("partner",err);
        })
        axios.get(`${backendHost}/partner/view`,{params:{partner_id:1,category_id:132}})
        .then(res=>{
            console.log("partner view",res);
        })
        .catch(err=>{
            console.log("partner view",err);
        })
    },[])
    return(<><p><b>aaslmdsdlkcms</b></p><p><b><i>dscdsklcmsd</i></b></p><p><b><i>cdscdsc<sup>cdscdscsd</sup></i></b></p><p><b><i><sup><br /></sup></i></b></p><p><b><i><sup style={{backgrounColor: "rgb(255, 255, 0)"}}><font color="#000000">cdscdscdscdscds</font></sup></i></b></p><table class="table table-bordered"><tbody><tr><td>cdsdcdscnj</td><td>cdscsdcd</td><td>cdscddsc</td><td>csdcdsc</td></tr><tr><td>csdcdscds</td><td>cddscds</td><td>dscdscdsc</td><td>cscdscds</td></tr></tbody></table><p><b><i><sup><br /></sup></i></b></p></>)
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

export async function getStaticPaths() {
    const returnObj = {
      paths: [{params:{category:"/pts",subcategory:"/fitness"}}],
      fallback: true,
    };
    return returnObj;
    // return axios
    //   .get(`${backendHost}/category`)
    //   .then((res) => {
    //     const arr =
    //       res.data.length > 0
    //         ? res.data.map((item) => ({ params: { slug: item.slug } }))
    //         : { params: {} };
    //     returnObj.paths = [...arr];
    //     return returnObj;
    //   })
    //   .catch((err) => {
    //     console.log(err.response.data);
    //     return returnObj;
    //   });
  }
  
  export async function getStaticProps(context) {
    const { params } = context;
    const props = {
      posts: {},
      revalidate: 10
    };
    return {props};
    // return axios
    //   .get(`${backendHost}/blog/view`, { params })
    //   .then((res) => {
    //     props.posts = { ...res.data };
    //     return {
    //       props,
    //     };
    //   })
    //   .catch((err) => {
    //     console.log("err", err);
  
    //     return {
    //       notFound: true,
    //     };
    //   });
  }
  

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