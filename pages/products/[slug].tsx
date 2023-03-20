import React, { useState } from 'react'
import { Box, Button, Container, Flex, Heading, HStack, List, ListItem, Select, SimpleGrid, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { FiHeart, FiMail, FiSend } from 'react-icons/fi'
import { Breadcrum } from '../../components/breadcrum'
import { Public as PublicLayout } from '../../components/layout'
import { ProdDetailPhotosGallery } from '../../components/products/prodDetailPhotosGallery'


const ProductDetail = () => {
  const [colorSelected, setColorSelected] = useState(1)
  const [quantity, setQuantity] = useState(1)

  const handleQtyChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setQuantity(Number(e.target.value))


  return (
    <PublicLayout>
      <Container maxW={'container.lg'}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={10}
          py={{ base: 4, md: 8 }}
        >
          <Box>
            <Box display={{ base: 'block', md: 'none' }}>
              <Breadcrum pb={3} />
              <Heading
                fontSize={{ base: 'lg', sm: 'xl' }} pb={2}>
                Top Slip On Velcro Sneakers
              </Heading>
            </Box>
            <ProdDetailPhotosGallery />
          </Box>

          <Stack
            spacing={{ base: 4, md: 5 }}
            flex={1}
          >
            <Box display={{ base: 'none', md: 'block' }}>
              <Breadcrum pb={3} />
              <Heading
                fontSize={'2xl'}

              >
                Top Slip On Velcro Sneakers
              </Heading>
            </Box>
            <HStack
              spacing={4}
            >
              <Text
                color={'green.400'}
              >
                In Stock
              </Text>
              <Text
                color={'gray.600'}
              >
                SKU: AV01-D-46
              </Text>
            </HStack>
            <Text
              mt={2}
              fontWeight={600}
              fontSize={'2xl'}>
              $350.00 USD
            </Text>
            <Text >
              COLOR: <Text as='span' fontWeight={'bold'}>{colorSelected}</Text>
            </Text>
            <HStack spacing={3}>
              {
                [1, 2, 3].map(item => (
                  <Button key={item} onClick={() => setColorSelected(item)} w={'50px'} h={'50px'} rounded={'sm'} bg={'gray.200'} shadow={'sm'} border={item === colorSelected ? '1px solid' : 'none'} />
                ))
              }
            </HStack>

            <Flex wrap={'wrap'} gap={4} py={3} >
              <Button variant={'link'} fontWeight={'medium'} color={'black'} leftIcon={<FiHeart />} _hover={{ textDecor: 'none', color: 'gray.700' }}>Add to wishlist</Button>
              <Button variant={'link'} fontWeight={'medium'} color={'black'} leftIcon={<FiSend />} _hover={{ textDecor: 'none', color: 'gray.700' }}>Delivery & Returns</Button>
              <Button variant={'link'} fontWeight={'medium'} color={'black'} leftIcon={<FiMail />} _hover={{ textDecor: 'none', color: 'gray.700' }}>Enquiry</Button>
            </Flex>

            <Flex
              direction={{ base: 'column', sm: 'row' }}
              gap={4}
              py={3}>
              <Select
                w={{ base: 'full', sm: '40%' }}
                onChange={handleQtyChange}
                value={quantity}
              >
                {
                  [1, 2, 3, 4, 5, 6, 7, 8].map(i => (<option key={i} value={i}>{i}</option>))
                }
              </Select>
              <Button rounded={'none'} width={'full'} colorScheme={'blue'}>Add to cart</Button>
            </Flex>

          </Stack>
        </SimpleGrid>


        <Tabs align='center' variant={'enclosed'} isFitted py={4}>
          <TabList >
            <Tab>DESCRIPTION</Tab>
            <Tab>ADDITIONAL INFORMATION</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <List spacing={2} textAlign={'start'} p={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Between lugs:
                  </Text>{' '}
                  20 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Bracelet:
                  </Text>{' '}
                  leather strap
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case:
                  </Text>{' '}
                  Steel
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case diameter:
                  </Text>{' '}
                  42 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Dial color:
                  </Text>{' '}
                  Black
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Crystal:
                  </Text>{' '}
                  Domed, scratch‑resistant sapphire crystal with anti‑reflective
                  treatment inside
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Water resistance:
                  </Text>{' '}
                  5 bar (50 metres / 167 feet){' '}
                </ListItem>
              </List>
            </TabPanel>
            <TabPanel>
              <List spacing={2} textAlign={'start'} p={2}>
                <ListItem >
                  <Text as={'span'} fontWeight={'bold'}>
                    Lorem ipsum dolor sit:
                  </Text>{' '}
                  Lorem, ipsum dolor
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Lorem ipsum dolor sit:
                  </Text>{' '}
                  Lorem, ipsum dolor
                </ListItem>
              </List>
              <Text m={2}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, soluta. Omnis ullam, labore nostrum, aperiam excepturi error, velit nam nulla eligendi mollitia repellendus vero veritatis cum necessitatibus obcaecati. Et accusamus magni, repellat quo beatae ratione vitae repellendus odit quas pariatur a voluptas tempora, architecto odio corporis quidem, praesentium sed voluptate ipsam enim aliquid? Dicta quos quibusdam molestiae aliquam delectus cum fuga nulla adipisci perspiciatis nesciunt aut, quaerat dolorum eveniet minima modi suscipit itaque, doloribus sit incidunt fugiat voluptatum, vel nostrum debitis autem. Nam fugiat qui, aspernatur distinctio velit earum impedit deleniti quos nisi autem, odit laborum. Eligendi, dolores est. Labore.</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </PublicLayout>
  )
}

export default ProductDetail