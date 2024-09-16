import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold">Admin Dashboard</h2>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Products</h3>
        <ul>
          {products.map(product => (
            <li key={product.id} className="border p-2 mb-2">
              <h4 className="font-bold">{product.name}</h4>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
