import { React, useState } from "react";
import "./Shop.css";
import Cart from "./Cart";
import ShopItem from "./ShopItem";
import products from "../products";

function Shop() {
  const [currentCart, setCurrentCart] = useState({});

  return (
    <div className="shop">
      <div className="header">
        <h1>Shop</h1>
      </div>
      <Cart />
      <div className="item-container">
        {products.map((product) => <ShopItem key={product.id} {...product} />)}
      </div>
    </div>
  );
}

export default Shop;
