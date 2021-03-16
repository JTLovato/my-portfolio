import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function Design() {

    const data = [
     
            {
            title: "Phone Wallpapers",
           
            },
    ]

    const [modalId, setModalId] = React.useState("");
    const handleClose = () => setModalId(""); 

    return (
      <Row className="design-container">
      <div className="header">
        <h1>My Blog</h1>
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
                 
                </Modal.Body>
            </Modal>
          </Card>
        </Col>
      ))}
    </Row>
    
    );

}

