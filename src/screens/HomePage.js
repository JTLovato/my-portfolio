
import React from 'react'

export default function HomePage() {
    
  const sliderHandler = () => {
    const slider = document.getElementById('slider');
     slider.classList.add('slider-close');
      setTimeout(RemoveClass, 1000)
    }
    function RemoveClass() {
      const slider = document.getElementById('slider');
      slider.classList.remove('slider-close')
    }
  
    return (
        <div className="homepage">
            <div className="homepage-links-container">
                <a href="/coding" >
                    <button className="homepage-link astro-code" onClick={sliderHandler} >
                        <img className="" alt="Coding Link" src="../img/astrocode2.png"></img>
                    </button>
                </a>
                <a href="/design" >
                    <button className="homepage-link astro-goalie" onClick={sliderHandler} >
                        <img className="" alt="Designs Link" src="../img/astrogoalie.png"></img>
                    </button>
                </a>
                <a href="/about" >
                    <button className="homepage-link astro-me" onClick={sliderHandler} >
                        <img className="" alt="About Me Link" src="../img/astrome.png"></img>
                    </button>
                </a>
                <a href="blogs" >
                    <button className="homepage-link astro-blog" onClick={sliderHandler} >
                        <img className="" alt="Blog Link" src="../img/astroblog.png"></img>
                    </button>
                </a>
                <a href="contact" >
                    <button className="homepage-link astro-contact" onClick={sliderHandler} >
                        <img className="" alt="Contact link" src="../img/astrocontact2.png"></img>
                    </button>
                </a>
                <a href="skills" >
                    <button className="homepage-link astro-skills" onClick={sliderHandler} >
                        <img className="" alt="Skills Link" src="../img/astroskills2.png"></img>
                    </button>
                </a>
                <img className="homepage-bg" src="../img/bg.png" />
                <img className="homepage-bg2" src="../img/bg2.png" />
            </div>
        </div>
    )
}
