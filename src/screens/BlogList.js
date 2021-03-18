import React from 'react';
import Blogs from '../Blogs';
import data from '../data';

export default function BlogList() {
  return (
      <div className="blog-list-container">
        {data.blogs.map((blog) => (
          <Blogs key={blog._id} blog={blog} ></Blogs>
        ))}
      </div>
  );
}