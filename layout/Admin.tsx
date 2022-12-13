import React from 'react'
import Sidebar from '../components/Sidebar'
import { dashRoutes } from './dashRoutes';


const Admin = ({ children }: { children: React.ReactNode }) => {
  return (
    <Sidebar routes={dashRoutes}>{children}</Sidebar>
  )
}

export default Admin