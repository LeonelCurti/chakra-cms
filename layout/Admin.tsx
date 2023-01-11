import React from 'react'
import Sidebar from '../components/Sidebar'
import { dashRoutes } from './adminRoutes';


const Admin = ({ children }: { children: React.ReactNode }) => {
  return (
    <Sidebar routes={dashRoutes}>{children}</Sidebar>
  )
}

export default Admin