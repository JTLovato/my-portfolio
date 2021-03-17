
import './index.css';
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DelayLink from 'react-delay-link';
import HomePage from './screens/HomePage'
import About from './screens/About';
import Contact from './screens/Contact';
import Coding from './screens/Coding';
import Design from './screens/Design';
import Skills from './screens/Skills';
import NotFound from './screens/NotFound';
import BlogsList from './screens/BlogList';
import BlogPage from './screens/BlogPage';


function App() {

  const year = new Date().getFullYear();


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
    <BrowserRouter>
      <div className="app">
        <header className="app-header">
        <DelayLink delay={300} to="/homepage" >
            <button className="button" onClick={sliderHandler} >
              <div className="button-content">
                <p className="button__text">home</p>
              </div>
            </button>
          </DelayLink>
          <DelayLink delay={300} to="/coding" >
          <button className="button" onClick={sliderHandler}>
              <div className="button-content">
                <p className="button__text">coding</p>
              </div>
            </button>
          </DelayLink>
          <DelayLink delay={300} to="/design" >
          <button className="button" onClick={sliderHandler} >
              <div className="button-content">
                <p className="button__text">designs</p>
              </div>
            </button>
          </DelayLink>
          <DelayLink delay={300} to="/blogs" >
          <button className="button" onClick={sliderHandler} >
              <div className="button-content">
                <p className="button__text">blog</p>
              </div>
            </button>
          </DelayLink>
          <DelayLink delay={300} to="/contact" >
          <button className="button" onClick={sliderHandler} >
              <div className="button-content">
                <p className="button__text">contact</p>
              </div>
            </button>
          </DelayLink>
          <DelayLink delay={300} to="/skills" >
          <button className="button" onClick={sliderHandler}>
              <div className="button-content">
                <p className="button__text">skills</p>
              </div>
            </button>
          </DelayLink>
          <DelayLink delay={300} to="/about" >
          <button className="button" onClick={sliderHandler}>
              <div className="button-content">
                <p className="button__text">about</p>
              </div>
            </button>
          </DelayLink>
        </header>

        <main>
          <Switch>   
            <Route path="/about" component={About} exact></Route>
            <Route path="/coding" component={Coding} exact></Route>
            <Route path="/blogs" component={BlogsList} exact></Route>
            <Route path="/blogs/:id" component={BlogPage}></Route>
            <Route path="/design" component={Design} exact></Route>
            <Route path="/contact" component={Contact} exact></Route>
            <Route path="/skills" component={Skills} exact></Route>
            <Route path="/homepage" component={HomePage} exact></Route>
            <HomePage path="/"exact></HomePage>    
            <Route component={NotFound} />   
          </Switch>
          <div id="slider-left" className="" ></div>
          <div id="slider" className="" ></div>
        </main>

        <footer>
          <p>&copy; {year}</p>
          <p>John T. Lovato</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
