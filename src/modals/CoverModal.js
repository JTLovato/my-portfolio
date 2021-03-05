import React from 'react'

const CoverModal = props => {

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
                        <p>To create a static site wireframe that focused on several users uploading covers of their favorite songs, a la YouTube or Spotify.</p>
                        <h1>What Did You Use To Do It?</h1>
                        <p>HTML, CSS, Javascript, API, BootStrap</p>
                        <h1>What Did You Learn?</h1>
                        <p>Uploading music is tricky. Using an API it pulls in several fake profiles to populate a "For You" section.</p>
                        <h1>How Can It Be Better?</h1>
                        <p>Take it from wireframe to actual server based site where people can create their own profiles and upload their music. Animations could've been better.</p>
                        <h1>What Did You Love About It?</h1>
                        <p>Happy with the colors and designs. </p>
                    </div>
                </div>
                <div className="modal-body">
                    <button onClick={props.onClose} className="modal-button">Close</button>
                </div>
            </div>
        </div>
    )
}

export default CoverModal