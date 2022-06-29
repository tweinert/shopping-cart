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

    let isDuplicate = false;

    // check for duplicates
    const newCart = currentCart.map(obj => {
      if (obj.id === id) {
        isDuplicate = true;
        let newQty = obj.qty + qty;
        return {...obj, qty: newQty};
      }

      return obj
    });

    if (!isDuplicate) {
      setCurrentCart(oldCart => [...oldCart, product]);
    } else {
      setCurrentCart(newCart);
    }
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
