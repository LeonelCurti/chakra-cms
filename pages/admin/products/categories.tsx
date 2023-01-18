import type { NextPage } from 'next'
import { Box, Card, CardBody, Container, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import AdminLayout from '../../../components/Layout/Admin'
import CategoriesTable from '../../../components/Tables/CategoriesTable'
import SearchInput from '../../../components/Products/SearchInput'
import AddCategoryButton from '../../../components/Products/AddCategoryButton'

const Categories: NextPage = () => {
  const bgMainColor = useColorModeValue('gray.50', 'gray.800')
  const bgCard = useColorModeValue('white', '#1f2733')

  return (
    <AdminLayout>
      <Box bg={bgMainColor}>
        <Container maxW='container.md'>
          <Flex justify={'space-between'} alignItems={'flex-end'} >
            <Heading size={{ base: 'lg', md: 'lg' }} pt={{ base: '4', md: '6' }} >
              Categories
            </Heading>
            <AddCategoryButton />
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