import React from 'react';
import MenuItem from './MenuItem';

const SidebarMenu = ({ menus }) => (
  <ul className="list-unstyled">
    <div>
      {/* <span>Logo will appear here</span> */}
    </div>
    {
      menus.map((menu) => <MenuItem key={menu.name} name={menu.name} linkTo={menu.link}  iconType={menu.iconType}/>)
    }
  </ul>
)

export default SidebarMenu;
