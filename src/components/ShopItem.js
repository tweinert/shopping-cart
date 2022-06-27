import React from "react";

function ShopItem(props) {
  return (
    <div className="item">
      <h3>{props.itemName}</h3>
      <p>${props.price}</p>
      <input type="text" />
      <button>Add to Cart</button>
    </div>
  );
}

export default ShopItem;