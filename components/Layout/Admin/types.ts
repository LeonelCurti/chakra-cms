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