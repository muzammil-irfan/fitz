import Link from "next/link";
import React from "react";
import Heading from "../../components/common/Heading";
import axios from "axios";
import backendHost from "../../utils/backendHost";
import titleToSlugConverter from "../../utils/titleToSlugConverter";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import CustomImage from "../../components/common/CustomImage";
import BreadCrumbs from "../../components/common/BreadCrumbs";


export default function Category({ dir,categories,data,categoryDetail }) {
  const router = useRouter();
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Layout categories={categories} dir={dir} className="container mx-auto px-3 md:max-w-[90%] lg:max-w-[80%]">
    <div className=" py-10">
      <BreadCrumbs data={[{title:"Home",href:"/"},{title:categoryDetail.title,href:`/${titleToSlugConverter(categoryDetail.title)}`}]} />
      <p className="yellow md:pt-5 font-semibold">{data.length} CATEGORIES</p>
      <Heading className={"text-3xl my-4"}>{categoryDetail.title}</Heading>
      <p className={"py-5 text-md"}>{categoryDetail.description}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 mb-10">
        {data.map((item) => {
          return (
            <Link href={`${router.asPath + "/" + titleToSlugConverter(item.title)}`} key={item.title}>
              <a className="">
                <div className="shadow-lg h-full">
                  <div className="aspect-square relative">
                    {item.img && (
                      <CustomImage
                        src={`https://${item.img}`}
                        alt={item.title}
                        layout="fill"
                      />
                    )}
                  </div>
                  <div className="">
                    <p className="text-center text-sm py-4 ">{item.title}</p>
                  </div>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const returnObj = {
    paths: [],
    fallback: true,
  };
  try {
    const categoriesEn = await axios.get(`${backendHost}/category`,{
      headers:{
        "Accept-Language":"en"
      }
    });
    const slugEn = categoriesEn.data.map((item) => ({
      params: { category: titleToSlugConverter(item.title) },
      locale:"en"
    }));
    returnObj.paths = [...slugEn];
    return returnObj;
  } catch (err) {
    console.log("err", err);
    return returnObj;
  }
}

export async function getStaticProps(context) {
  const { category } = context.params;
  const props = {
    categories: [],
    data: [],
    categoryDetail:{}
  };
  try {
    //To obtain slug from category
    const categories = await axios.get(`${backendHost}/category`,{
      headers:{
        "Accept-Language":context.locale
      }
    });
    props.categories = categories.data;
    let slug = categories.data.filter(
      (item) => titleToSlugConverter(item.title) === category 
    );
    props.categoryDetail = slug[0];
    const categoryPageData = await axios.get(`${backendHost}/category/${slug[0].id}`,{
      headers:{
        "Accept-Language":context.locale
      }
    });
    props.data = categoryPageData.data;
    return {props};
  } catch (err) {
    console.log(err);
    return {
      notFound: true,
    };
  }
}
