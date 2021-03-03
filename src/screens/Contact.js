import React from 'react'

export default function Contact() {
    return (
        <div className="contact-container">
            <div className="header">
                <h1>contact me</h1>
            </div>
            <a href="mailto:johnsawebdev@gmail.com" className="link-container">
                <img src="./img/email.jpg" className="color" />
                <img src="./img/email-grey.jpg" className="grey" />
            </a>
            <a href="tel:682-283-1972" className="link-container">
                <img src="./img/call.jpg" className="color" />
                <img src="./img/call-grey.jpg" className="grey" />
            </a>
            <a className="link-container">
                <img src="./img/address.jpg" className="color" />
                <img src="./img/address-grey.jpg" className="grey" />
            </a>
            <a href="https://www.linkedin.com/in/john-lovato-4295b3199/" className="link-container">
                <img src="./img/linkedin.jpg" className="color" />
                <img src="./img/linkedin-grey.jpg" className="grey" />
            </a>
            <a href="https://twitter.com/JohnTLovato" className="link-container">
                <img src="./img/twitter.jpg" className="color" />
                <img src="./img/twitter-grey.jpg" className="grey" />
            </a>
            <a href="https://github.com/JTLovato/" className="link-container">
                <img src="./img/github.jpg" className="color" />
                <img src="./img/github-grey.jpg" className="grey" />
            </a>
        </div>
    )
}
