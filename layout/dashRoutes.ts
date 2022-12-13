import { NavItem } from "../components/Sidebar/types";
import {
  FiHome,
  FiShoppingCart,
  FiSettings,
} from 'react-icons/fi';

export const dashRoutes: NavItem[] = [
  {
    type: 'link',
    href: '/',
    icon: FiHome,
    label: 'Home',
  },
  // {
  //   type: 'header',    
  //   label: 'Home',
  // },
  {
    type: 'link',
    href: '/admin/products',
    icon: FiShoppingCart,
    label: 'Products',
  },
  {
    type: 'link',
    href: '/admin/settings',
    icon: FiSettings,
    label: 'Settings',
  },
]