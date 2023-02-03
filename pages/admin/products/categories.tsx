import type { NextPage } from 'next'
import { Box, Button, Card, CardBody, Container, Flex, Heading, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { Admin as AdminLayout } from '../../../components/layout'
import { CategoriesTable } from '../../../components/tables'
import { SearchInput } from '../../../components/inputs'
import { AddCategory } from '../../../components/modals/addCategory'
import { FiPlus } from 'react-icons/fi'

const Categories: NextPage = () => {
  const bgMainColor = useColorModeValue('gray.50', 'gray.800')
  const bgCard = useColorModeValue('white', '#1f2733')
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <AdminLayout>
      <AddCategory isOpen={isOpen} onClose={onClose} />
      <Box bg={bgMainColor}>
        <Container maxW='container.md'>
          <Flex justify={'space-between'} alignItems={'flex-end'} >
            <Heading size={{ base: 'lg', md: 'lg' }} pt={{ base: '4', md: '6' }} >
              Categories
            </Heading>
            <Button
              colorScheme={'blue'}
              leftIcon={<FiPlus />}
              onClick={onOpen}>
              Add New
            </Button>
          </Flex>

          <Card my={5} bg={bgCard}>
            <CardBody>
              <SearchInput
                placeHolder='Find a category'
                onSearch={() => { }}
              />
            </CardBody>
          </Card>

          <Card
            my={5}
            bg={bgCard}>
            <CategoriesTable />
          </Card>

        </Container>
      </Box>
    </AdminLayout>
  )
}

export default Categories