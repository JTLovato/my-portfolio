import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

export default function Design() {

    const data = [
        {
        title: "My Wordmark",
        cover: "../img/wordmark-grey.jpg",
        cover_color: "../img/wordmark-color.jpg",
        src1: "../img/wordmark-initial.jpg",
        src2: "../img/wordmark-testing.jpg",
        src3: "../img/wordmark-final.jpg",
        src4: "../img/wordmark-variations.jpg",
        slide1: "The Start",
        slide2: "Refining",
        slide3: "The Final",
        slide4: "Variations",
        info1: "A Few Sketches. I've Never Really Been Sure What I Like For My Own Personal Logo. I Wanted To Include My Initials.",
        info2: "Everytime I've Made A Personal Logo, I've Gotten Bored Of It, So I Wanted Something That I Would Be Happy With, And Be Classic.",
        info3: "A JTL Surrounded With A Roundel. Looks Great In Any Size, Black & White Or Color, And Really Showcases What I Can Do.",
        info4: "Seeing How The Logo Can Be Used In Different Mediums, And Styles. I'm Incredibly Happy With How It Turned Out.",
        },
        {
        title: "Michigan Machine",
        cover: "../img/machine-grey.jpg",
        cover_color: "../img/machine-color.jpg",
        src1: "../img/machine-final.jpg",
        src2: "../img/machine-promo.jpg",
        src3: "../img/machine-social.jpg",
        src4: "../img/machine-store.jpg",
        slide1: "The Logo",
        slide2: "Promos",
        slide3: "Social Media",
        slide4: "The Shop",
        info1: "A Logo Designed For The Automotive History Of Michigan. A Wrench Can Be Seen In The Negative Space.",
        info2: "A Promo Featuring The Captain Of The Machine, Showcasing The Night's Game Between Them And Another NHL Rival.",
        info3: "A Social Media Graphic Showcasing The Game Score For The Night. Can Be Templated And Re-used.",
        info4: "A Promotional Showing Off Machine Gear, As Well As Season Tickets, A High-Value Item For Hockey Teams, With Free Hat.",
        },
        {
        title: "Dazzling Data Merch",
        cover: "../img/eds-grey.jpg",
        cover_color: "../img/eds-color.jpg",
        src1: "../img/eds-1.jpg",
        src2: "../img/eds-2.jpg",
        src3: "../img/eds-3.jpg",
        src4: "../img/eds-final.jpg",
        slide1: "Styles 1 & 2",
        slide2: "Styles 3 & 4",
        slide3: "Styles 5 & 6",
        slide4: "Printed Merch",
        info1: "Collaboration With The Data Science Ethics Group fullyConnected, Which Aims To Make Sure AI Is Used Ethically.",
        info2: "Mostly Based Off Of Other Familiar Brands, i.e. Black Panther, SuperHot Video Game, D.R.E.A.M. And More.",
        info3: "These Were Done In Collaboration To Be Used For A Variety Of Products.",
        info4: "Some Of The Final Products. They Will Be Live And Ready For Sale Soon.",
        },
        {
            title: "Makeup Ad",
            cover: "../img/makeup-grey.jpg",
            cover_color: "../img/makeup-color.jpg",
            src1: "../img/makeup1.jpg",
            src2: "../img/makeup2.jpg",
            src3: "../img/makeup3.jpg",
            src4: "../img/makeup4.jpg",
            slide1: "SoSi Logo",
            slide2: "1st Ad",
            slide3: "2nd Ad",
            slide4: "Magazine Mockup",
            info1: "First The Logo; Simple, Classic, Elegant, But Different To Stand Out And Be Instantly Recognizable.",
            info2: "Ad Showcasing A New Product, Saturn, Associating Style With The Stars And Astrological Signs.",
            info3: "Ad Showcasing Jupiter, The Second In The SoSi Astrological Signs",
            info4: "WHat It Would Look Like If SoSi Took Out A Full Page Ad In A Magazine. Subtle, Yet Strong.",
            },
            {
              title: "Logos 1",
              cover: "../img/logos-grey.jpg",
              cover_color: "../img/logos-color.jpg",
              src1: "../img/logos1.jpg",
              src2: "../img/logos2.jpg",
              src3: "../img/logos3.jpg",
              src4: "../img/logos4.jpg",
              slide1: "Throttle Energy Drink",
              slide2: "Austin Water Co",
              slide3: "Cover Music App",
              slide4: "Neversquare Bank",
              info1: "An Energy Drink That Prompts One To Fuel Their Life, Complete With Package Designs. ",
              info2: "A Logo For THe City Of Austin's Water Company. Simple, Yet Classy.",
              info3: "A Logo For An App Where Users Upload Covers Of Well Known Songs, a la Johnny Cash's Hurt.",
              info4: "A Logo For A Bank's Local Payment App.",
              },
              {
                title: "Logos 2",
                cover: "../img/logos2-grey.jpg",
                cover_color: "../img/logos2-color.jpg",
                src1: "../img/logos5.jpg",
                src2: "../img/logos6.jpg",
                src3: "../img/logos7.jpg",
                src4: "../img/logos8.jpg",
                slide1: "Regale Co",
                slide2: "Express Texting App",
                slide3: "Ego Company",
                slide4: "Broken Carousel",
                info1: "A Simple, Elegant Logo For A Black Woman-Run Company.",
                info2: "An Anonymous Texting App Where Users Can Express Themselves",
                info3: "A Corperate Logo Based In Identity Metrics.",
                info4: "An Illustration Of A Carousel Horse Breaking Free. Meant To Inspire And Show Breaking The Chains.",
                },
                {
                  title: "Logos 3",
                  cover: "../img/logos3-grey.jpg",
                  cover_color: "../img/logos3-color.jpg",
                  src1: "../img/logos9.jpg",
                  src2: "../img/logos10.jpg",
                  src3: "../img/logos11.jpg",
                  src4: "../img/logos12.jpg",
                  slide1: "Washington Freedom Hockey",
                  slide2: "Houston Apollos Minor League",
                  slide3: "Apollos Launch Pad Shop",
                  slide4: "West Kings Customs",
                  info1: "A Minor League Hockey Team Based In Washington D.C. Based Off The Colors Of The USA Flag.",
                  info2: "An AA Minor League Baseball Team. Wanted To Experiment With A Unique Color",
                  info3: "The Launchpad, A Splash Graphic For The Apollos Team Shop. Experimenting To See If Colors Could Work.",
                  info4: "A Custom Car Painting Group Based In California, a la West Coast Customs.",
                  },
                  {
                    title: "Logos 4",
                    cover: "../img/logos4-grey.jpg",
                    cover_color: "../img/logos4-color.jpg",
                    src1: "../img/logos13.jpg",
                    src2: "../img/logos14.jpg",
                    src3: "../img/logos15.jpg",
                    src4: "../img/logos16.jpg",
                    slide1: "Steel | Line",
                    slide2: "Grand Rapids Logo",
                    slide3: "Carolina Hurricanes Logo Rework",
                    slide4: "Hidden Forest Wine",
                    info1: "A Logo For An E-Commerce Store That Specializes In Pittsburgh Sports.",
                    info2: "A Wordmark For A Grand Rapids Sports Team.",
                    info3: "A Reworking Of The Carolina Hurricane's Logo Of The National Hockey League.",
                    info4: "A Wine Brand, With The Backstory Of A Vineyard Being Discovered In The Forest. ",
                    },
            {
            title: "Exercise Graphics",
            cover: "../img/exercise-grey.jpg",
            cover_color: "../img/exercise-color.jpg",
            src1: "../img/exercise1.jpg",
            src2: "../img/exercise2.jpg",
            src3: "../img/exercise3.jpg",
            src4: "../img/exercise4.jpg",
            slide1: "No More Excuses",
            slide2: "Sunset Run",
            slide3: "Going Going Gone",
            slide4: "Light Catch Burn",
            info1: "A Set Of Graphics Designed For K&S FITS, An Exercise Apparel Company.",
            info2: "A Set Of Graphics Designed For K&S FITS, An Exercise Apparel Company.",
            info3: "A Set Of Graphics Designed For K&S FITS, An Exercise Apparel Company.",
            info4: "A Set Of Graphics Designed For K&S FITS, An Exercise Apparel Company.",
            },
            {
              title: "Illustrations",
              cover: "../img/illust-grey.jpg",
              cover_color: "../img/illust-color.jpg",
              src1: "../img/illust1.jpg",
              src2: "../img/illust2.jpg",
              src3: "../img/illust3.jpg",
              src4: "../img/illust4.jpg",
              slide1: "Let The Pain Build You, Teach You",
              slide2: "O To Dance In The Light Of Things Long Dead",
              slide3: "The ABCs Of The NHL",
              slide4: "Black And Yellow",
              info1: "An Animal Skull In A Roundel With A Nihilistic Phrase, Done In A Yellow Cloud.",
              info2: "Two Silhouettes Dancing In The Lights Of Stars.",
              info3: "A Children's Style Collection Featuring The National Hockey League, Two Of A Larger Set.",
              info4: "Illustrated Designs Of Pittsburgh's Greatest Sports Heroes, Sidney Crosby, Roberto Clemente, And Troy Palumalu.",
              },
            {
              title: "Trading Cards",
              cover: "../img/cards-grey.jpg",
              cover_color: "../img/cards-color.jpg",
              src1: "../img/cards1.jpg",
              src2: "../img/cards2.jpg",
              src3: "../img/cards3.jpg",
              src4: "../img/cards4.jpg",
              slide1: "Grungy, but clean",
              slide2: "Clean Photography",
              slide3: "Striking And Bold",
              slide4: "Colorful, but Bright.",
              info1: "An Autograph Card Featuring Henrik Zetterberg, And Three Previous Captains Who Won The Stanley Cup.",
              info2: "A Metallic See-Through Autograph of Joe Sakic, And A Base Card Focusing On Photography.",
              info3: "A Colorful Autograph Focusing On Retro Players, And A Bold Black And White Themed Autograph.",
              info4: "A Set Of Autographs Featuring Key Players Of The National Women's Hockey League.",
              },
            {
            title: "Phone Wallpapers",
            cover: "../img/wallpaper-grey.jpg",
            cover_color: "../img/wallpaper-color.jpg",
            src1: "../img/wallpaper1.jpg",
            src2: "../img/wallpaper2.jpg",
            src3: "../img/wallpaper3.jpg",
            src4: "../img/wallpaper4.jpg",
            slide1: "NWHL 2021 Isobel Cup",
            slide2: "Marc-Andre Fleury Vegas",
            slide3: "Alex Ovechkin Washington",
            slide4: "Cale Makar Colorado Character Select",
            info1: "Four Wallpapers Based On The Original 4 Teams In The National Women's Hockey League.",
            info2: "Stylized Illustration Of Vegas Golden Knights Goaltender Marc-Andre Fleury.",
            info3: "Blue And Red Graphics Featuring Washington Capitals Captain Alexander Ovechkin.",
            info4: "Defenseman Cale Makar Of The Colorado Avalanche In The Style Of The TMNT Character Select Screen.",
            },
    ]

    const [modalId, setModalId] = React.useState("");
    const handleClose = () => setModalId(""); 

    return (
      <Row className="design-container">
      <div className="header">
        <h1>design projects</h1>
      </div>
      {data.map((des, i) => (
        <Col key={des.title}>
          <Card className="design-card">
            <Card.Body>
              <Button 
                className="design-button" 
                type="button" 
                onClick={() => setModalId(`modal${i}`)}>
                <img className="design-img grey-image" alt={des.title} src={des.cover} />
                <img className="design-img color-image"alt={des.title} src={des.cover_color} />
              </Button>
              <Card.Title className="design-title" as="h4">{des.title}</Card.Title>
            </Card.Body>
            <Modal
              size="xl"
              show={modalId === `modal${i}`}
              onHide={handleClose}
              aria-labelledby={`${des.title}ModalLabel`}
              centered
            >
                <Modal.Body>
                    <Carousel id="carousel">
                        <Carousel.Item>
                          <img
                          className="d-block w-100"
                          src={des.src1}
                          alt="First slide"
                          />
                          <Carousel.Caption>
                            <h3>{des.slide1}</h3>
                            <p>{des.info1}</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                          className="d-block w-100"
                          src={des.src2}
                          alt="Second slide"
                          />
                          <Carousel.Caption>
                            <h3>{des.slide2}</h3>
                            <p>{des.info2}</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                          className="d-block w-100"
                          src={des.src3}                               
                          alt="Third slide"
                          />
                          <Carousel.Caption>
                            <h3>{des.slide3}</h3>
                            <p>{des.info3}</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img
                          className="d-block w-100"
                          src={des.src4}
                          alt="Fourth slide"
                          />
                          <Carousel.Caption>
                            <h3>{des.slide4}</h3>
                            <p>{des.info4}</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Modal.Body>
            </Modal>
          </Card>
        </Col>
      ))}
    </Row>
    
    );

}

