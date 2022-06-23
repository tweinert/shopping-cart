import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

function Cart() {
  /*
  use props to send in each item
  for each item, create (sub)menu with name and menuitem with quantity
  */

 return (
   <div className="sidebar">
    <ProSidebar>
      <SidebarHeader>
        Shopping Cart
      </SidebarHeader>
      <Menu>
        <MenuItem>Dashboard</MenuItem>
        <SubMenu title="Components">
          <MenuItem>Comp 1</MenuItem>
          <MenuItem>Comp 2</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
   </div>
 );
}

export default Cart;