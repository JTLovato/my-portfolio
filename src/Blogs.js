import React from 'react';

export default function Blog(props) {
  const { blog } = props;
  return (
    <div key={blog.id} className="card">
      <a href={`/blogs/${blog._id}`}>
        <img className="medium" src={blog.src} alt={blog.title} />
      </a>
      <div className="card-body">
        <a href={`/blogs/${blog._id}`}>
          <h2>{blog.title}</h2>
        </a>
      </div>
    </div>
  );
}