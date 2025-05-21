import ProductCard from './ProductCard'; // Make sure this component exists
import React, { useState } from 'react';

const data = [
  {
    id: 1,
    image: '/images/product1.jpg',
    name: 'Product1',
    price: 99.99,
  },
  {
    id: 2,
    image: '/images/product2.jpg',
    name: 'Product2',
    price: 149.99,
  },
  {
    id: 3,
    image: '/images/product3.jpg',
    name: 'Product3',
    price: 145.0,
  },
  {
    id: 4,
    image: '/images/product4.jpg',
    name: 'Product4',
    price: 59.95,
  },
  {
    id: 5,
    image: '/images/product1.jpg',
    name: 'Product5',
    price: 99.99,
  },
  {
    id: 6,
    image: '/images/product2.jpg',
    name: 'Product6',
    price: 149.99,
  },
  {
    id: 7,
    image: '/images/product3.jpg',
    name: 'Product7',
    price: 145.0,
  },
  {
    id: 8,
    image: '/images/product4.jpg',
    name: 'Product8',
    price: 59.95,
  },
];

const Products = () => {
  const [theme] = useState('light');

  return (
    <div className="relative container mx-auto px-20 py-16" >
      
      <div className="lg:flex justify-between items-center">
        <h3 className="font-medium text-2xl text-gray-900 dark:text-white">
          Products
        </h3>
      </div>
      
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-8 gap-5">
        {data.map((el) => (
          <ProductCard
            key={el.id}
            img={el.image}
            name={el.name}
            price={el.price}
            theme={theme} // Pass theme to ProductCard if needed
          />
        ))}
      </div>
    </div>
  );
};

export default Products;