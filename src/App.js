
import './index.css';
import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import HomePage from './screens/HomePage'
import About from './screens/About';
import Contact from './screens/Contact';
import Projects from './screens/Projects';
import Coding from './screens/Projects';
import Design from './screens/Design';
import Skills from './screens/Skills';
import NotFound from './screens/NotFound';

function App() {

  const year = new Date().getFullYear();

  return (
    <BrowserRouter>
      <div className="app">
        <header className="app-header">
        <Link to="/homepage">
            <button className="button">
              <div className="button-content">
                <p className="button__text">home</p>
              </div>
            </button>
          </Link>
          <Link to="/about">
            <button className="button">
              <div className="button-content">
                <p className="button__text">about</p>
              </div>
            </button>
          </Link>
          <Link to="/coding">
            <button className="button">
              <div className="button-content">
                <p className="button__text">coding</p>
              </div>
            </button>
          </Link>
          <Link to="/design">
            <button className="button">
              <div className="button-content">
                <p className="button__text">designs</p>
              </div>
            </button>
          </Link>
          <Link to="/blog">
            <button className="button">
              <div className="button-content">
                <p className="button__text">blog</p>
              </div>
            </button>
          </Link>
          <Link to="/contact">
            <button className="button">
              <div className="button-content">
                <p className="button__text">contact</p>
              </div>
            </button>
          </Link>
          <Link to="/skills">
            <button className="button">
              <div className="button-content">
                <p className="button__text">skills</p>
              </div>
            </button>
          </Link>
        </header>

        <main>
          <Switch>
            <Route path="/about" component={About} exact></Route>
            <Route path="/coding" component={Coding} exact></Route>
            <Route path="/projects" component={Projects} exact></Route>
            <Route path="/design" component={Design} exact></Route>
            <Route path="/contact" component={Contact} exact></Route>
            <Route path="/skills" component={Skills} exact></Route>
            <Route path="/homepage" component={HomePage} exact></Route>
            <Route component={NotFound} />
            <Route path="/" component={HomePage} exact></Route>          </Switch>
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
