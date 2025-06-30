import React, { useState } from 'react';
import './BuyPage.css';

function BuyPage() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    paymentMethod: 'cod',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your order, ${formData.name}!`);
    // Optionally send data to backend here
  };

  return (
    <div className="buy-container">
      <h2>Buy Now</h2>
      <form className="buy-form" onSubmit={handleSubmit}>
        <label>Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>Phone Number:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>

        <label>Address:
          <textarea name="address" value={formData.address} onChange={handleChange} required />
        </label>

        <label>Landmark:
          <textarea name="landmark" value={formData.landmark} onChange={handleChange} required />
        </label>

        
        <label>Payment Method:
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
            <option value="cod">Cash on Delivery</option>
            <option value="upi">UPI</option>
            <option value="card">Credit/Debit Card</option>
          </select>
        </label>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default BuyPage;
