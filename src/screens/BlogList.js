import React from 'react';
import Blogs from '../Blogs';
import data from '../data';

export default function BlogList() {
  return (
      <div className="blog-list-container">
            <div className="header">
              <h1>Blog</h1>
            </div>
        {data.blogs.map((blog) => (
          <Blogs key={blog._id} blog={blog} ></Blogs>
        ))}
      </div>
  );
}