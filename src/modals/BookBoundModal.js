import React from 'react'

const BookBoundModal = props => {

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
                        <p>To make a simple one page site for book lovers.</p>
                        <h1>What Did You Use To Do It?</h1>
                        <p>HTML, CSS, JS, Bootstrap, Google Map API</p>
                        <h1>What Did You Learn?</h1>
                        <p>This was mostly a design idea, but wanted to make a custom Google Map API for later use. </p>
                        <h1>How Can It Be Better?</h1>
                        <p>It could have more functionality, it's very simple.</p>
                        <h1>What Did You Love About It?</h1>
                        <p>It works and looks great. Flows well and isn't confusing at all. Looks amazing on mobile as well.</p>
                    </div>
                </div>
                <div className="modal-body">
                    <button onClick={props.onClose} className="modal-button">Close</button>
                </div>
            </div>
        </div>
    )
}

export default BookBoundModal