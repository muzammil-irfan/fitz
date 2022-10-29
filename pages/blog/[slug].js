import axios from "axios";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import BlogCard from "../../components/common/BlogCard";
import BlogSection from "../../components/Home/BlogSection";
import backendHost from "../../utils/backendHost";

export default function Blog({ post }) {
  if(!post){return <div>Loading...</div>}
  return (
    <div>
      <div className="flex flex-col sm:flex-row-reverse sm:justify-around px-3">
        <div className="aspect-square m-2 relative sm:w-1/2 sm:m-5 max-w-[450px] " >
          <Image 
          src={post.media[0] && post.media[0]}
          layout="fill"
          />
        </div>
          <div className="sm:w- "> 
            <p className="yellow my-2">{"No category".toUpperCase()}</p>
            <div dangerouslySetInnerHTML={{__html:post.content}} />
          </div>
  
      </div>
      <BlogSection />
    </div>
  );
}

export async function getStaticPaths() {
  const returnObj = {
    paths: [],
    fallback: true,
  };
  return axios
    .get(`${backendHost}/blog`)
    .then((res) => {
      const arr =
        res.data.length > 0
          ? res.data.map((item) => ({ params: { slug: item.slug } }))
          : { params: {} };
      returnObj.paths = [...arr];
      return returnObj;
    })
    .catch((err) => {
      console.log(err.response.data);
      return returnObj;
    });
}

export async function getStaticProps(context) {
  const { params } = context;
  const props = {
    post: {},
    revalidate: 10
  };
  return axios
    .get(`${backendHost}/blog/view`, { params })
    .then((res) => {
      props.post = { ...res.data };
      return {
        props,
      };
    })
    .catch((err) => {
      console.log("err", err);

      return {
        notFound: true,
      };
    });
}
