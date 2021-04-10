import React from 'react'

export default function Contact() {
    return (
        <div className="contact-container">
            <div className="header">
                <h1>contact me</h1>
            </div>
            <a href="mailto:johnsawebdev@gmail.com" className="link-container mail">
                <img src="./img/email.jpg" className="color" alt="Email Icon" />
                <img src="./img/email-grey.jpg" className="grey" alt="Email Icon" />
                <div className="bg-color bg-mail">
                </div>
            </a>
            <a href="tel:682-283-1972" className="link-container call">
                <img src="./img/call.jpg" className="color" alt="Phone icon" />
                <img src="./img/call-grey.jpg" className="grey" alt="Phone icon" />
                <div className="bg-color bg-call">
                </div>
            </a>
            <a href="https://www.denver.org/" className="link-container address">
                <img src="./img/address.jpg" className="color" alt="Address icon" />
                <img src="./img/address-grey.jpg" className="grey" alt="Address icon" />
                <div className="bg-color bg-address">
                </div>
            </a>
            <a href="https://www.linkedin.com/in/johntlovato/" className="link-container linkedin">
                <img src="./img/linkedin.jpg" className="color" alt="LinkedIn icon" />
                <img src="./img/linkedin-grey.jpg" className="grey" alt="LinkedIn icon" />
                <div className="bg-color bg-linkedin">
                </div>
            </a>
            <a href="https://twitter.com/JohnTLovato" className="link-container twitter">
                <img src="./img/twitter.jpg" className="color" alt="Twitter icon" />
                <img src="./img/twitter-grey.jpg" className="grey" alt="Twitter icon" />
                <div className="bg-color bg-twitter">
                </div>
            </a>
            <a href="https://github.com/JTLovato/" className="link-container github">
                <img src="./img/github.jpg" className="color" alt="Github icon" />
                <img src="./img/github-grey.jpg" className="grey" alt="Github icon" />
                <div className="bg-color bg-github">
                </div>
            </a>
        </div>
    )
}
