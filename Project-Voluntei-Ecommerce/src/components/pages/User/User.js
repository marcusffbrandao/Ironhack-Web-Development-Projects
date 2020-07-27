import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import firebase from '../../../firebase/FirebaseConnection';
import { EditUser } from '../../molecules';
import './User.css';

export default function User({ userID, logoutUser, confirmRegistration }) {
  const deleteProfile = async () => {
    try {
      await firebase.auth().currentUser.delete();
      logoutUser();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="user-page">
      <div className="user-card-container">
        <Card className="user-card shadow-sm">
          <Card.Body>
            <h3 className="user-title">Conclua seu cadastro</h3>
            <p className="user-instructions">
              Por favor, preencha os campos abaixo para garantir que seus dados
              estejam atualizados.
            </p>
            <EditUser userID={userID} confirmRegistration={confirmRegistration} />
            <hr />
            <div className="user-title-container">
              <h4 className="">Excluir conta</h4>
            </div>

            <Form.Label>
              Ao excluir sua conta, você não será mais um membro da loja
              Voluntei.
            </Form.Label>
            <Button
              className="user-button-delete"
              variant="dark"
              onClick={() => deleteProfile()}
            >
              Excluir conta
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
