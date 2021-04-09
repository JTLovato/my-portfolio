import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import data from "../data";


export default function Coding() {

  const [modalId, setModalId] = React.useState("");
  const handleClose = () => setModalId(""); 

  return (
    <Row className="coding-container">
    <div className="header">
      <h1>coding projects</h1>
    </div>
    {data.code.map((cod, i) => (
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
                   <div className="modal-header">
                   <h1 className="code-title">{cod.title}</h1>
                   <button onClick={handleClose}>X</button>
                   </div>
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
