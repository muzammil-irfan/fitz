import React, { useEffect } from "react";
import DesktopCategoryCard from "../../../components/pt/DesktopCategoryCard";
import Heading from "../../../components/common/Heading";
import Text from "../../../components/common/Text";
import MobileCategoryCard from "../../../components/pt/MobileCategoryCard";
import axios from "axios";
import backendHost from "../../../utils/backendHost";
import titleToSlugConverter from "../../../utils/titleToSlugConverter";

export default function SubCategory({profiles,subCategory}) {
  // useEffect(() => {
  //   axios
  //     .get(`${backendHost}/category`)
  //     .then((res) => {
  //       console.log("category", res);
  //     })
  //     .catch((err) => {
  //       console.log("category", err);
  //     });
  //   axios
  //     .get(`${backendHost}/partner/132`)
  //     .then((res) => {
  //       console.log("partner", res);
  //     })
  //     .catch((err) => {
  //       console.log("partner", err);
  //     });
  //   axios
  //     .get(`${backendHost}/partner/view`, {
  //       params: { partner_id: 1, category_id: 132 },
  //     })
  //     .then((res) => {
  //       console.log("partner view", res);
  //     })
  //     .catch((err) => {
  //       console.log("partner view", err);
  //     });
  //   const f = async () => {
  //     const category = "gyms";
  //     const subcategory = "kickboxing";
  //     const categories = await axios.get(`${backendHost}/category`);
  //     let categoryId;
  //     categories.data.map((item) => {
  //       if (titleToSlugConverter(item.title) === category) {
  //         categoryId = item.id;
  //       }
  //     });
  //     let subCategoryId;
  //     const subCategoriesRequest = await axios.get(
  //       `${backendHost}/category/${categoryId}`
  //     );
  //     subCategoriesRequest.data.map((item) => {
  //       if (titleToSlugConverter(item.title) === subcategory) {
  //         subCategoryId = item.id;
  //       }
  //     });
  //     const partnersData = await axios.get(
  //       `${backendHost}/partner/${subCategoryId}`
  //     );
  //     console.log(partnersData);
  //   };
  //   f()
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  console.log(profiles);
  if(!profiles){return <p>Loading...</p>}
  return (
    <div className="p-2">
      {/* Home / PTs */}
      <p className="yellow py-1">{profiles.length} PTS</p>
      <Heading>{subCategory.title}</Heading>
      <Text className={"py-2"}>
      {subCategory.description}
      </Text>
      <p className="yellow py-1">FILTER (1)</p>
      <div>
        {profiles.map((item) => {
          return (
            <DesktopCategoryCard
              key={item.title}
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
    </div>
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
    const categories = await axios.get(`${backendHost}/category`);
    const arrOfRequests = categories.data.map((item) =>
      axios.get(`${backendHost}/category/${item.id}`)
    );
    const subCategories = await Promise.all(arrOfRequests);
    const possibleSlugs = [];
    categories.data.map((categoryData) => {
      subCategories.map((subCategoryItem) => {
        if (categoryData.id === subCategoryItem.data[0].parent_id) {
          subCategoryItem.data.map((item) => {
            possibleSlugs.push({
              params: {
                category: `/${titleToSlugConverter(categoryData.title)}`,
                subcategory: `/${titleToSlugConverter(item.title)}`,
              },
            });
          });
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
  const { params } = context;
  const props = {
    profiles: [],
    subCategory:null,
    revalidate: 10,
  };
  const { category, subcategory } = params;
  try {
    const categories = await axios.get(`${backendHost}/category`);
    let categoryId;
    categories.data.map((item) => {
      if (titleToSlugConverter(item.title) === category) {
        categoryId = item.id;
      }
    });
    let subCategoryId;
    const subCategoriesRequest = await axios.get(
      `${backendHost}/category/${categoryId}`
    );
    subCategoriesRequest.data.map((item) => {
      if (titleToSlugConverter(item.title) === subcategory) {
        props.subCategory = item;
        subCategoryId = item.id;
      }
    });
    const partnersData = await axios.get(
      `${backendHost}/partner/${132}`//subCategoryId
    );
    props.profiles = partnersData.data;
    return { props };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}

