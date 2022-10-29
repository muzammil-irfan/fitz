import Image from "next/image";
import Link from "next/link";
import React from "react";
import Heading from "../../components/common/Heading";
import Text from "../../components/common/Text";
import axios from "axios";
import backendHost from "../../utils/backendHost";
import titleToSlugConverter from "../../utils/titleToSlugConverter";
import { useRouter } from "next/router";

export default function Category({ data }) {
  const router = useRouter();

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-2">
      {/* Home / PTs */}
      <p className="yellow py-1">{data.length} CATEGORIES</p>
      <Heading>{data.title}</Heading>
      <Text className={"py-2"}>{data.description}</Text>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-4">
        {data.map((item) => {
          return (
            <Link href={`${router.asPath + "/" + titleToSlugConverter(item.title)}`} key={item.title}>
              <a>
                <div className="shadow-md">
                  <div className="aspect-square relative">
                    {item.img && (
                      <Image
                        src={`https://${item.img}`}
                        alt={item.title}
                        layout="fill"
                      />
                    )}
                  </div>
                  <div>
                    <p className="text-center py-2">{item.title}</p>
                  </div>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const returnObj = {
    paths: [],
    fallback: true,
  };
  try {
    const categories = await axios.get(`${backendHost}/category`);
    const slug = categories.data.map((item) => ({
      params: { category: titleToSlugConverter(item.title) },
    }));
    returnObj.paths = slug;
    return returnObj;
  } catch (err) {
    console.log("err", err);
    return returnObj;
  }
}

export async function getStaticProps(context) {
  const { category } = context.params;
  const props = {
    data: [],
  };
  try {
    //To obtain slug from category
    const categories = await axios.get(`${backendHost}/category`);
    let slug = categories.data.filter(
      (item) => titleToSlugConverter(item.title) === category 
    );
    const categoryPageData = await axios.get(`${backendHost}/category/${slug[0].id}`);
    props.data = categoryPageData.data;
    return {props};
  } catch (err) {
    console.log(err);
    return {
      notFound: true,
    };
  }
}
