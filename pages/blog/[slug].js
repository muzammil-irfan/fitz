import axios from "axios";
import React, { useState, useEffect } from "react";
import BlogCard from "../../components/common/BlogCard";
import backendHost from "../../utils/backendHost";

export default function Blog({ posts }) {
  useEffect(() => {
    axios
      .get(`${backendHost}/blog/view?slug=since-yesterday`)
      .then((res) => {
        console.log("api res", res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("props", posts);
  }, []);
  return (
    <div className="grid md:grid-cols-3 my-5">
      {/* <BlogCard
        key={item.id}
        href={`/blog/${item.slug}`}
        imageSrc={item.media[0]}
        category={"No Category"}
        title={item.title}
        description={"There is not any short description in the data"}
      /> */}
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
    posts: {},
    revalidate: 10
  };
  return axios
    .get(`${backendHost}/blog/view`, { params })
    .then((res) => {
      props.posts = { ...res.data };
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
