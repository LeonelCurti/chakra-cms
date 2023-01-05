import type { NextPage } from 'next'
import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react'
import AdminLayout from '../../../layout/Admin'

const Tags: NextPage = () => {
  const bgMainColor = useColorModeValue('gray.50', 'gray.800')
  // const bgCard = useColorModeValue('white', 'gray.700')
  const bgCard = useColorModeValue('white', '#1f2733')
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <AdminLayout>
      <Box bg={bgMainColor}>
        <Container maxW='container.md'>
        <Heading size={{ base: 'lg', md: 'lg' }} pt={{base:'4',md:'6'}} >
            Tags
          </Heading>
        </Container>
      </Box>
    </AdminLayout>
  )
}

export default Tags