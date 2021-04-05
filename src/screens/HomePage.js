
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
                        <img className="" alt="" src="../img/astrocode2.png"></img>
                    </button>
                </a>
                <a href="/design" >
                    <button className="homepage-link astro-goalie" onClick={sliderHandler} >
                        <img className="" alt="" src="../img/astrogoalie.png"></img>
                    </button>
                </a>
                <a href="/about" >
                    <button className="homepage-link astro-me" onClick={sliderHandler} >
                        <img className="" alt="" src="../img/astrome.png"></img>
                    </button>
                </a>
                <a href="blogs" >
                    <button className="homepage-link astro-blog" onClick={sliderHandler} >
                        <img className="" alt="" src="../img/astroblog.png"></img>
                    </button>
                </a>
                <a href="contact" >
                    <button className="homepage-link astro-contact" onClick={sliderHandler} >
                        <img className="" alt="" src="../img/astrocontact2.png"></img>
                    </button>
                </a>
                <a href="skills" >
                    <button className="homepage-link astro-skills" onClick={sliderHandler} >
                        <img className="" alt="" src="../img/astroskills2.png"></img>
                    </button>
                </a>
                <img className="homepage-bg" src="../img/bg.png" />
            </div>
        </div>
    )
}
