import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default ({ product, addToCart }) => {
  return (
    <Card className="sectionC-cards shadow p-3 mb-5 bg-white rounded">
      <Link to={'/product/' + product.id}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body className="sectionC-card-body">
          <Card.Title className="sectionC-card-title">
            {product.name}
          </Card.Title>
          <p>{product.description}</p>
          <p className="sectionC-card-price">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </p>
        </Card.Body>
      </Link>
      {product.status ? (
        <Button
          className="sectionC-card-button col"
          variant="dark"
          onClick={() => addToCart(product)}
        >
          Adicionar ao carrinho
        </Button>
      ) : (
        <Button disabled className="col">
          Produto indisponível
        </Button>
      )}
    </Card>
  );
};
