import React from 'react'

const TheGoalieMaskProjectModal = props => {

    return (
        <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <img src={props.src} alt={props.alt} className="modal-image"></img>
                </div>
                <div className="modal-body">
                    <a href={props.href}>Let Me See It</a>
                    <div className="modal-info">
                        <h1>What Was Your Goal?</h1>
                        <p>To make a sleek site for hockey goalie mask lovers.</p>
                        <h1>What Did You Use To Do It?</h1>
                        <p>HTML, CSS, Javascript</p>
                        <h1>What Did You Learn?</h1>
                        <p>This was one of my first real javascript sites, so there's a lot of functionality that is connected to JS.</p>
                        <h1>How Can It Be Better?</h1>
                        <p>I linked to several HTML pages, I can make them a lot less to save on loading times. Make the images smaller and responsive. Make it better for mobile, and fix the layout.</p>
                        <h1>What Did You Love About It?</h1>
                        <p>For the first real JS project it's not too bad. The design is good and the white looks amazing. Some mobile parts looks nice.</p>
                    </div>
                </div>
                <div className="modal-body">
                    <button onClick={props.onClose} className="modal-button">Close</button>
                </div>
            </div>
        </div>
    )
}

export default TheGoalieMaskProjectModal