export type PublicNavItem = {
  label: string;
  children?: PublicNavItem[];
  href?: string;
};

export const navItems: PublicNavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "/products",
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
    href: "/",
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
