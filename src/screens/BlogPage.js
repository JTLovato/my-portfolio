import React from 'react';
// import { Link } from 'react-router-dom';
import data from '../data';

export default function BlogPage(props) {
  const blog = data.blogs.find((x) => x._id === props.match.params.id);

  if (!blog) {
    return <div> Blog Not Found</div>;
  }
  
  return (
    <div>
      {/* <Link to="/">Back to result</Link> */}
      <div className="row top">
        <div className="col-2">
          <img className="large" src={blog.src} alt={blog.title}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{blog.title}</h1>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}