import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import Sidebar from '../layout/Sidebar'

const Home: NextPage = () => {  
  return (
    <Sidebar>
      <Box p="4">      
          Home page           
      </Box>
    </Sidebar>
  )
}

export default Home
