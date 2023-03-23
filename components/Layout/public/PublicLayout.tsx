import React from 'react'
import { Box } from '@chakra-ui/react'
import { TopBar } from '../../topBar'
import { Navbar } from './Navbar'
import { FooterPublic as Footer } from '../../footer'
import navItems from './navItems'

export const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TopBar />
      <Navbar navItems={navItems} />
      <Box as={'section'}>
        {children}
      </Box>
      <Footer />
    </>
  )
}