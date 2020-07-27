import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <CardDeck>
          <Card className="footer-card">
            <Card.Body className="footer-card-body">
              <Card.Title className="footer-card-title">Fale conosco</Card.Title>
              <ul className="list-unstyled">
                <li>
                  <a className="footer-links" href="/">
                    Acompanhe seu pedido
                  </a>
                </li>
                <li>
                  <a className="footer-links" href="/">
                    Trocas e devoluções
                  </a>
                </li>
                <li>Televendas: (11) 91234-5678</li>
                <li>WhatsApp: (11) 91234-5678</li>
                <li>
                  <a className="footer-links" href="/">
                    Enviar e-mail
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Card>
          <Card className="footer-card">
            <Card.Body className="footer-card-body">
              <Card.Title className="footer-card-title">
                Ajuda e suporte
              </Card.Title>
              <ul className="list-unstyled">
                <li>
                  <a className="footer-links" href="/">
                    Política de troca e devolução
                  </a>
                </li>
                <li>
                  <a className="footer-links" href="/">
                    Política de privacidade
                  </a>
                </li>
                <li>
                  <a className="footer-links" href="/">
                    Perguntas frequentes
                  </a>
                </li>
                <li>
                  <a className="footer-links" href="/">
                    Termos e condições
                  </a>
                </li>
                <li>
                  <a className="footer-links" href="/">
                    Fornecedores
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Card>
          <Card className="footer-card">
            <Card.Body className="footer-card-body">
              <Card.Title className="footer-card-title">
                Sobre a Voluntei
              </Card.Title>
              <ul className="list-unstyled">
                <li>
                  <a className="footer-links" href="/">
                    Quem somos
                  </a>
                </li>
                <li>
                  <a className="footer-links" href="/">
                    Junte-se a nós
                  </a>
                </li>
              </ul>
              <Card.Title className="footer-card-title">Siga-nos</Card.Title>
              <ul className="list-unstyled footer-social-media-list">
                <li>
                  <a href="https://www.facebook.com/voluntei">
                    <img
                      className="footer-social-media"
                      src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2FiconFacebook.png?alt=media&token=95fcf770-8237-4446-ab07-4c14eebe2cfb" alt="facebook"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/voluntei">
                    <img
                      className="instagram"
                      src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2FinstagramIcon.png?alt=media&token=522cae5c-5e21-46cf-8c73-a485274f1e8e" alt="instagram"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/voluntei">
                    <img
                      className="footer-social-media"
                      src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2FiconLinkedin.png?alt=media&token=b8363fd0-879b-431e-940f-4c3f7178b967" alt="linkedin"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/voluntei">
                    <img
                      className="footer-social-media"
                      src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2FiconTwitter.png?alt=media&token=46628d86-dce4-4821-a8ed-ab178ed429aa" alt="twitter"
                    />
                  </a>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
      <div className="footer-payments-container">
        <ul className="list-unstyled footer-credit-cards-list">
          <li>
            <img
              className="footer-credit-cards"
              src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2FcreditElo.jpg?alt=media&token=0d390161-b63f-4139-8a78-43db1c41b565" alt="elo"
            />
          </li>
          <li>
            <img
              className="footer-credit-cards"
              src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2FcreditVisa.jpg?alt=media&token=d12332e2-71ef-411e-9ebe-8fc2a640f6d7" alt="visa"
            />
          </li>
          <li>
            <img
              className="footer-credit-cards"
              src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2FcreditMastercard.jpg?alt=media&token=23fb572c-0422-4f05-8a22-e1a5c4ea5c2f" alt="master"
            />
          </li>
          <li>
            <img
              className="footer-credit-cards"
              src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2FcreditHipercard.jpg?alt=media&token=487be581-d544-4a0b-8b59-be6ca9a462a1" alt="hiper"
            />
          </li>
          <li>
            <img
              className="footer-credit-cards"
              src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2FcreditAmex.jpg?alt=media&token=53d037f2-7a03-4daa-a3fc-04371df55fee" alt="amex"
            />
          </li>
          <li>
            <img
              className="footer-credit-cards"
              src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2FcreditPayPal.jpg?alt=media&token=1ddcea54-633a-4b04-94e3-eb029320e88c" alt="paypal"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
