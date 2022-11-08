import type { NextPage } from 'next'
import { Box, Button, Container, Flex, Heading, HStack, Input, InputGroup, InputRightElement, Select, Stack, Text } from '@chakra-ui/react'
import Sidebar from '../layout/Sidebar'
import { FiPlus, FiSearch } from 'react-icons/fi'
import ProductsTable from '../components/Products/ProductsTable'

const Products: NextPage = () => {
  return (
    <Sidebar>
      <Container maxW='container.md'>
        <Stack direction={{base:'column', md:'row'}} justify={'space-between'} alignItems={'center'} pt={{base:'4',md:'6'}}>
          <Heading size={{base:'md', md:'lg'}}>
            Products
          </Heading>
          <HStack>
            <Button colorScheme='blue' leftIcon={<FiPlus />}>Add Product</Button>
            <Button colorScheme='blue' variant='ghost'>Import</Button>
            <Button colorScheme='blue' variant='ghost'>Export</Button>
          </HStack>
        </Stack>

        <InputGroup my={'4'} >
          <Input
            pr='4.5rem'
            type='text'
            placeholder='Find product by name or SKU'
          />
          <InputRightElement width='5rem' mr={'2'}>
            <Button
              h='2rem'
              size='sm'
              colorScheme='blue'
              leftIcon={<FiSearch />}
              onClick={() => { }}
            >
              Seach
            </Button>
          </InputRightElement>
        </InputGroup>

        <Flex
          direction={{base:'column',md:'row'}}
          my={'4'}
          py={4}
          px={3}
          borderWidth={'1px'}
          borderRadius={'md'}
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
        </Flex>
        <Box
          my={'4'}
          borderWidth={'1px'}
          borderRadius={'md'}>
          <ProductsTable />
        </Box>

      </Container>
    </Sidebar>
  )
}

export default Products