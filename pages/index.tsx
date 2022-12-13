import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import AdminLayout from '../layout/Admin'

const Home: NextPage = () => {  
  return (
    <AdminLayout>
      <Box p="4">      
          Home page           
      </Box>
    </AdminLayout>
  )
}

export default Home
