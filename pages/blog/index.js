import axios from "axios";
import React from "react";
import BlogCard from "../../components/common/BlogCard";
import Layout from "../../components/Layout";
import backendHost from "../../utils/backendHost";

export default function Blog({ dir,categories,posts }) {
  if(!posts || !categories){
    return <div>Loading...</div>
  }
  return (
    <Layout dir={dir} categories={categories} className="container mx-auto px-3 md:max-w-[90%] lg:max-w-[80%]">
    <div className="flex flex-wrap justify-start my-6 md:my-12">
      {posts.length > 0 ? (
        posts.map((item) => {
          return (
            <div className="max-w-[360px] my-2" key={item.id}>
            <BlogCard
              key={item.id}
              href={`/blog/${item.slug}`}
              imageSrc={item.media[0]}
              title={item.title}
            />
            </div>
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
