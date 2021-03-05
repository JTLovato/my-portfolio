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
        <div className="porjects-page">
          <div className="header">
            <h1>Code Work</h1>
          </div>
          <div className="coding-links-container">
            <div className="coding-container">
              <button className="coding-button steelline-button" onClick={() => setShowSL(true) }><img src="../img/steelline.jpg" /></button>
              <SteelLineModal title="Steel Line" src="../img/steelline-header.jpg" onClose = {() => setShowSL(false)} show={showSL} >
              </SteelLineModal>
            </div>
            <div className="coding-container">
              <button className="coding-button bookbound-button" onClick={() => setShowBB(true) }><img src="../img/bookbound.jpg" /></button>
              <BookBoundModal title="bookbound" src="../img/bookbound-header.jpg" onClose = {() => setShowBB(false)} show={showBB} >
              </BookBoundModal>
            </div>
            <div className="coding-container">
              <button className="coding-button zerogbar-button" onClick={() => setShowZG(true) }><img src="../img/zerogbar.jpg" /></button>
              <ZeroGBarModal title="Zero-G Bar" src="../img/zerogbar-header.jpg" onClose = {() => setShowZG(false)} show={showZG} >
              </ZeroGBarModal>
            </div>
            <div className="coding-container">
              <button className="coding-button tgmp-button" onClick={() => setShowGM(true) }><img src="../img/tgmp.jpg" /></button>
              <TheGoalieMaskProjectModal title="The Goalie Mask Project" src="../img/tgmp-header.jpg" onClose = {() => setShowGM(false)} show={showGM} >
              </TheGoalieMaskProjectModal>
            </div>
            <div className="coding-container">
              <button className="coding-button cover-button" onClick={() => setShowCO(true) }><img src="../img/cover.jpg" /></button>
              <CoverModal title="Cover" src="../img/cover-header.jpg" onClose = {() => setShowCO(false)} show={showCO} >
              </CoverModal>
            </div>
            <div className="coding-container">
              <button className="coding-button honee-button" onClick={() => setShowHO(true) }><img src="../img/honee.jpg" /></button>
              <HoneeModal title="Honee" href="https://jtlovato.github.io/Honee/" src="../img/honee-header.jpg" onClose = {() => setShowHO(false)} show={showHO} >
              </HoneeModal>
            </div>
          </div>
        </div>
      )
}
