
import BlogDetails from '@/components/blog-details';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


export const metadata = {
  title: "Sinusoidal Cyber Technologies Pvt.Ltd",
};


const index = () => {
  return (
    <Wrapper>
      <BlogDetails />
    </Wrapper>
  );
};

export default index;