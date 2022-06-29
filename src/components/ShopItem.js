import { React, useState } from "react";

function ShopItem(props) {
  const [qtyValue, setQtyValue] = useState(1);

  return (
    <div className="item">
      <h3>{props.itemName}</h3>
      <p>${props.price}</p>
      <input type="text" value={qtyValue} onChange={evt => setQtyValue(evt.target.value)}/>
      <button onClick={() => {props.handleAddItem(props.id, Number(qtyValue))}}>Add to Cart</button>
    </div>
  );
}

export default ShopItem;