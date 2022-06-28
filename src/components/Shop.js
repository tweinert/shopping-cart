import { React, useState } from "react";
import "./Shop.css";
import Cart from "./Cart";
import ShopItem from "./ShopItem";
import products from "../products";

function Shop() {
  const [currentCart, setCurrentCart] = useState([]);

  function handleAddItem(id, qty) {
    console.log(id + " " + qty);
    // add product object to currentCart using id
    let product = products.find(product => product.id === id);
    product.qty = qty;
    setCurrentCart(oldCart => [...oldCart, product]);
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
