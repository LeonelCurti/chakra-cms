import React, { useState } from 'react'
import { Box, Button, Center, Container, Flex, Grid, Heading, List, ListItem, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { FiFilter } from 'react-icons/fi'
import { ProductCard } from '@components/products/ProductCard'
import { PublicLayout } from '@components/layout'
import { Breadcrum } from '@components/breadcrum'
import { FilterProductsDrawer } from '@components/drawers'
import type { NextPage } from 'next'
import { dummyProducts } from '@utils/dummyProducts'
import { dummyCategories } from '@utils/dummyCategories'

const Products: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLoading, setIsLoading] = useState(false)

  const handleLoadMore = () => {
    setIsLoading(true)
    setTimeout(() => { setIsLoading(false) }, 2000)
  }

  return (
    <PublicLayout>
      <Breadcrum py={1} bg={'gray.50'} mb={{ base: 0, md: 8 }} />
      <Container maxW={'container.xl'}>
        <Button
          display={{ base: 'flex', md: 'none' }}
          w={'full'}
          variant={'outline'}
          my={4}
          leftIcon={<FiFilter />}
          onClick={onOpen}
          fontSize={'sm'}
          textTransform={'uppercase'}
        >
          Filter
        </Button>
        <Flex gap={6} pb={6}>

          {/* Desktop Left Sidenav */}
          <VStack
            w='full'
            h='full'
            alignItems={'flex-start'}
            display={{ base: 'none', md: 'flex' }}
            flex={3}
          >
            <Heading
              fontSize={'lg'}
              fontWeight={'medium'}
              mb={3}
            >
              Categories
            </Heading>
            <List
              fontSize={'sm'}
              spacing={3}
            >
              {
                dummyCategories.map((item, i) => (
                  <ListItem key={i} _hover={{ color: 'blue.500', cursor: 'pointer' }}>{item.name}</ListItem>

                ))
              }
            </List>
          </VStack>

          {/* Product Card Grid */}
          <Box
            flex={10}
            mx='auto'
          >
            <Text pb={4} color={'gray.600'} display={{ base: 'none', md: 'block' }} fontSize={'sm'} >Showing 7 results</Text>
            <Grid
              gap={4}
              gridTemplateColumns={{
                base: '1fr 1fr',
                sm: 'repeat(3, 1fr)',
                lg: 'repeat(4, 1fr)'
              }}>
              {dummyProducts.map(item => (
                <ProductCard
                  title={item.name}
                  key={item.sku}
                  img={item.img}
                  price={item.price}
                />
              ))}
            </Grid>
            <Center>
              <Button
                onClick={handleLoadMore}
                isLoading={isLoading ? true : false}
                spinnerPlacement='start'
                loadingText='Loading'
                variant={'outline'}
                fontSize={'sm'}
                textTransform={'uppercase'}
                px={9}
                mt={6}
              >
                Load More
              </Button>
            </Center>
          </Box>
        </Flex >
      </Container>

      {/* Filter Side Drawer */}
      <FilterProductsDrawer
        onClose={onClose}
        isOpen={isOpen}
        categories={dummyCategories}
      />

    </PublicLayout >
  )
}

export default Products