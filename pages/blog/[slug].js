import axios from "axios";
import React, { useState, useEffect } from "react";
import BlogCard from "../../components/common/BlogCard";
import backendHost from "../../utils/backendHost";

export default function Blog({ posts }) {
  return (
    <div className="grid md:grid-cols-3 my-5">
      {posts.length > 0 ? (
        posts.map((item) => {
          return (
            <BlogCard
              key={item.id}
              href={`/blog/${item.slug}`}
              imageSrc={item.media[0]}
              category={"No Category"}
              title={item.title}
              description={"There is not any short description in the data"}
            />
          );
        })
      ) : (
        <p>There is not any blogs available</p>
      )}
    </div>
  );
}

export async function getStaticPaths() {

    const returnObj = {
        paths:[] ,
        fallback: false
    };
    return axios
    .get(`${backendHost}/blog`)
    .then((res) => {
      const arr = res.data.length > 0 ? res.data.map(item=>({params:{slug:item.slug}})) : {params:{}}
      returnObj.paths = [...arr];
      return returnObj;
    })
    .catch((err) => {
      console.log(err.response.data);
      return returnObj;
    });
};

export async function getStaticProps(context) {
    console.log(context)
  const props = {
    posts: [],
  };
  return axios
    .get(`${backendHost}/blog`)
    .then((res) => {
      props.posts = [...res.data];
      return {
        // Passed to the page component as props
        props,
      };
    })
    .catch((err) => {
      console.log(err.response.data);
      return {
        // Passed to the page component as props
        props,
      };
    });
}