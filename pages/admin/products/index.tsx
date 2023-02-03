import type { NextPage } from 'next'
import { Box, Button, Card, CardBody, Container, Flex, Heading, HStack, Select, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { FiPlus } from 'react-icons/fi'
import { ProductsTable } from '../../../components/tables'
import { useRouter } from 'next/router'
import { Admin as AdminLayout } from '../../../components/layout'
import { SearchInput } from '../../../components/inputs'

const Products: NextPage = () => {
  const router = useRouter()
  const bgMainColor = useColorModeValue('gray.50', 'gray.800')
  const bgCard = useColorModeValue('white', '#1f2733')

  return (
    <AdminLayout>
      <Box bg={bgMainColor}>
        <Container maxW='container.md'>
          <Stack direction={{ base: 'column', md: 'row' }} justify={'space-between'} alignItems={'center'} pt={{ base: '4', md: '6' }}>
            <Heading size={{ base: 'md', md: 'lg' }}>
              Products
            </Heading>
            <HStack>
              <Button
                colorScheme='blue'
                leftIcon={<FiPlus />}
                onClick={() => router.push('/admin/products/new')}
              >Add New</Button>
              <Button colorScheme='blue' variant='ghost'>Import</Button>
              <Button colorScheme='blue' variant='ghost'>Export</Button>
            </HStack>
          </Stack>

          <Card my={5} bg={bgCard}>
            <CardBody>
              <SearchInput
                placeHolder='Find product by name or SKU'
                onSearch={() => { }}
              />
            </CardBody>
          </Card>

          <Card
            direction={{ base: 'column', md: 'row' }}
            my={5}
            p={5}
            bg={bgCard}
            justifyContent={'space-between'}
            gap={3}
          >
            <Box w={'full'}>
              <Text pb={'1'}>Actions</Text>
              <Flex gap={1}>
                <Select placeholder='Select option'>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
                <Button colorScheme='blue'>Apply</Button>
              </Flex>
            </Box>
            <Box w={'full'}>
              <Text pb={'1'}>Filter by category</Text>
              <Select placeholder='Select option'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </Box>
          </Card>

          <Card
            my={5}
            bg={bgCard}
          >
            <ProductsTable />
          </Card>

        </Container>
      </Box>
    </AdminLayout>
  )
}

export default Products