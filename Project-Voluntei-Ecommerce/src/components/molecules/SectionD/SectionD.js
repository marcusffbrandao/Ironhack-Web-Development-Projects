import React, { useState } from 'react';
import {
  Card,
  CardDeck,
  FormControl,
  InputGroup,
  Button,
  Modal,
} from 'react-bootstrap';
import './SectionD.css';
import firebase from '../../../firebase/FirebaseConnection';

const db = firebase.firestore();

export default function SectionD() {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const newsletter = async () => {
    await db.collection('newsletter').add({
      email,
    });
    setEmail('');
    handleShow();
  };

  return (
    <div className="sectionD">
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inscrição na newsletter</Modal.Title>
        </Modal.Header>
        <Modal.Body>E-mail cadastrado com sucesso.</Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
      <CardDeck className="sectionD-CardDeck">
        <Card className="sectionD-cards">
          <Card.Body className="sectionD-cards-body">
            <Card.Title className="sectionD-card-title">
              <h4>
                Cadastre-se para receber notícias e lançamentos de novos produtos.
              </h4>
            </Card.Title >
          </Card.Body>
        </Card>
        <Card className="sectionD-cards">
          <Card.Body className="sectionD-cards-body">
            <InputGroup className="mb-3">
              <FormControl
                className="sectionD-input"
                placeholder="E-mail"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <InputGroup.Append>
                <Button className="sectionD-button" variant="outline-secondary" onClick={newsletter}>
                  Cadastrar
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
}
