import axios from "axios";
import React, { useState, useEffect } from "react";
import { Context } from "react-intl/src/components/injectIntl";
import BlogCard from "../../components/common/BlogCard";
import BreadCrumbs from "../../components/common/BreadCrumbs";
import Layout from "../../components/Layout";
import backendHost from "../../utils/backendHost";

export default function Blog({ dir,categories,posts }) {
  if(!posts || !categories){
    return <div>Loading...</div>
  }
  return (
    <Layout dir={dir} categories={categories} className="container mx-auto">
      {/* <div className="pt-5 pl-1">
      <BreadCrumbs data={[{title:"Home",href:"/"},{title:"Blogs",href:"/blog"}]} />
      </div> */}
    <div className="grid md:grid-cols-3 my-5">
      {posts.length > 0 ? (
        posts.map((item) => {
          return (
            <BlogCard
              key={item.id}
              href={`/blog/${item.slug}`}
              imageSrc={item.media[0]}
              title={item.title}
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

export async function getStaticProps(context) {
  const props = {
    posts: [],
    categories: [],
    revalidate:10
  };
  try{
    const blogs = await axios.get(`${backendHost}/blog`,{
      headers:{
        "Accept-Language":context.locale
      }
    });
    props.posts = blogs.data;
    const categories = await axios.get(`${backendHost}/category`,{
      headers:{
        "Accept-Language":context.locale
      }
    });
    props.categories = categories.data;
    return {props};
  } catch(err){
    console.log(err);
    return {props};
  }
}
