
import './index.css';
import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import HomePage from './screens/HomePage'

function App() {

  const year = new Date().getFullYear();

  return (
    <BrowserRouter>
      <div className="app">
        <header className="app-header">
        <Link to="/">
            <button class="button">
              <div class="button-content">
                <p class="button__text">home</p>
              </div>
            </button>
          </Link>
          <Link to="/">
            <button class="button">
              <div class="button-content">
                <p class="button__text">about</p>
              </div>
            </button>
          </Link>
          <Link to="/">
            <button class="button">
              <div class="button-content">
                <p class="button__text">projects</p>
              </div>
            </button>
          </Link>
          <Link to="/">
            <button class="button">
              <div class="button-content">
                <p class="button__text">blog</p>
              </div>
            </button>
          </Link>
          <Link to="/">
            <button class="button">
              <div class="button-content">
                <p class="button__text">contact</p>
              </div>
            </button>
          </Link>
          <Link to="/">
            <button class="button">
              <div class="button-content">
                <p class="button__text">skills</p>
              </div>
            </button>
          </Link>
        </header>
        <main>
          <HomePage />
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
