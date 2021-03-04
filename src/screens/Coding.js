import React, { useState } from 'react';
import SteelLineModal from '../modals/SteelLineModal';
import BookBoundModal from '../modals/BookBoundModal';


export default function Coding() {

  const [showSL, setShowSL] = useState(false);
  const [showBB, setShowBB] = useState(false);
  const [showZG, setShowZG] = useState(false);
  const [showGM, setShowGM] = useState(false);

      return (
        <div className="porjects-page">
          <div className="header">
            <h1>Code Work</h1>
          </div>
          <div className="coding-container">
            <h1>STEEL | LINE</h1>
            <button onClick={() => setShowSL(true) }>Show Modal</button>
            <SteelLineModal title="Steel Line" onClose = {() => setShowSL(false)} show={showSL} >
              <p>STUFFF</p>
            </SteelLineModal>
          </div>
          <div className="coding-container">
            <h1>BOOK BOUND</h1>
            <button onClick={() => setShowBB(true) }>Show Modal</button>
            <BookBoundModal title="bookbound" onClose = {() => setShowBB(false)} show={showBB} >
              <p>STUFFF</p>
            </BookBoundModal>
          </div>
          <div className="coding-container">
            <h1>Zero-G Bar</h1>
            <button onClick={() => setShowZG(true) }>Show Modal</button>
            <BookBoundModal title="Zero-G Bar" onClose = {() => setShowZG(false)} show={showZG} >
              <p>STUFFF</p>
            </BookBoundModal>
          </div>
          <div className="coding-container">
            <h1>The Goalie Mask Project</h1>
            <button onClick={() => setShowGM(true) }>Show Modal</button>
            <BookBoundModal title="The Goalie Mask Project" onClose = {() => setShowGM(false)} show={showGM} >
              <p>STUFFF</p>
            </BookBoundModal>
          </div>
        </div>
      )
}
