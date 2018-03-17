import React from "react";
import { SidebarMenu } from "../Menu";

const menuItems = [
  { name: "Dashboard", link: "/dashboard", iconType: "tachometer" },
  { name: "School", link: "/schools", iconType: "graduation-cap" },
  { name: "User", link: "/users", iconType: "users" },
  { name: "Setting", link: "/setting", iconType: "cog" }
];

const Sidebar = () => (
  <nav className="sidebar bg-dark">
    <SidebarMenu menus={menuItems} />
  </nav>
);

export default Sidebar;
