import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import Sidebar from '../layout/Sidebar'

const Settings: NextPage = () => {
  return (
    <Sidebar>
      <Box p="4">      
          Settings          
      </Box>
    </Sidebar>
  )
}

export default Settings