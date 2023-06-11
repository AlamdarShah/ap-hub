import React, { useState } from 'react';
import "./Product.css";
import db from "../db";
import Cart from './Cart';

export default function Spices() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  return (
    <div>
      <h1>Spices</h1>
      <div className="container d-flex align-items-center justify-content-center position-relative flex-wrap">
        {db.map((item) => (
          <div className="card d-flex position-relative flex-column" key={item.id}>
            <div className="imgContainer">
              <img src={item.img} alt="Product" />
            </div>
            <div className="content">
              <h4>{item.title}</h4>
              <hr />
              <p className="textAlign">
                <b>Weight:</b> <span className="text-muted">{item.weight1}</span>
              </p>
              {item.weight2 && item.weight2 !== "" && (
                <p className="textAlign">
                  <b>Weight:</b> <span className="text-muted">{item.weight2}</span>
                </p>
              )}
              <hr />
              <p className="textAlign">
                <b>Price:</b> <span className="text-muted">{item.price}</span>
              </p>
              <hr />
              <button
                type="button"
                className="btn btn-success btn-md"
                onClick={() => addToCart(item)}
              >
                <b>Add to Cart</b>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* <Cart cartItems={cartItems || []} /> */}
    </div>
  );
}
