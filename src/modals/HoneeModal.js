import React from 'react'
import { Link } from 'react-router-dom'

const HoneeModal = props => {

    return (
        <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <img src={props.src} className="modal-image"></img>
                </div>
                <div className="modal-body">
                    <a href={props.href}>Let Me See It</a>
                    <div className="modal-info">
                        <h1>What Was Your Goal?</h1>
                        <p>To make a site that kept track of people's good habits and mental health, aimed for the Black community.</p>
                        <h1>What Did You Use To Do It?</h1>
                        <p>HTML, CSS, JS, Boootstrap, Local Storage, SVGs</p>
                        <h1>What Did You Learn?</h1>
                        <p>Positioning, especially with SVGs, isn't easy. Making the site accessable for every viewpoint is important, test out several sizes.</p>
                        <h1>How Can It Be Better?</h1>
                        <p>Need to fix the positioning of several SVGs, would probably just simple icons instead next time.</p>
                        <h1>What Did You Love About It?</h1>
                        <p>The hexagon designs. On mobile it came out pretty okay.</p>
                    </div>
                </div>
                <div className="modal-body">
                    <button onClick={props.onClose} className="modal-button">Close</button>
                </div>
            </div>
        </div>
    )
}

export default HoneeModal