import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useLastLocation } from 'react-router-last-location';
import { Card, Form, Button } from 'react-bootstrap';
import firebase from '../../../firebase/FirebaseConnection';
import './Auth.css';

firebase.auth().languageCode = 'pt';
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const faceProvider = new firebase.auth.FacebookAuthProvider();

export default function Auth({ authUser, logoutUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('Entre ou cadastre-se');

  const [user, setUser] = useState(null);
  const lastLocation = useLastLocation();

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      setStatus('Usuário logado');
      setUser(user);
      setEmail('');
      setPassword('');
      localStorage.setItem('userID', JSON.stringify({ userID: user.uid }));
      authUser(user.uid);
    }
  });

  if (user) {
    if (lastLocation) return <Redirect to={lastLocation.pathname} />;
  }

  const signup = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        setStatus('Usuário cadastrado com sucesso.');
        db.collection('users')
          .doc(result.user.uid)
          .set({ email });
      })
      .catch((error) => {
        if (error.code === 'auth/invalid-email') setStatus('Endereço de e-mail inválido.');
        if (error.code === 'auth/weak-password') setStatus('Crie uma senha mais forte');
        console.log(error.message);
      });
  };

  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setStatus('Usuário logado com sucesso.');
      })
      .catch((error) => {
        if (error.code === 'auth/wrong-password') setStatus('Senha incorreta');
        console.log(error.message);
      });
  };

  const logout = () => {
    setStatus('Usuário deslogado com sucesso');
    setUser(null);
    setEmail('');
    setPassword('');
    logoutUser();
  };

  const socialLogin = (provider) => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { uid, email, displayName, photoURL } = result.user;
        setStatus('Usuário cadastrado com sucesso.');
        db.collection('users')
          .doc(uid)
          .set({
            email,
            name: displayName,
            photoURL,
          });
      })
      .catch((error) => {
        setStatus(error.message);
      });
  };

  return (
    <div className="authentication-page">
      <div className="authentication-container">
        <Card className="authentication-card shadow-sm">
          <Card.Body>
            <h3 className="authentication-status">{status}</h3>
            <p className="authentication-labels">Preencha os campos abaixo.</p>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Endereço de e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            {user ? (
              <Button
                className="authentication-buttons"
                variant="dark"
                onClick={logout}
              >
                Sair
              </Button>
            ) : (
              <div>
                <p className="authentication-labels">Já é cliente?</p>

                <Button
                  className="authentication-buttons"
                  variant="dark"
                  onClick={login}
                >
                  Entrar
                </Button>

                <p className="authentication-labels">Deseja criar uma conta?</p>

                <Button
                  className="authentication-buttons"
                  variant="dark"
                  onClick={signup}
                >
                  Cadastrar
                </Button>
                <hr></hr>
                <p className="authentication-labels">
                  Se preferir, acesse a sua conta por meio dos seguintes canais:
                </p>
                <Button
                  className="authentication-google shadow-sm"
                  onClick={() => socialLogin(googleProvider)}
                >
                  <div className="authentication-google-container">
                    <img src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2Fgoogle.png?alt=media&token=f15eb53b-9a5a-45b1-bbdd-fd0d10fd675c" alt="Google" />
                    <div className="authentication-google-container-right">
                      <p>Entrar com o Google</p>
                    </div>
                  </div>
                </Button>
                {/* <hr></hr> */}
                <Button
                  className="authentication-facebook shadow-sm"
                  onClick={() => socialLogin(faceProvider)}
                >
                  <div className="authentication-facebook-container">
                    <img src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2Ffacebook-2-128.png?alt=media&token=7c77ea91-7de0-4d6c-a6f3-6f15406df53d" alt="Facebook" />
                    <div className="authentication-facebook-container-right">
                      <p>Entrar com o Facebook</p>
                    </div>
                  </div>
                </Button>
              </div>
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
