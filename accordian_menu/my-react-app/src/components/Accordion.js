import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './Accordion.css';

const products = [
  {
    id: 1,
    image: '/img/food1.jpg',
    name: 'Product_1',
    price: 230,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusamus autem totam ut expedita! Incidunt.',
  },
  {
    id: 2,
    image: '/img/food2.jpg',
    name: 'Product_2',
    price: 410,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis.',
  },
  {
    id: 3,
    image: '/img/food3.jpg',
    name: 'Product_3',
    price: 32,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusamus autem.',
  },
  {
    id: 4,
    image: '/img/food4.jpg',
    name: 'Product_4',
    price: 75,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusamus.',
  },
];

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div 
        className={`accordion-header ${isOpen ? 'open' : ''}`} 
        onClick={toggleAccordion}
      >
        <h2>Digital products</h2>
        <span className="accordion-icon">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className="product-list-container">
          <div className="product-list">
            {products.map(product => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                description={product.description}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
