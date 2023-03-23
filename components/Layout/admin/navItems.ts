import { FiHome, FiSettings, FiActivity, FiPlus, FiList } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { AdminNavItem } from "../../../types";

export const navItems: AdminNavItem[] = [
  {
    label: "Home",
    icon: FiHome,
    href: "/",
  },
  {
    label: "Analytics",
    icon: FiActivity,
    href: "/admin/analytics",
  },
  {
    label: "Products",
    children: [
      {
        label: "All Products",
        icon: FiList,
        href: "/admin/products",
      },
      {
        label: "Add New",
        icon: FiPlus,
        href: "/admin/products/new",
      },
      {
        label: "Categories",
        icon: BiCategory,
        href: "/admin/products/categories",
      },
    ],
  },
  {
    label: "Settings",
    children: [
      {
        label: "General",
        icon: FiSettings,
        href: "/admin/settings/general",
      },
    ],
  },
];
