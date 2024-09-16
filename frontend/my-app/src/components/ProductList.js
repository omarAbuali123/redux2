import React from 'react';
import { useSelector } from 'react-redux';

const ProductList = () => {
  const products = useSelector((state) => state.productReducer.products);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold">Products</h2>
      <ul className="mt-4">
        {products.map(product => (
          <li key={product.id} className="border p-2 mb-2">
            <h4 className="font-bold">{product.name}</h4>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
