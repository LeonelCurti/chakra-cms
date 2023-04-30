import React from 'react'
import { Box, Button, Center, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Grid, HStack, List, ListItem, useDisclosure, VStack } from '@chakra-ui/react'
import { ProductCard } from '@components/products/ProductCard'
import type { NextPage } from 'next'
import { FiFilter } from 'react-icons/fi'

const Test: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box bg={'gray.100'}>
        <Center display={{ base: 'flex', md: 'none' }}>
          <Button
            rightIcon={<FiFilter />}
            onClick={onOpen}
            colorScheme='gray'
            variant='ghost'>
            Filter
          </Button>
        </Center>
        <Flex >
          <VStack
            w='full'
            h='full'
            alignItems={'flex-start'}
            display={{ base: 'none', md: 'flex' }}
            maxW={{ base: 150, lg: 200 }}
            borderRightColor={'red.200'}
            borderRightWidth={2}
            flexShrink={0}
          >
            <List w={'full'}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (<ListItem key={item}>Category</ListItem>))}
            </List>
          </VStack>

          <Box py={4} px={4} mx='auto' >
            <Grid gap={4} gridTemplateColumns={{ base: '1fr 1fr', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(item => (
                <ProductCard price={45} />
              ))}
            </Grid>
          </Box>

        </Flex >
      </Box>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filter</DrawerHeader>

          <DrawerBody>
            <VStack
              w='full'
              h='full'
              alignItems={'flex-start'}
              //maxW={{ base: 150, lg: 200 }}
              //borderRightColor={'red.200'}
              //borderRightWidth={2}
              flexShrink={0}
            >
              <List w={'full'}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (<ListItem key={item}>Category</ListItem>))}
              </List>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

    </>
  )
  // return (
  //   <Box pl={{ base: 0, md: '200px' }} bg={'gray.100'}>
  //     <Container maxW={'container.lg'}>
  //       <Box py={4}>

  //         <Grid gap={4} gridTemplateColumns={{ base: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' }}>
  //           {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(item => (
  //             <ProductCard price={45} />
  //           ))}


  //         </Grid>

  //       </Box>
  //     </Container>
  //   </Box>

  // )
}

export default Test