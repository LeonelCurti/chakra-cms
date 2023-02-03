import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import { Admin as AdminLayout } from '../../components/layout'

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