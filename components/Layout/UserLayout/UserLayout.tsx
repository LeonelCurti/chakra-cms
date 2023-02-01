import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../../Navbar/Navbar'

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Box
        py={14}
        as={'section'}        
      >
        {children}
      </Box>
    </>
  )
}

export default UserLayout