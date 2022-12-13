import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import AdminLayout from '../../layout/Admin'

const Settings: NextPage = () => {
  return (
    <AdminLayout>
      <Box p="4">      
          Settings          
      </Box>
    </AdminLayout>
  )
}

export default Settings