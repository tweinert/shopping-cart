import React, { useEffect, useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

function Cart(props) {
  /*
  use props to send in each item
  for each item, create (sub)menu with name and menuitem with quantity
  */
  const [orderPrice, setOrderPrice] = useState(0);

  // update total price
  useEffect(() => {
    let total = props.cartItems.reduce((sum, product) => {
      return sum += product.price * product.qty;
    }, 0);
    setOrderPrice(total);

  }, [props.cartItems]);

 return (
   <div className="sidebar">
    <ProSidebar>
      <SidebarHeader>
        Shopping Cart
      </SidebarHeader>
      <Menu>
        {props.cartItems.map((product) => (
          <Menu key={product.id}>
            <MenuItem>{product.itemName}: {product.qty}</MenuItem>
            <MenuItem> Price: ${(product.price * product.qty).toFixed(2)}</MenuItem>
          </Menu>
        ))}
      </Menu>
      <MenuItem>Total: ${orderPrice.toFixed(2)}</MenuItem>
    </ProSidebar>
   </div>
 );
}
// {products.map((product) => <ShopItem key={product.id} {...product} handleAddItem={handleAddItem} />)}
export default Cart;