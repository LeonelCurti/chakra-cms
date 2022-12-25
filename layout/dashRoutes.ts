import {
  FiHome,
  FiSettings,
  FiActivity,
  FiTag,
  FiPlus,
  FiList,
} from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { IconType } from "react-icons/lib";

export type SimpleNavItem = {
  label: string;
  icon: IconType;
  href: string;
};
export type CompoundNavItem = {
  label: string;
  children: SimpleNavItem[];
};

export type NavItem = SimpleNavItem | CompoundNavItem;

export const dashRoutes: NavItem[] = [
  {
    label: "Home",
    icon: FiHome,
    href: "/",
  },
  {
    label: "Statistics",
    icon: FiActivity,
    href: "/admin/statistics",
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
      {
        label: "Tags",
        icon: FiTag,
        href: "/admin/products/tags",
      },
    ],
  },
  {
    label: "Settings",
    icon: FiSettings,
    href: "/admin/settings",
  },
];
