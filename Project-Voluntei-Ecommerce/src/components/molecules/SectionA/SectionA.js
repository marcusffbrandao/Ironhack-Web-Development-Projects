import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import './SectionA.css';

export default function SectionA() {
  return (
    <div className="sectionA">
      <CardDeck className="sectionA-cardDeck">
        <Card className="cardA-left">
          <Card.Body className="cardA-left-body">
            <div className="cardA-left-text">
              <h1>Bem vindo à loja Voluntei!</h1>
              <p>Conheça nossos produtos.</p>
            </div>
          </Card.Body>
        </Card>
        <Card className="cardA-right">
          <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/voluntei.appspot.com/o/brand%2FbeeYellow.jpg?alt=media&token=df4d5e97-786e-42eb-8cc3-7a231753bfee" />
        </Card>
      </CardDeck>
    </div>
  );
}
