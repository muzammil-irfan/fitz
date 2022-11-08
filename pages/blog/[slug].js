import axios from "axios";
import Image from "next/image";
// import postcss from "postcss";
import React, { useState, useEffect } from "react";
import BlogCard from "../../components/common/BlogCard";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import CustomImage from "../../components/common/CustomImage";
import BlogSection from "../../components/Home/BlogSection";
import Layout from "../../components/Layout";
import backendHost from "../../utils/backendHost";
import titleToSlugConverter from "../../utils/titleToSlugConverter";

export default function Blog({ dir, categories, post, blogs }) {
  if (!post || !blogs) {
    return <div>Loading...</div>;
  }
  return (
    <Layout dir={dir} categories={categories} className="">
      <div className=" pt-6 md:pt-12 ">
        <div className="flex flex-col sm:flex-row-reverse sm:justify-around md:justify-between md:container md:mx-auto md:max-w-[90%] lg:max-w-[80%] px-3 pb-5">
          <div className="aspect-square m-2 relative sm:w-1/2 sm:m-5 max-w-[450px] ">
            <CustomImage
              src={post.media[0] && post.media[0]}
              alt={post.title}
            />
          </div>
          <div className="sm:w- ">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
        <div className="bg-[#F8F8F8] pt-3 pb-12 px-3">
          <div className="container mx-auto md:max-w-[90%] lg:max-w-[80%]">
          <BlogSection data={blogs.filter((item) => item.id !== post.id)} />
          </div>
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
    const blog = await axios.get(`${backendHost}/blog`, {
      headers: {
        "Accept-Language": "en",
      },
    });
    const blogAr = await axios.get(`${backendHost}/blog`, {
      headers: {
        "Accept-Language": "ar",
      },
    });
    const pathsEn =
      blog.data?.length > 0
        ? blog.data.map((item) => ({
            params: { slug: item.slug },
            locale: "en",
          }))
        : { params: {} };
    const pathsAr =
      blogAr.data?.length > 0
        ? blogAr.data.map((item) => ({
            params: { slug: item.slug },
            locale: "ar",
          }))
        : { params: {} };
    returnObj.paths = [...pathsEn, ...pathsAr];
    return returnObj;
  } catch (err) {
    console.log(err);
    return returnObj;
  }
}

export async function getStaticProps(context) {
  const { params } = context;
  const props = {
    blogs: [],
    post: undefined,
    categories: [],
    revalidate: 10,
  };
  try {
    const headers = {
      "Accept-Language": context.locale,
    };
    const allBlogs = await axios.get(`${backendHost}/blog`, { headers });
    props.blogs = allBlogs.data;
    const blog = await axios.get(`${backendHost}/blog/view`, {
      params,
      headers,
    });
    props.post = blog.data;
    const categories = await axios.get(`${backendHost}/category`, {
      headers: {
        "Accept-Language": context.locale,
      },
    });
    props.categories = categories.data;
    return { props };
  } catch (err) {
    console.log(err);
    return {
      notFound: true,
    };
  }
}
