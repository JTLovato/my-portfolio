import React from 'react'

export default function NotFound() {
    return (
        <div className="not-found">
            <div className="not-found-info">
                <h1>404</h1>
                <h3>Ah chips and dip, something went wrong or something broke.</h3>
                <p>even my dog is confused right now.</p>
                <h3>If this is a bug, please email me <a href="mailto: johnsawebdev@gmail.com">here.</a></h3>
                <h3>If this was on purpose, congrats! You got to see my dog. His name is Big and he's a good boy.</h3> 
            </div>
            <img src="../img/big.jpg" alt="My dog, Big, looking very confused at how you arrived here."></img>
        </div>
    )
}
