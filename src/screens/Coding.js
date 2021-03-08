import React, { useState } from 'react';
import SteelLineModal from '../modals/SteelLineModal';
import BookBoundModal from '../modals/BookBoundModal';
import ZeroGBarModal from '../modals/ZeroGBarModal';
import TheGoalieMaskProjectModal from '../modals/TheGoalieMaskProjectModal';
import CoverModal from '../modals/CoverModal';
import HoneeModal from '../modals/HoneeModal';


export default function Coding() {

  const [showSL, setShowSL] = useState(false);
  const [showBB, setShowBB] = useState(false);
  const [showZG, setShowZG] = useState(false);
  const [showGM, setShowGM] = useState(false);
  const [showCO, setShowCO] = useState(false);
  const [showHO, setShowHO] = useState(false);

      return (
        <div className="projects-page">
          <div className="header">
            <h1>coding projects</h1>
          </div>
          <div className="coding-links-container">
            <div className="coding-container">
              <div 
                className="coding-button steelline-button" onClick={() => setShowSL(true) }>
                  <img src="../img/steelline.jpg"  alt="Link To Steel Line, An E-commerce Site Focusing On Pittsburgh Sports"/>
              </div>
              <SteelLineModal href="http://steelline-app.herokuapp.com/" alt="Link To Steel Line, An E-commerce Site Focusing On Pittsburgh Sports" title="Steel Line" src="../img/steelline-header.jpg" onClose = {() => setShowSL(false)} show={showSL} >
              </SteelLineModal>
            </div>
            <div className="coding-container">
              <div className="coding-button bookbound-button" onClick={() => setShowBB(true) }>
                <img src="../img/bookbound.jpg" alt="Link to BookBound, a simple one page site for book lovers"/>
              </div>
              <BookBoundModal href="https://jtlovato.github.io/bookbound/" alt="Link to BookBound, a simple one page site for book lovers" title="bookbound" src="../img/bookbound-header.jpg" onClose = {() => setShowBB(false)} show={showBB} >
              </BookBoundModal>
            </div>
            <div className="coding-container">
              <div className="coding-button zerogbar-button" onClick={() => setShowZG(true) }>
                <img src="../img/zerogbar.jpg"  alt="Link to Zero-G Bar, an out Of This World Bare Serving the Best Drinks In The Galaxy"/>
              </div>
              <ZeroGBarModal href="https://jtlovato.github.io/ZeroGBar/"  alt="Link to Zero-G Bar, an out Of This World Bare Serving the Best Drinks In The Galaxy" title="Zero-G Bar" src="../img/zerogbar-header.jpg" onClose = {() => setShowZG(false)} show={showZG} >
              </ZeroGBarModal>
            </div>
            <div className="coding-container">
              <div className="coding-button tgmp-button" onClick={() => setShowGM(true) }>
                <img src="../img/tgmp.jpg" alt="Link to the Goalie Mask Project, Showcasing The History of Goalie Masks In Hockey History" />
              </div>
              <TheGoalieMaskProjectModal href="https://jtlovato.github.io/GoalieMaskProject.com/" alt="Link to the Goalie Mask Project, Showcasing The History of Goalie Masks In Hockey History" title="The Goalie Mask Project" src="../img/tgmp-header.jpg" onClose = {() => setShowGM(false)} show={showGM} >
              </TheGoalieMaskProjectModal>
            </div>
            <div className="coding-container">
              <div className="coding-button cover-button" onClick={() => setShowCO(true) }>
                <img src="../img/cover.jpg" alt="Link to Cover, a Site Exclusively For Covering Well Known Songs By New Artists." />
              </div>
              <CoverModal title="Cover" alt="Link to Cover, a Site Exclusively For Covering Well Known Songs By New Artists." href="https://jtlovato.github.io/Honee/" src="../img/cover-header.jpg" onClose = {() => setShowCO(false)} show={showCO} >
              </CoverModal>
            </div>
            <div className="coding-container">
              <div className="coding-button honee-button" onClick={() => setShowHO(true) }>
                <img src="../img/honee.jpg" alt="Link To Honee, A Site For BlPOC To Meet And Chat About Their Health" />
              </div>
              <HoneeModal title="Honee" alt="Link To Honee, A Site For BlPOC To Meet And Chat About Their Health" href="https://jtlovato.github.io/Honee/" src="../img/honee-header.jpg" onClose = {() => setShowHO(false)} show={showHO} >
              </HoneeModal>
            </div>
          </div>
        </div>
      )
}
