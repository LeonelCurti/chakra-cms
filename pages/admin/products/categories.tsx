import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import AdminLayout from '../../../layout/Admin'

const Categories: NextPage = () => {
  return (
    <AdminLayout>
      <Box p="4">      
          Categories          
      </Box>
    </AdminLayout>
  )
}

export default Categories