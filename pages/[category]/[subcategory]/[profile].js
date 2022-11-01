import React from "react";
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

export default function Lena({ categories, profiles }) {
  // React.useEffect(() => {
  //   (async () => {
  //     const categoriesEn = await axios.get(`${backendHost}/category`, {
  //       headers: {
  //         "Accept-Language": "en",
  //       },
  //     });
  //     const arrOfSubCategoryRequests = categoriesEn.data.map((item) =>
  //       axios.get(`${backendHost}/category/${item.id}`)
  //     );
  //     const subCategories = await Promise.all(arrOfSubCategoryRequests);
  //     const arrOfPartnersRequest = [];
  //     const arrOfAllSubCategories = [];
  //     subCategories.map(topItem=>{
  //       topItem.data.map((item)=>{
  //         const request = axios.get(`${backendHost}/partner/${item.id}`);
  //         arrOfPartnersRequest.push(request);
  //         arrOfAllSubCategories.push(item);
  //       })
  //     });
  //     const partnersRequest = await Promise.all(arrOfPartnersRequest);
  //     console.log(partnersRequest);
  //     console.log(arrOfAllSubCategories);
  //   })();
  // }, []);
  const settings = {
    dots: false,
    Infinity: false,
    speed: 500,
    slidesToShow: 3,
    initialSlides: 0,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          // initialSlide: 2
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.05,
        },
      },
    ],
  };

  if (!profiles) {
    return <div>Loading...</div>;
  }
  console.log(profiles);
  const media = JSON.parse(profiles.media);
  const social_media = JSON.parse(profiles.social_media);
  return (
    <Layout categories={categories}>
      <div className="flex m-4 " style={{ cursor: "pointer" }}>
        <div className="w-1/3 xl:w-1/4  relative aspect-square">
          <Image
            src={media.length > 0 && media[0]}
            alt={profiles.title}
            layout="fill"
          />
        </div>
        <div className="px-5  w-full">
          <div className="sm:flex  justify-between ">
            <h2 className="text-3xl sm:text-4xl  lg:text-5xl font-black ">
              {profiles.title}
            </h2>
            <div className="flex my-5 sm:my-3 gap-3 yellow">
              <a href={social_media["facebook"]}>
                <BsFacebook />
              </a>
              <a href={social_media["instagram"]}>
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
      <div className="block sm:hidden m-4">
        <CotentBox
          description={profiles.description}
          email={profiles.email}
          contact={profiles.phone_number}
        />
      </div>
      <div className="m-4">
        {media && media.length > 3 ? (
          <Slider {...settings}>
            {media.map((item) => {
              return <CustomImage key={item} src={item} />;
            })}
          </Slider>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 my-5 gap-4">
            {media.map((item) => {
              return <CustomImage key={item} src={item} />;
            })}
          </div>
        )}
      </div>
      <div className="m-4">
        <Heading className="py-3">More Details</Heading>
        <div className="py-2 flex gap-2 items-center">
          <BiMap />
          <p>{profiles.location}</p>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: profiles.attributes_values_en }}
          className="my-5"
        />
      </div>
    </Layout>
  );
}
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
      <p>{description}</p>
      <div className="sm:flex sm:gap-5 md:my-5">
        <div className="my-2 flex gap-2 items-center">
          <MdMailOutline />
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div className="my-2 flex gap-2 items-center">
          <BiPhone />
          <a href={`tel:${contact}`}>{contact}</a>
        </div>
      </div>
    </div>
  );
};
export async function getStaticPaths() {
  const returnObj = {
    paths: [
      {
        params: {
          category: "/physio-therapists",
          subcategory: "/certified-physiotherapist-without-cente",
          profile: "/ehab-1",
        },
        locale: "en",
      },
    ],
    fallback: true,
  };
  return returnObj;
}

export async function getStaticProps(context) {
  const { params } = context;
  const props = {
    profiles: [],
    categories: [],
    subCategory: null,
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
