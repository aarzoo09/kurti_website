// src/components/ShowcasePage.js
import React from 'react';
import './ShowcasePage.css';
import { Link } from 'react-router-dom';



import floral_kurti from 'C:/Users/HP/OneDrive/Desktop/aarzoo/src/assests/images/floral_kurti.png';
import anarkali_kurti from 'C:/Users/HP/OneDrive/Desktop/aarzoo/src/assests/images/anarkali_kurti.png';
import casual_kurti from 'C:/Users/HP/OneDrive/Desktop/aarzoo/src/assests/images/casual_kurti.png';
import chikankari_kurti from 'C:/Users/HP/OneDrive/Desktop/aarzoo/src/assests/images/chikankari_kurti.png';
import cotton_kurti from 'C:/Users/HP/OneDrive/Desktop/aarzoo/src/assests/images/cotton_kurti.png';
import designer_kurti from 'C:/Users/HP/OneDrive/Desktop/aarzoo/src/assests/images/designer_kurti.png';
import ethnic_kurti from 'C:/Users/HP/OneDrive/Desktop/aarzoo/src/assests/images/ethnic_kurti.png';
import printed_kurti from 'C:/Users/HP/OneDrive/Desktop/aarzoo/src/assests/images/printed_kurti.png';
import short_sleeve_kurti from 'C:/Users/HP/OneDrive/Desktop/aarzoo/src/assests/images/short_sleeve_kurti.png';
import silk_kurti from 'C:/Users/HP/OneDrive/Desktop/aarzoo/src/assests/images/silk_kurti.png';




const products = [
  {
    id: 1,
    name: "Floral Kurti",
    price: 699,
    image: floral_kurti
  },
  {
    id: 2,
    name: "Cotton Kurti",
    price: 799,
    image: cotton_kurti
  },
  {
    id: 3,
    name: "Designer Kurti",
    price: 999,
    image: designer_kurti
  },
  {
    id: 4,
    name: "Printed Kurti",
    price: 649,
    image: printed_kurti
  },
  {
    id: 5,
    name: "Short Sleeve Kurti",
    price: 749,
    image: short_sleeve_kurti
  },
  {
    id: 6,
    name: "Chikankari Kurti",
    price: 899,
    image: chikankari_kurti
  },
  {
    id: 7,
    name: "Anarkali Kurti",
    price: 1099,
    image: anarkali_kurti
  },
  {
    id: 8,
    name: "Silk Kurti",
    price: 1299,
    image: silk_kurti
  },
  {
    id: 9,
    name: "Casual Kurti",
    price: 599,
    image: casual_kurti
  },
  {
    id: 10,
    name: "Ethnic Kurti",
    price: 899,
    image: ethnic_kurti
  }
];


function ShowcasePage() {
  return (
    <div className="showcase-container">
      <h2>AARZOO ATELIER</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <Link to="/buy"><button>Buy Now</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowcasePage;
