import React, { useEffect } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

function Cart(props) {
  /*
  use props to send in each item
  for each item, create (sub)menu with name and menuitem with quantity
  */

  useEffect(() => {
    console.log(props.cartItems);
  });

 return (
   <div className="sidebar">
    <ProSidebar>
      <SidebarHeader>
        Shopping Cart
      </SidebarHeader>
      <Menu>
        {props.cartItems.map((product) => (
          <MenuItem key={product.id}>{product.itemName}: {product.qty}</MenuItem>
        ))}
      </Menu>
    </ProSidebar>
   </div>
 );
}
// {products.map((product) => <ShopItem key={product.id} {...product} handleAddItem={handleAddItem} />)}
export default Cart;