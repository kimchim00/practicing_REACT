// src/Accordion.js
import React, { useState } from 'react';
import styled from 'styled-components';

const AccordionSection = styled.div`
  background: #fff;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const AccordionTitle = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f1f1f1;
  padding: 10px;
  font-weight: bold;
`;

const AccordionContent = styled.div`
  max-height: ${props => (props.isOpen ? '100%' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: #fff;
`;

const ProductCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 10px;
  padding: 10px;
  text-align: center;
  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }
  h3 {
    margin: 10px 0;
  }
  p {
    color: #555;
  }
  span {
    color: #e67e22;
    font-weight: bold;
  }
`;

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '230$',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    image: '/path/to/image1.png',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '410$',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    image: '/path/to/image2.png',
  },
  {
    id: 3,
    name: 'Product 3',
    price: '32$',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    image: '/path/to/image3.png',
  },
  {
    id: 4,
    name: 'Product 4',
    price: '75$',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    image: '/path/to/image4.png',
  },
];

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionSection>
      <AccordionTitle onClick={toggleAccordion}>
        <span>Digital products</span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </AccordionTitle>
      <AccordionContent isOpen={isOpen}>
        {products.map(product => (
          <ProductCard key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>{product.price}</span>
          </ProductCard>
        ))}
      </AccordionContent>
    </AccordionSection>
  );
};

export default Accordion;
