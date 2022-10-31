import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import Sidebar from '../layout/Sidebar'

const Products: NextPage = () => {
  return (
    <Sidebar>
      <Box p="4">      
          Products          
      </Box>
    </Sidebar>
  )
}

export default Products