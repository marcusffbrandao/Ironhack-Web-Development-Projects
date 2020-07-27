import React from 'react';
import {
  SectionA,
  SectionB,
  SectionC,
  SectionD,
} from '../../molecules';
import './Home.css';

export default function Home({ products, addToCart }) {
  return (
    <>
      <SectionA />
      <SectionB product={products.tshirt} />
      <SectionC products={products} addToCart={addToCart} />
      <SectionD />
    </>
  );
}
