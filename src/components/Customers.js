// src/components/Customers.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get('/customers')
      .then(response => {
        setCustomers(response.data);
      })
      .catch(error => {
        console.error('Error fetching customers: ', error);
      });
  }, []);

  return (
    <div>
      <h2>Customers:</h2>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>
            {customer.name} - {customer.email} - {customer.current_balance}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Customers;
