import React from 'react'

const ZeroGBarModal = props => {

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
                        <p>A simple one-page site for a outer-space themed bar.</p>
                        <h1>What Did You Use To Do It?</h1>
                        <p>HTML, CSS, JS, Bootstrap.</p>
                        <h1>What Did You Learn?</h1>
                        <p>Sometimes simpler is better. Didn't go crazy, but added modals, contact, etc</p>
                        <h1>How Can It Be Better?</h1>
                        <p>Little too simple. Layout is a little clunky. Small refinement things such as copyright date, carousel smoothness, etc.</p>
                        <h1>What Did You Love About It?</h1>
                        <p>Looks good, mobile is nice, theme is really cool.</p>
                    </div>
                </div>
                <div className="modal-body">
                    <button onClick={props.onClose} className="modal-button">Close</button>
                </div>
            </div>
        </div>
    )
}

export default ZeroGBarModal