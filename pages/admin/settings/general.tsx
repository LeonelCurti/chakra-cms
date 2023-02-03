import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import { Admin as AdminLayout } from '../../../components/layout'

const General: NextPage = () => {
  return (
    <AdminLayout>
      <Box p="4">      
          General         
      </Box>
    </AdminLayout>
  )
}

export default General