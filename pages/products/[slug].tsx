import { Box, Container, Flex, Heading, Image, List, ListItem, SimpleGrid, Stack, StackDivider, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const ProductDetail = () => {
  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
              'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080'
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>

        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              Product title
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              $350.00 USD
            </Text>
          </Box>
          <Box>
            <Text
              fontSize={{ base: '16px', lg: '18px' }}
              color={useColorModeValue('yellow.500', 'yellow.300')}
              fontWeight={'500'}
              textTransform={'uppercase'}
              mb={'4'}>
              Product Details
            </Text>

            <List spacing={2}>
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
          </Box>


        </Stack>
      </SimpleGrid>
    </Container>
  )
}

export default ProductDetail