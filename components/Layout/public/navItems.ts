import { PublicNavItem } from "../../../types";

const navItems: PublicNavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    children: [
      {
        label: "Jeans",
        href: "#",
      },
      {
        label: "Shoes",
        href: "#",
      },
    ],
  },
  {
    label: "About",
    href: "#",
  },
  {
    label: "Contact",
    href: "/contactUs",
  },
  {
    label: "Admin",
    href: "/admin/products",
  },
];

export default navItems;
