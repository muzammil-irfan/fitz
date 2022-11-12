import React, { useEffect } from "react";
import DesktopCategoryCard from "../../../components/pt/DesktopCategoryCard";
import Heading from "../../../components/common/Heading";
import Text from "../../../components/common/Text";
import MobileCategoryCard from "../../../components/pt/MobileCategoryCard";
import axios from "axios";
import backendHost from "../../../utils/backendHost";
import titleToSlugConverter from "../../../utils/titleToSlugConverter";
import Layout from "../../../components/Layout";
import { useRouter } from "next/router";
import BreadCrumbs from "../../../components/common/BreadCrumbs";

export default function SubCategory({
  categories,
  profiles,
  subCategory,
  categoryName,
  dir
}) {
  const router = useRouter();
 
  if (!profiles) {
    return <p>Loading...</p>;
  }
  return (
    <Layout dir={dir} categories={categories} className="container mx-auto md:max-w-[90%] lg:max-w-[80%] px-3">
      <div className=" py-10">
        <BreadCrumbs data={[{title:"Home",href:"/"},{title:categoryName,href:`/${titleToSlugConverter(categoryName)}`},{title:subCategory.title,href:`/${titleToSlugConverter(subCategory.title)}`}]} />
        <p className="yellow py-5 font-semibold">
          {profiles.length + " " + categoryName.toUpperCase()}{" "}
        </p>
        <Heading className={"text-3xl"}>{subCategory.title}</Heading>
        <Text className={"py-8"}>{subCategory.description}</Text>
        {profiles.length > 0 ? (
          <>
            <div>
              {profiles.map((item) => {
                return (
                  <DesktopCategoryCard
                    key={item.title}
                    href={`${router.asPath}/${titleToSlugConverter(
                      item.title + " " + item.id
                    )}`}
                    title={item.title}
                    description={item.description}
                    location={item.location}
                    socialMedia={JSON.parse(item.social_media)}
                    imageSrc={JSON.parse(item.media)[0]}
                    imageAlt={item.title}
                  />
                );
              })}
              {profiles.map((item) => {
                return (
                  <MobileCategoryCard
                    key={item.title}
                    href={`${router.asPath}/${titleToSlugConverter(
                      item.title + " " + item.id
                    )}`}
                    title={item.title}
                    description={item.description}
                    location={item.location}
                    socialMedia={JSON.parse(item.social_media)}
                    imageSrc={JSON.parse(item.media)[0]}
                    imageAlt={item.title}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <div className=" my-10">There is no profiles available</div>
        )}
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
    //What we are doing here is fetching categories to get their id and by using that id
    //we are getting all subcategories one by one as we dont have any other api
    //so the pattern we are gathering in possible slugs is /category/subcategory
    const categoriesEn = await axios.get(`${backendHost}/category`, {
      headers: {
        "Accept-Language": "en",
      },
    });
    const arrOfRequests = categoriesEn.length > 0 ? categoriesEn.data.map((item) =>
      axios.get(`${backendHost}/category/${item.id}`)
    ) : [];
    const subCategories = await Promise.all(arrOfRequests);
    const possibleSlugs = [];
    categoriesEn.data.map((categoryData) => {
      subCategories.map((subCategoryItem) => {
        if (subCategoryItem.data[0]) {
          if (categoryData.id === subCategoryItem.data[0].parent_id) {
            subCategoryItem.data.map((item) => {
              possibleSlugs.push({
                params: {
                  category: `/${titleToSlugConverter(categoryData.title)}`,
                  subcategory: `/${titleToSlugConverter(item.title)}`,
                  locale: "en",
                },
              });
            });
          }
        }
      });
    });
    returnObj.paths = possibleSlugs;
    return returnObj;
  } catch (err) {
    console.log("err", err);
    return returnObj;
  }
}

export async function getStaticProps(context) {
  const { params, locale } = context;
  const props = {
    profiles: [],
    categories: [],
    subCategory: [],
    categoryName: "",
    revalidate: 10,
  };
  const { category, subcategory } = params;
  try {
    const config = {
      headers: {
        "Accept-Language": locale,
      },
    };
    const categories = await axios.get(`${backendHost}/category`, config);
    props.categories = categories.data;
    let categoryId;
    let categoryName;
    categories.data.map((item) => {
      if (titleToSlugConverter(item.title) === category) {
        categoryId = item.id;
        categoryName = item.title;
      }
    });
    let subCategoryId;
    const subCategoriesRequest = await axios.get(
      `${backendHost}/category/${categoryId}`,
      config
    );
    subCategoriesRequest.data.map((item) => {
      if (titleToSlugConverter(item.title) === subcategory) {
        props.subCategory = item;
        subCategoryId = item.id;
      }
    });
    const partnersData = await axios.get(
      `${backendHost}/partner/${subCategoryId}`, 
      config
    );
    props.profiles = partnersData.data;
    props.categoryName = categoryName;
    return { props };
  } catch (err) {
    console.log(err);
    return {
      notFound: true,
    };
  }
}
