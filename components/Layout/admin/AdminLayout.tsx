import React from 'react'
import { Box } from '@chakra-ui/react';
import { DesktopSideNav } from './DesktopSideNav';
import { Navbar } from './Navbar';
import { navItems } from './navItems';

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
 
  return (
    <Box
      minH="100vh"
    // bg={useColorModeValue('gray.100', 'gray.900')}
    >
      <Navbar navItems={navItems} />
      <DesktopSideNav navItems={navItems} />
      <Box as='section' ml={{ base: 0, md: 48 }} >
        {children}
      </Box>
    </Box>

  )
}