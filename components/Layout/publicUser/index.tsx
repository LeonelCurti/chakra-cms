import { Box } from '@chakra-ui/react'
import React from 'react'
import { Navbar } from '../../navbar'

export const PublicUser = ({ children }: { children: React.ReactNode }) => {
  return (
    <>        
      <Navbar />
      <Box as={'section'}>
        {children}
      </Box>
    </>
  )
}