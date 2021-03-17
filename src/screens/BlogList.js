import React from 'react';
import Blogs from '../Blogs';
import data from '../data';

export default function HomeScreen() {
  return (
    <div>
      <div className="row center">
        {data.blogs.map((blog) => (
          <Blogs key={blog._id} blog={blog} ></Blogs>
        ))}
      </div>
    </div>
  );
}