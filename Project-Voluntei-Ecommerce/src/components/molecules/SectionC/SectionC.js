import React from 'react';
import { CardDeck } from 'react-bootstrap';
import { ProductCard } from '../index';
import './SectionC.css';

export default function SectionC({ products, addToCart }) {
  return (
    <div className="sectionC">
      <h3>Lançamentos</h3>
      <div className="sectionC-CardDeck-container">
        <CardDeck className="sectionC-CardDeck">
          {Object.keys(products).map((key, idx) => (
            <ProductCard product={products[key]} key={idx} addToCart={addToCart} />
          ))}
        </CardDeck>
      </div>
    </div>
  );
}
