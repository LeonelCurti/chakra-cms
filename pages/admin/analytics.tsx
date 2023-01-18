import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import AdminLayout from '../../components/Layout/Admin'

const Analytics: NextPage = () => {
  return (
    <AdminLayout>
      <Box p="4">      
          Analytics          
      </Box>
    </AdminLayout>
  )
}

export default Analytics