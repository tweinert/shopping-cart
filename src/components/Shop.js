import { React, useState } from "react";
import "./Shop.css";
import Cart from "./Cart";
import ShopItem from "./ShopItem";
import products from "../products";

function Shop() {
  const [currentCart, setCurrentCart] = useState([]);

  function handleAddItem(id, qty) {
    let ref = products.find(product => product.id === id);
    let product = JSON.parse(JSON.stringify(ref));
    product.qty = qty;
    setCurrentCart(oldCart => [...oldCart, product]);
    // if item already in cart, add to it
    
  }

  return (
    <div className="shop">
      <div className="header">
        <h1>Shop</h1>
      </div>
      <Cart cartItems={currentCart} />
      <div className="item-container">
        {products.map((product) => <ShopItem key={product.id} {...product} handleAddItem={handleAddItem} />)}
      </div>
    </div>
  );
}

export default Shop;
