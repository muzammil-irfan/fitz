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

export default function SubCategory({
  categories,
  profiles,
  subCategory,
  categoryName,
}) {
  const router = useRouter();
  if (!profiles) {
    return <p>Loading...</p>;
  }
  return (
    <Layout categories={categories}>
      <div className="p-2">
        {/* Home / PTs */}
        <p className="yellow py-1">
          {profiles.length + " " + categoryName.toUpperCase()}{" "}
        </p>
        <Heading>{subCategory.title}</Heading>
        <Text className={"py-2"}>{subCategory.description}</Text>
        {profiles.length > 0 ? (
          <>
            <p className="yellow py-1">FILTER (1)</p>
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
                    amount={"No amount"}
                    location={item.location}
                    language={"No language"}
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
                    amount={"No amount"}
                    location={item.location}
                    language={" no language"}
                    socialMedia={JSON.parse(item.social_media)}
                    imageSrc={JSON.parse(item.media)[0]}
                    imageAlt={item.title}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <div className=" my-10" >There is no profiles available</div>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const returnObj = {
    paths: [{ params: { category: "/courts", subcategory: "/soccer" } }],
    fallback: true,
  };
  try {
    //What we are doing here is fetching categories to get their id and by using that id
    //we are getting all subcategories one by one as we dont have any other api
    //so the pattern we are gathering in possible slugs is /category/subcategory
    const categoriesEn = await axios.get(`${backendHost}/category`,{
      headers:{
        "Accept-Language":"en"
      }
    });
    const arrOfRequests = categoriesEn.data.map((item) =>
      axios.get(`${backendHost}/category/${item.id}`)
    );
    const subCategories = await Promise.all(arrOfRequests);
    const possibleSlugs = [];
    categories.data.map((categoryData) => {
      subCategories.map((subCategoryItem) => {
        if (subCategoryItem.data[0]) {
          if (categoryData.id === subCategoryItem.data[0].parent_id) {
            subCategoryItem.data.map((item) => {
              possibleSlugs.push({
                params: {
                  category: `/${titleToSlugConverter(categoryData.title)}`,
                  subcategory: `/${titleToSlugConverter(item.title)}`,
                  locale:"en"
                },
              });
              possibleSlugs.push({
                params: {
                  category: `/${titleToSlugConverter(categoryData.title)}`,
                  subcategory: `/${titleToSlugConverter(item.title)}`,
                  locale:"ar"
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
  const { params,locale } = context;
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
      headers:{
        "Accept-Language":locale
      }
    }
    const categories = await axios.get(`${backendHost}/category`,config);
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
      `${backendHost}/category/${categoryId}`
      ,config
    );
    subCategoriesRequest.data.map((item) => {
      if (titleToSlugConverter(item.title) === subcategory) {
        props.subCategory = item;
        subCategoryId = item.id;
      }
    });
    const partnersData = await axios.get(
      `${backendHost}/partner/${subCategoryId}` //subCategoryId
      ,config
    );
    props.profiles = partnersData.data;
    props.categoryName = categoryName;
    return { props };
  } catch (err) {
    console.log(err)
    return {
      notFound: true,
    };
  }
}
