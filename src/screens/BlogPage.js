import React from 'react';
import DelayLink from 'react-delay-link';
import data from '../data';

export default function BlogPage(props) {
  const blog = data.blogs.find((x) => x._id === props.match.params.id);
  const sliderHandler = () => {
    const slider = document.getElementById('slider');
    slider.classList.add('slider-close');
      setTimeout(RemoveClass, 1000)
    }
    function RemoveClass() {
      const slider = document.getElementById('slider');
      slider.classList.remove('slider-close')
    }
  if (!blog) {
    return <div> Blog Not Found</div>;
  }
  return (
    <div>
      <div className="blog-container">
        <div className="blog-left half">
          <div className="blog-overlay"></div>
          <img src={blog.src} alt="" />
          <h1 className="blog-quote">
            <img src="../img/quotes.png" alt="" />
            {blog.quote}
            <img src="../img/quotes.png" alt="" />
          </h1>
        </div>
        <div className="blog-right half">
            <h1>{blog.title}</h1>
            <h5>{blog.subTitle}</h5>
          <div className="blog-specifics">
            <p>{blog.date}</p>
          </div>
          <div className="blog-text-container">
            <p className="blog-text">{blog.text}</p>
            <div className="back-link">
              <DelayLink id="back-link" delay={300} to="../Blogs" onClick={sliderHandler}>Back To Blog List</DelayLink>
            </div>
          </div>
          <div className="blog-socials">
            <h3>Agree? Disagree? Let's Chat!</h3>
            <ul>
              <li>
                <a href="https://twitter.com/JohnTLovato">
                  <img src="../img/blog/twitter-icon.png" alt="" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/john-lovato-4295b3199/">
                  <img src="../img/blog/linkedin-icon.png" alt="" />
                </a>
              </li>
              <li>
                <a href="mailto:johnsawebdev@gmail.com">
                  <img src="../img/blog/mail-icon.png" alt="" />
                </a>
              </li>
              <li>
                <a href="https://github.com/JTLovato">
                  <img src="../img/blog/github-icon.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div> 
  );
}