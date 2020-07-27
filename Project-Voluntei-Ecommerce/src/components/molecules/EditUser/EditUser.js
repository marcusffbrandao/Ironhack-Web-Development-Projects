import React, { useState, useEffect } from 'react';
import { Form, Button, Col, Modal } from 'react-bootstrap';
import firebase from '../../../firebase/FirebaseConnection';
import './EditUser.css';

const db = firebase.firestore();

export default function EditUser({ userID, confirmRegistration }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState({
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    zip: '',
  });
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    if (userID) {
      db.collection('users')
        .doc(userID)
        .get()
        .then((doc) => {
          if (doc.exists) {
            const data = doc.data();
            setEmail(data.email);
            if (data.name) setName(data.name);
            if (data.phone) setPhone(data.phone);
            if (data.address) setAddress(data.address);
          }
        });
    }
  }, []);

  const editProfile = async (e) => {
    e.preventDefault();

    try {
      await db
        .collection('users')
        .doc(userID)
        .set({
          name,
          email,
          address,
          phone,
        });

      const currUser = await firebase.auth().currentUser;

      currUser.updateProfile({
        displayName: name,
      });

      currUser.updateEmail(email);

      confirmRegistration();
      handleShow();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar cadastro</Modal.Title>
        </Modal.Header>
        <Modal.Body>Seu cadastro foi atualizado com sucesso.</Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
      <Form onSubmit={(e) => editProfile(e)}>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} md="8" controlId="formBasicPassword">
            <Form.Label>Endereço de e-mail</Form.Label>
            <Form.Control
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="formBasicPassword">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="9" controlId="formBasicPassword">
            <Form.Label>Rua</Form.Label>
            <Form.Control
              type="text"
              value={address.street}
              onChange={(e) => setAddress({ ...address, street: e.target.value })}
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="formBasicPassword">
            <Form.Label>Número</Form.Label>
            <Form.Control
              type="text"
              value={address.number}
              onChange={(e) => setAddress({ ...address, number: e.target.value })}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="formBasicPassword">
            <Form.Label>Complemento</Form.Label>
            <Form.Control
              type="text"
              value={address.complement}
              onChange={(e) =>
                setAddress({ ...address, complement: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="formBasicPassword">
            <Form.Label>Bairro</Form.Label>
            <Form.Control
              type="text"
              value={address.neighborhood}
              onChange={(e) =>
                setAddress({ ...address, neighborhood: e.target.value })
              }
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="7" controlId="formGridCity">
            <Form.Label>Cidade</Form.Label>
            <Form.Control
              type="text"
              value={address.city}
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
            />
          </Form.Group>
          <Form.Group as={Col} md="5" controlId="formGridState">
            <Form.Label>Estado</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setAddress({ ...address, state: e.target.value })}
            >
              <option>{address.state}</option>
              <option disabled value>
                -- Selecione um Estado --
              </option>
              <option>Acre (AC) </option>
              <option>Alagoas (AL)</option>
              <option>Amapá (AP)</option>
              <option>Amazonas (AM)</option>
              <option>Bahia (BA)</option>
              <option>Ceará (CE)</option>
              <option>Distrito Federal (DF)</option>
              <option>Espírito Santo (ES)</option>
              <option>Goiás (GO)</option>
              <option>Maranhão (MA)</option>
              <option>Mato Grosso (MT)</option>
              <option>Mato Grosso do Sul (MS)</option>
              <option>Minas Gerais (MG)</option>
              <option>Pará (PA)</option>
              <option>Paraíba (PB)</option>
              <option>Paraná (PR)</option>
              <option>Pernambuco (PE)</option>
              <option>Piauí (PI)</option>
              <option>Rio de Janeiro (RJ)</option>
              <option>Rio Grande do Norte (RN)</option>
              <option>Rio Grande do Sul (RS)</option>
              <option>Rondônia (RO)</option>
              <option>Roraima (RR)</option>
              <option>Santa Catarina (SC)</option>
              <option>São Paulo (SP)</option>
              <option>Sergipe (SE)</option>
              <option>Tocantins (TO)</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row className="edit-user-button-save-container">
          <Form.Group as={Col} md="4" controlId="formGridZip">
            <Form.Label>CEP</Form.Label>
            <Form.Control
              type="text"
              value={address.zip}
              onChange={(e) => setAddress({ ...address, zip: e.target.value })}
            />
          </Form.Group>
          <Form.Group as={Col} md="7" controlId="formGridZip">
            <Button type="submit" className="edit-user-button-save" variant="dark">
              Confirmar cadastro
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </>
  );
}
