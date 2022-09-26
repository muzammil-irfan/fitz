import React from 'react';
import BlogCard from '../../components/common/BlogCard';

export default function Blog() {
  return (
    <div className='grid md:grid-cols-3 my-5'>
        <BlogCard
          imageSrc={"/blog/image-1.png"}
          category="case study"
          title="Sed do eiusmod tempor 8% incididunt ut labore et."
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu reprehenderit fugiat."
        />
        <BlogCard
          imageSrc={"/blog/image-2.png"}
          category="video"
          title="Oed emasn eiusmod tempor incididunt labore et dolor."
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat،Excepteur sint occaecat cupidatat"
        />
        <BlogCard
          imageSrc={"/blog/image-3.png"}
          category="article"
          title="Dolor masn eiusmod tempor  labore et occaecat."
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
        />
    </div>
  )
}
