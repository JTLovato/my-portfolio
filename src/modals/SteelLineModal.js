import React from 'react'

const SteelLineModal = props => {

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
                        <p>To make a fully functional e-commerce site.</p>
                        <h1>What Did You Use To Do It?</h1>
                        <p>HTML, CSS, JS, React, Heroku, MongoDB, Paypal API, Postman, and more.</p>
                        <h1>What Did You Learn?</h1>
                        <p>A lot. Created mongo database for inventory, real-time selling, paypal linkage, profile creation, admin accounts, serach functionality, carts, product creation, local storage, and so, so much more.</p>
                        <h1>How Can It Be Better?</h1>
                        <p>Some small refinement, but not much.</p>
                        <h1>What Did You Love About It?</h1>
                        <p>So much. My biggest, most ambitious project. Looks sharp, great on mobile, lots of tiny features that make a site a site.</p>
                    </div>
                </div>
                <div className="modal-body">
                    <button onClick={props.onClose} className="modal-button">Close</button>
                </div>
            </div>
        </div>
    )
}

export default SteelLineModal