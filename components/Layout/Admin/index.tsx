import React from 'react'
import { AdminNavigation } from '../../sidebar'
import { navItems } from './navList';

export const Admin = ({ children }: { children: React.ReactNode }) => {
  return (
    <AdminNavigation routes={navItems}>{children}</AdminNavigation>
  )
}