import React from 'react';
import DelayLink from 'react-delay-link';

export default function Blogs(props) {
  const sliderHandler = () => {
    const slider = document.getElementById('slider');
     slider.classList.add('slider-close');
      setTimeout(RemoveClass, 1000)
    }
    function RemoveClass() {
      const slider = document.getElementById('slider');
      slider.classList.remove('slider-close')
    }
    
  const { blog } = props;
  
  return (
    <div key={blog.id} className="blog-card">
      <DelayLink delay={300} to={`/blogs/${blog._id}`} >
        <a className="blog-card-link" href={`/blogs/${blog._id}`} onClick={sliderHandler} >
          <div className="blog-image-overlay"></div>
          <div className="blog-card-deco"></div>
          <img className="medium" src={blog.card} alt={blog.title} />
          <h5>{blog.title}<br></br><span className="blog-card-subtitle">{blog.subTitle}</span></h5>
        </a>
      </DelayLink>
    </div>
  );
}