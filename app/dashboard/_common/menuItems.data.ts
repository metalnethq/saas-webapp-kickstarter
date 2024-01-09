import {
  FiHome,
  FiCoffee,
  FiUsers,
  FiMap,
  FiUser,
  FiSun,
} from "react-icons/fi";

const menuItems = {
  main: [
    {
      title: "Home",
      Icon: FiHome,
      href: "/",
    },
    {
      title: "Coffee",
      Icon: FiCoffee,
      href: "/",
    },
    {
      title: "Profile",
      Icon: FiUser,
      href: "/",
    },
  ],
  secondary: [
    {
      title: "Menu Item",
      Icon: FiSun,
      href: "/",
    },
    {
      title: "Map",
      Icon: FiMap,
      href: "/",
    },
    {
      title: "Users",
      Icon: FiUsers,
      href: "/",
    },
  ],
};

export default menuItems;
