import React, { useState } from 'react'
import { Box, Button, Drawer, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Icon, Input, Text, VStack, IconButton, Stack, StackDivider, DrawerBody } from "@chakra-ui/react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FiShoppingCart, FiTrash } from 'react-icons/fi';

type Props = {
  isOpen: boolean,
  onClose: () => void
}

const dummyCartItems = [
  { name: 'Magnet valve', price: 80, qty: 1 },
  { name: 'Siphon for Kitchen', price: 56, qty: 1 },
  { name: 'Pivotal Tank Lever', price: 78, qty: 1 },
  { name: 'Mini Ball Valve', price: 96, qty: 1 },
]

export const CartDrawer = ({ isOpen, onClose }: Props) => {
  const [cartItems, setCartItems] = useState(dummyCartItems)

  const handleDeleteCartItem = (indexToDelete: number) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(indexToDelete, 1);
    setCartItems(newCartItems);
  }

  const handleChangeQty = (indexToChange: number, factor: number) => {
    const newQty = cartItems[indexToChange].qty + factor
    if (newQty < 1) return
    const newArray = [...cartItems];
    newArray[indexToChange].qty = newQty;
    setCartItems(newArray);
  }

  const getTotalCost = () => {
    return cartItems.reduce((total, item) => {
      const { price, qty } = item;
      return total + price * qty;
    }, 0);
  }

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement='right'
      size={'sm'}
    >
      <DrawerOverlay />
      <DrawerContent >
        <DrawerCloseButton />
        <DrawerHeader textTransform={'uppercase'}>
          {`Your Cart (${cartItems.length})`}
        </DrawerHeader>
        <DrawerBody p={0}>
          {
            cartItems.length > 0 ? (
              <>
                <Flex justifyContent={'center'} gap={2} p={2} bgColor={'gray.100'} textAlign={'center'}>
                  <Icon boxSize={6} as={MdOutlineLocalShipping} />
                  <Text>You have got{' '}
                    <Text as={'span'} fontWeight={700} textTransform={'uppercase'}>
                      free shipping
                    </Text>
                  </Text>
                </Flex>

                <Box p={4}>
                  <Stack w={'full'} spacing={3} divider={<StackDivider borderColor={'gray.100'} />}>
                    {
                      cartItems.map((item, index) => (
                        <Flex gap={2} key={index} w='full'>
                          <Box
                            flexGrow={0}
                            flexShrink={0}
                            flexBasis={90}
                            h={90}
                            backgroundColor={'gray.100'}
                          />
                          <Flex direction={'column'} w={'full'} flexGrow={1} gap={3} alignItems='center' justifyContent={'center'}>
                            <Flex w={'full'} justifyContent={'space-between'} align='center'>
                              <Text fontSize={'md'}>{item.name}</Text>
                              <IconButton 
                                color={'gray.800'}
                                aria-label='delete'
                                variant={'link'}
                                onClick={() => handleDeleteCartItem(index)}
                                _hover={{ color: 'blue.600' }} icon={<FiTrash />} />
                            </Flex>
                            <Flex w={'full'} justifyContent={'space-between'} alignItems={'center'}>
                              <Flex w={'full'} gap={2}>
                                <Button
                                  rounded={'none'}
                                  size={{base:'sm',sm:'xs'}}
                                  onClick={() => handleChangeQty(index, -1)}
                                  variant={'outline'}>-</Button>
                                <Input maxW={'3rem'} size={{base:'sm',sm:'xs'}} value={item.qty} />                            
                                <Button
                                  rounded={'none'}
                                  size={{base:'sm',sm:'xs'}}
                                  onClick={() => handleChangeQty(index, 1)}
                                  variant={'outline'}
                                >+</Button>
                              </Flex>
                              <Text alignSelf={'end'} pr={4}>{`$${item.price*item.qty}`}</Text>
                            </Flex>
                          </Flex>
                        </Flex>
                      ))}
                  </Stack>

                  <Flex direction={'column'} w='full' my={3} >
                    <Flex
                      justifyContent={'space-between'}
                      textTransform={'uppercase'}
                      fontWeight={700}>
                      <Text>SUBTOTAL</Text>
                      <Text>{`$${getTotalCost()} USD`}</Text>
                    </Flex>
                    <Text mt={1} fontSize={'sm'}>Tax included and shipping calculated at checkout</Text>
                    <VStack mt={4} spacing={3}>
                      <Button onClick={onClose} rounded={'none'} w={'full'}>PROCEED TO CHECKOUT</Button>
                      <Button onClick={onClose} rounded={'none'} w={'full'} variant={'outline'}>CONTINUE SHOPPING</Button>
                    </VStack>
                  </Flex>
                  
                </Box>
              </>
            ) : (
              <VStack spacing={6} mt={4}>
                <Icon as={FiShoppingCart} boxSize={10} />
                <Text textAlign={'center'}>You have no items in your cart</Text>
                <Button onClick={onClose}>CONTINUE SHOPPING</Button>
              </VStack>
            )
          }

        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
