import axios from "axios";
import React, { useState, useEffect } from "react";
import BlogCard from "../../components/common/BlogCard";
import Layout from "../../components/Layout";
import backendHost from "../../utils/backendHost";

export default function Blog({ categories,posts }) {
  if(!posts || !categories){
    return <div>Loading...</div>
  }
  return (
    <Layout categories={categories}>
    <div className="grid md:grid-cols-3 my-5">
      {posts.length > 0 ? (
        posts.map((item) => {
          console.log(item)
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
    </Layout>
  );
}

export async function getStaticProps() {
  const props = {
    posts: [],
    categories: [],
    revalidate:10
  };
  try{
    const blogs = await axios.get(`${backendHost}/blog`);
    props.posts = blogs.data;
    const categories = await axios.get(`${backendHost}/category`);
    props.categories = categories.data;
    return {props};
  } catch(err){
    console.log(err);
    return {props};
  }
}
