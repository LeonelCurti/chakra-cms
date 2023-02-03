import React, { useState } from 'react'
import { Button, Flex, Heading, HStack, Image, List, ListItem, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, SimpleGrid, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { FiHeart, FiMail, FiSend } from 'react-icons/fi'
import { Breadcrum } from '../../components/breadcrum'
import { PublicUser } from '../../components/layout'

const ProductDetail = () => {
  const [selected, setSelected] = useState(1)
  return (
    <PublicUser>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 8, md: 10 }}
        p={6}
      >
        <Flex>
          <Image
            alt={'product image'}
            src={
              'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '300px', lg: '400px' }}
          />
        </Flex>

        <Stack
          spacing={{ base: 4, md: 5 }}
        >
          <Breadcrum />
          <Heading
            textTransform={'uppercase'}
            fontSize={{ base: '2xl', sm: '3xl' }}>
            Top Slip On Velcro Sneakers
          </Heading>
          <HStack
            spacing={4}
            as={'header'}
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
            COLOR: <Text as='span' fontWeight={'bold'}>{selected}</Text>
          </Text>
          <HStack spacing={3}>
            {
              [1, 2, 3].map(item => (
                <Button key={item} onClick={() => setSelected(item)} w={'50px'} h={'50px'} rounded={'sm'} bg={'gray.200'} shadow={'sm'} border={item === selected ? '1px solid' : 'none'} />
              ))
            }
          </HStack>

          <HStack spacing={4} py={3}>
            <Button variant={'link'} fontWeight={'medium'} color={'black'} leftIcon={<FiHeart />} _hover={{ textDecor: 'none', color: 'gray.700' }}>Add to wishlist</Button>
            <Button variant={'link'} fontWeight={'medium'} color={'black'} leftIcon={<FiSend />} _hover={{ textDecor: 'none', color: 'gray.700' }}>Delivery & Returns</Button>
            <Button variant={'link'} fontWeight={'medium'} color={'black'} leftIcon={<FiMail />} _hover={{ textDecor: 'none', color: 'gray.700' }}>Enquiry</Button>
          </HStack>

          <HStack spacing={4} py={3}>
            <NumberInput defaultValue={1} min={1} max={20} >
              <NumberInputField rounded={'none'} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Button rounded={'none'} width={'full'} colorScheme={'blue'}>Add to cart</Button>
          </HStack>

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
    </PublicUser>
  )
}

export default ProductDetail