import React from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import { navItems } from './navList';

const Admin = ({ children }: { children: React.ReactNode }) => {
  return (
    <Sidebar routes={navItems}>{children}</Sidebar>
  )
}

export default Admin