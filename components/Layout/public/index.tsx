import { Box } from '@chakra-ui/react'
import React from 'react'
import { Navbar } from '../../navigation'

export const Public = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Box as={'section'}>
        {children}
      </Box>
    </>
  )
}