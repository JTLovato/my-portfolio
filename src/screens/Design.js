import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import data from "../data";

export default function Design() {

    const [modalId, setModalId] = React.useState("");
    const handleClose = () => setModalId(""); 

    return (
      <Row className="design-container">
      <div className="header">
        <h1>design projects</h1>
      </div>
      {data.design.map((des, i) => (
        <Col key={des.title}>
          <Card className="design-card">
            <Card.Body>
              <Button 
                className="design-button" 
                type="button" 
                onClick={() => setModalId(`modal${i}`)}>
                <img className="design-img grey-image" alt={des.title} src={des.cover} loading="lazy" />
                <img className="design-img color-image"alt={des.title} src={des.cover_color} loading="lazy" />
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
                          loading="lazy"
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
                          loading="lazy"
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
                          loading="lazy"
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
                          loading="lazy"
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

