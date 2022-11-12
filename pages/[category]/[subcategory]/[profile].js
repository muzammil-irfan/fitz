import React, { useEffect } from "react";
import Heading from "../../../components/common/Heading";
import { BiMap, BiDollarCircle, BiPhone } from "react-icons/bi";
import { MdMailOutline } from "react-icons/md";
import { TbWorld, TbMap2 } from "react-icons/tb";
import backendHost from "../../../utils/backendHost";
import axios from "axios";
import Layout from "../../../components/Layout";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import Image from "next/image";
import titleToSlugConverter from "../../../utils/titleToSlugConverter";
import CustomImage from "../../../components/common/CustomImage";
import Slider from "react-slick";
import BreadCrumbs from "../../../components/common/BreadCrumbs";
import ProfileModal from "../../../components/profileView/ProfileModal";
import { useRouter } from "next/router";

export default function Lena({
  dir,
  categories,
  profiles,
  categoryTitle,
  subCategoryTitle,
}) {
  const [modal, setModal] = React.useState(false);
  const { locale } = useRouter();
  useEffect(()=>{
    const escFunc = (e)=>{
      if(e.key === "Escape"){
        e.preventDefault();
        setModal(!modal)
      }
    }
    if(modal){
      document.addEventListener("keydown",escFunc);
    } else {
      document.removeEventListener('keydown', escFunc);
    }
  },[modal])
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    initialSlide: 0,
    slidesToScroll:1,
    rtl:locale === "ar" ,
    responsive: [
      {
        breakpoint: 1535,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2.5,
        },
      },
    ],
  };
  const handleClick = () => {
    setModal(true);
    document.body.style.overflow = "hidden";
  };
  if (!profiles) {
    return <div>Loading...</div>;
  }
  const media = JSON.parse(profiles.media);
  const social_media = JSON.parse(profiles.social_media);
  return (
    <>
      <ProfileModal modal={modal} media={media} setModal={setModal} />
      <Layout
        dir={dir}
        categories={categories}
        className={`container mx-auto pb-8  md:max-w-[90%] lg:max-w-[80%] px-3 ${modal ? "overflow-hidden" : ""}`}
      >
        <div className="py-5">
          <BreadCrumbs
            data={[
              { title: "Home", href: "/" },
              {
                title: categoryTitle,
                href: `/${titleToSlugConverter(categoryTitle)}`,
              },
              {
                title: subCategoryTitle,
                href: `/${titleToSlugConverter(
                  categoryTitle
                )}/${titleToSlugConverter(subCategoryTitle)}`,
              },
              {
                title: profiles.title,
                href: `/${titleToSlugConverter(
                  profiles.title + " " + profiles.id
                )}`,
              },
            ]}
          />
          <div className="flex  my-4 md:my-10 md:pb-10 " style={{ cursor: "pointer" }}>
            <div
              className="w-1/2 sm:w-1/3   relative aspect-square"
              style={{ cursor: "pointer" }}
              
            >
              <Image
                src={media.length > 0 && media[0]}
                alt={profiles.title}
                layout="fill"
              />
            </div>
            <div className="pl-5 md:pl-8 pr-3 py-1  w-full">
              <div className="sm:flex  justify-between ">
                <h2 className="text-xl sm:text-4xl  lg:text-5xl font-[800] ">
                  {profiles.title}
                </h2>
                <div className="flex my-5 text-xl sm:my-3 gap-3 yellow " >
                  <a href={social_media["facebook"]} style={{cursor:"pointer"}}>
                    <BsFacebook />
                  </a>
                  <a href={social_media["instagram"]} style={{cursor:"pointer"}}>
                    <BsInstagram />
                  </a>
                </div>
              </div>
              <div className="hidden sm:block my-2 lg:my-10">
                <CotentBox
                  description={profiles.description}
                  email={profiles.email}
                  contact={profiles.phone_number}
                />
              </div>
            </div>
          </div>
          <div className="block sm:hidden my-4">
            <CotentBox
              description={profiles.description}
              email={profiles.email}
              contact={profiles.phone_number}
            />
          </div>
          <div className="py-4 md:mt-5 relative pr-1 overflow-hidden" style={{cursor:"grab"}}>
            {media?.length > 0 && (
              <Slider {...settings}>
                {[...media,...media].map((item, index) => {
                  return <ImageBox key={item} src={item} handleClick={handleClick} />;
                })}
              </Slider>
            )}
            <div className="h-full w-[50px] top-0  right-[0]  absolute " style={{background:"linear-gradient(90deg,rgba(255,255,255,0) 0%, rgba(255,255,255,1) 90%)"}}></div>
          </div>
          <div className="my-4">
            <Heading className="text-3xl font-black py-3">More Details</Heading>
            <div className="py-2 flex gap-2 items-center">
              <BiMap />
              <p>{profiles.location}</p>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: profiles.attributes_values_en,
              }}
              className="my-5"
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
const ImageBox = ({ src,handleClick }) => {
  return (
    <div className="my-2 mr-2  max-w-[300px] " style={{boxShadow:"0px 8px 30px rgba(0, 0, 0, 0.1)"}} >
      <picture>
        <source srcSet={src} />
        <img alt="" className=" min-h-[120px]  lg:md:min-h-[300px] " style={{cursor:"pointer"}} onClick={handleClick} />  
      </picture>
    </div>
  );
};
const sportsList = [
  "Core Fitness",
  "Muscle Toning",
  "Yoga",
  "Kickboxing",
  "Gain Muscle",
];
const CotentBox = ({ description, email, contact }) => {
  return (
    <div className="">
      <p className="my-3">{description}</p>
      <div className="sm:flex  sm:gap-5 md:my-5 text-sm">
        <div className="my-2  flex gap-4 items-center">
          <MdMailOutline size="18px" />
          <a href={`mailto:${email}`} >{email}</a>
        </div>
        <div className="my-2 flex gap-4 items-center">
          <BiPhone size="18px" />
          <a href={`tel:${contact}`}>{contact}</a>
        </div>
      </div>
    </div>
  );
};
export async function getStaticPaths() {
  const returnObj = {
    paths: [],
    fallback: true,
  };
  return returnObj;
}

export async function getStaticProps(context) {
  const { params } = context;
  const props = {
    profiles: [],
    categories: [],
    subCategoryTitle: null,
    categoryTitle: null,
    revalidate: 10,
  };
  try {
    const config = {
      headers: {
        "Accept-Language": context.locale,
      },
    };

    const categories = await axios.get(`${backendHost}/category`, config);
    props.categories = categories.data;
    let categoryId;
    categories.data.map((item) => {
      if (params.category === titleToSlugConverter(item.title)) {
        categoryId = item.id;
        props.categoryTitle = item.title;
      }
    });
    let subCategoryId;
    const subCategory = await axios.get(
      `${backendHost}/category/${categoryId}`,
      config
    );
    subCategory.data.map((item) => {
      if (params.subcategory === titleToSlugConverter(item.title)) {
        subCategoryId = item.id;
        props.subCategoryTitle = item.title;
      }
    });
    const partnersData = await axios.get(
      `${backendHost}/partner/${subCategoryId}`,
      context
    );
    const splittedSlugArr = params.profile.split("-");
    const partnersProfile = partnersData.data.filter(
      (item) => splittedSlugArr[splittedSlugArr.length - 1] === item.id
    );
    if (partnersProfile.length > 0) {
      const profilesAttributes = await axios.get(
        `${backendHost}/partner/view`,
        {
          params: {
            partner_id: partnersProfile[0].id,
            category_id: subCategoryId,
          },
          ...config,
        }
      );
      props.profiles = { ...partnersProfile[0], ...profilesAttributes.data };
    }
  } catch (err) {
    console.log(err);
    return {
      notFound: true,
    };
  }
  return { props };
}
