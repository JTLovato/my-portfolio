import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


export default function Coding() {

    const data = [
      {
        title: "Steel | Line",
        cover: "../img/steelline-grey.jpg",
        cover_color: "../img/steelline.jpg",
        header: "../img/steelline-cover-full.jpg",
        link: "http://steelline-app.herokuapp.com/",
        overview: "I wanted to create an e-commerce site, completely functional, with a way to create products, sell and ship, search by several parameters, add to and remove from cart, create users and admins, launch on heroku, utilize Mongo DB, Postman, and more. This was my first project in React.",
        work: "I went through several tutorials to learn how to use React, first. Then I built the basic page, the created each item which included all the data for it, and several photos for each, then uploaded to Mongo DB. I made it so you could search by several parameters(Team, brand, jersey/hat/shirt/etc). After, I made it so users could sign up and create an account, as well as make admin accounts that have more options. Then I made a cart so users could find a product, click on the info, and add a quantity to their cart. Then I made it so they could check out, and include their shipping address and PayPal information. Then the seller or admin could confirm shipping and delivery. I also gave the admin the ability to upload a product directly from their computer instead of having to upload it directly to MongoDB, as well as edit users. Added an order history screen for each user, followed by pagination for searches that result in many products returning, and a filter option, so a user can filter their results. Finally, I added the small details, i.e. free shipping for carts over $100, Sold Out and Almost Sold Out signage for low quantity items, and added reviews, so users could rate and review the products.",
        learned: "So much. This was my most ambitious project yet, and it took a lot of planning to do it right. I learned React pretty hands on, diving right in, experiencing a better search system, and how to make a one-page site using React-router-dom. I also learned some back end for the first time, finagling with Mongo DB, Postman, and Heroku. It was all very new to me, so several mistakes were made, but I got through them all. Also figured out how to make it so users and admin would be created using Mongo.",
        howHappy: "Pretty happy with this. This was my first foray into React and it was genuinely a lot of fun. As usual, I was too ambitious, and the project went far longer than I had anticipated, but I still was able to add everything I wanted. Plus it looks sharp.",
        problems: "Several. At one point the entire folder was wiped, so I had to start completely over about halfway through, losing about 100 hours of work. Plus learning the ins and outs of React were an adventure. Also, learning how to use Mongo DB and seed products and users was fun. I had a few problems learning how to consistantly connect my site with mongo and Heroku, but I was able to and now it runs great.",
      },
      {
        title: "Bookbound",
        cover: "../img/bookbound-grey.jpg",
        cover_color: "../img/bookbound.jpg",
        header: "../img/bookbound-cover-full.jpg",
        link: "https://jtlovato.github.io/bookbound/",
        overview: "I wanted to create a simple, great looking one-page site for book lovers, that incorperated a book club and gave users a way to find others.",
        work: "One of my problems I recognize is that I get overly ambitious and plan to give a site a million different features. With Bookbound, I wanted to just keep it simple.As a result, it's a one page site that has a carousel, google maps api for locating libraries, and overall had a very down-home very local look to it. ",
        learned: "I wanted to still have a few neat little features, and learned how to create a rudimentary chat box, so anyone on the site could chat about the book of the month. I also made a custom Google Map API that showed a library in each state. I also added a calender that showed the day of the next meeting(which is always two weeks from the current date).",
        howHappy: "Pretty happy. I really wanted to focus on the design of the site, that looked good on mobile and desktop. It is a little simple but I feel for a small-town's book club it does it's purpose.",
        problems: "Figuring out how to connect the Google Maps API tripped me up for a minute, as well as the chat box. But everything else outside that was pretty straight forward. ",
      },
      {
        title: "Zero-G Bar",
        cover: "../img/zerogbar-grey.jpg",
        cover_color: "../img/zerogbar.jpg",
        header: "../img/zerogbar-cover-full.jpg",
        link: "https://jtlovato.github.io/ZeroGBar/",
        overview: "A site for a galaxy-themed bar, simple but had just what you needed for a bar; drinks, menus, and live music. This site was me focusing more on mobile view ports, while also attempting to \"tone down\" how much I do in code. At this point I was still learning and found myself making the code much more complicated than it needed to be. This was a project I made during my time at Treehouse Bootcamp.",
        work: "Expanding my knowledge on Javascript, even just to apply it to simple sites. Used CSS to really make sure it looked good on several viewports, as well as experimenting with how .pngs would appear and how they could be used to create a dynamic design that isn't all blocks. Added simple (at the time very difficult) features such as a countdown for the grand opening of a second bar, a menu modal, and small reviews carousel.",
        learned: "Playing around with the simpler features of Javascript, as well as getting a better handle on CSS, and experimenting with the see-through .png filename.",
        howHappy: "Mostly yes. I feel it lacks the refinement of a site made by someone who has years of experience, but overall I am happy with it. The header looks great and the \"Ripped Space\" design creates an interesting background.",
        problems: "FIxing everything so it would look nice, regardless of viewport. Also nailing down some of the finer points of CSS positioning. ",
      },
      {
        title: "The Goalie Mask Project",
        cover: "../img/tgmp-grey.jpg",
        cover_color: "../img/tgmp.jpg",
        header: "../img/tgmp-cover-full.jpg",
        link: "https://jtlovato.github.io/GoalieMaskProject.com/",
        overview: "A bit of a pet project of mine. I wanted to showcase the history of goalie masks through hockey history, which would include each current teams goalie tandem's masks, an ability to search by team or player, as well as a blog and news from around the National Hockey League. This was a project I made during my time at Treehouse Bootcamp.",
        work: "One of my first completed sites. I wanted to show each mask in the NHL currently, as well as famous masks from NHL history. I made it so you could search by player or team. Whe you go into the team search, it pulls up a modal that shows both goalies from each team in a graphic slider, that transitions from each side to show off each goalie's mask. I also added a simple blog, news, and made it so the front page brings up a random mask, and a player of the day.",
        learned: "Still very much experimenting with Javascript, as well as getting CSS down. This was when I really learned what Javascript can do; when a user takes the slider on the modal and moves it back and forth, it exposes different parts of two pictures, creating a dynamic, engaging, and colorful product.",
        howHappy: "Looking back on it now, not very. I very much want to redo this in React and reallty make it shine. I was hesitant to show this one but I wanted to show off how far I've come. There are a several viewport issues plaguing the site, and it looks like it somehow has gotten worse with time. The design overall I'm pretty happy with, ice-white with pops of color, but I feel redoing this in React wouldn't take as long as it did in sinmple JS.",
        problems: "Just learning more Javascript and realizing how much testing is needed after, and how much planning is needed before, to really make one cohesive site that works well and flows better. This is a bit of a UX/UI learning experience.",
      },
      {
        title: "Cover",
        cover: "../img/cover-grey.jpg",
        cover_color: "../img/cover.jpg",
        header: "../img/cover-cover-full.jpg",
        link: "https://jtlovato.github.io/CoverApp/",
        overview: "I love covers of songs, it's an amazing of hearing some of your favorite songs in an entire different light. From \"Blue Eyes\" to \"Hurt\", I wanted to create a site that focuses specifically on covers, done with entirely new instruments, in entirely different genres. This was a project I made during my time at Treehouse Bootcamp.",
        work: "Still learning CSS and Javascript, I wanted to be able to have users have a profile, listen to and upload self-made covers of their favorite songs, complete with a little overlayed modal as a record player, not unlike Spotify. I also wanted them to find new music suggested for them, based off a random user generator API.",
        learned: "I was focusing on expanding my Javascript knowledge, including pulling from an outside API, which I used to create the \"New For You\" section. I also learned how to upload media and expanded my knowledge on fundamental CSS and HTML tags. I also challenged myself to see if I could create a Light Mode, that would change the darker colors into a brighter experience.",
        howHappy: "Right now, not very. My amateurishness was absolutely showing through, and I'd love to remake this one, but so users can actually upload their own music, as well as style it a lot better. I didn't realize how bare-bones it felt at the time. ",
        problems: "It's incredibly simple, and with almost no features. The positioning isn't great, and while I like the idea of the orange white and black color scheme, it didn't translate well here. The API also doesn't pull consistantly. I'd really like to remake this one soon.",
      },
      {
        title: "Honee",
        cover: "../img/honee-grey.jpg",
        cover_color: "../img/honee.jpg",
        header: "../img/honee-cover-full.jpg",
        link: "https://jtlovato.github.io/Honee/",
        overview: "I wanted to make a site that would help BiPOC. During 2020 I saw a lot of injustice happening, and a lot of people asking how they could help, before quickly giving up and moving on with their lives. I wanted to make a difference, even a small one, and create a site that helps BiPOC connect with one another and discuss the world, and the state of their physical and mental health.",
        work: "Still learning Javascript, I started small and eventually added too many pieces I hadn't planned for. I initially started with the simple hexagon on the left, that would record how many days in a row a person has tried to help their health. I eventually added a little community section on the right hand side that would bring people together. This was a project I made during my time at Treehouse Bootcamp.",
        learned: "I really was experimenting with SVGs and how they work, and unfortunately it did not produce the desired effect. I also was working on local storage memory so it could keep track of a user's history and how many days in a row they succeeded in taking care of themselves.",
        howHappy: "Not very. The positioning is off, on several viewports, animations are not great, and there are a ton of problems. I didn't plan it out at all and that was a learning experience. The good intent was there, but the execution was not.",
        problems: "I had several problems with this, mostly from learning CSS positioning, but I also didn't realize at the time I needed to check several viewports to see how a site does on them, as well as browsers. The actual Javascript seems fine, if not very simple, but the majority of the problems come from a lack of planning, and knowledge on positioning SVGs.",
      },              
  ]

  const [modalId, setModalId] = React.useState("");
  const handleClose = () => setModalId(""); 

  return (
    <Row className="coding-container">
    <div className="header">
      <h1>coding projects</h1>
    </div>
    {data.map((cod, i) => (
      <Col key={cod.title}>
        <Card className="code-card">
          <Card.Body>
            <Button 
              className="code-button" 
              type="button" 
              onClick={() => setModalId(`modal${i}`)}>
              <img className="code-img grey-image" alt={cod.title} src={cod.cover} />
              <img className="code-img color-image"alt={cod.title} src={cod.cover_color} />
            </Button>
            <Card.Title className="code-title" as="h4">{cod.title}</Card.Title>
          </Card.Body>
          <Modal
            size="xl"
            show={modalId === `modal${i}`}
            onHide={handleClose}
            aria-labelledby={`${cod.title}ModalLabel`}
            centered
          >
              <Modal.Body>
                 <div className="code-modal-container">
                   <h1 className="code-title">{cod.title}</h1>
                   <div className="header-image-hold">
                    <img src={cod.header} alt={cod.title} className="code-header" />
                    </div>
                    <div className="code-info-container">
                    <a href={cod.link} className="modal-btn" data-hover="LETS GOOOO!"><p>Take Me There</p></a>
                      <div className="code-desc code-info-card">
                        <h2>Overview...</h2>
                        {cod.overview}
                      </div>
                      <div className="code-info-card">
                        <h2>What I Did...</h2>
                        {cod.work}
                      </div> 
                      <div className="code-info-card">
                        <h2>What I Learned...</h2>
                        {cod.learned}
                      </div>  
                      <div className="code-info-card">
                        <h2>How Happy With It Am I...?</h2>
                        {cod.howHappy}
                      </div> 
                      <div className="code-info-card">
                        <h2>Any Problems Encountered...</h2>
                        {cod.problems}
                      </div>    
                    </div>
                 </div>
              </Modal.Body>
          </Modal>
        </Card>
      </Col>
    ))}
  </Row>
  
  );
}
