import React, { useState } from 'react'
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Icon, IconButton, Stack, StackDivider, Text, VStack } from "@chakra-ui/react";
import { FiShoppingCart, FiTrash } from 'react-icons/fi';

type Props = {
  isOpen: boolean,
  onClose: () => void
}

const dummy_favourites = [
  { name: 'Magnet valve', price: 80 },
  { name: 'Siphon for Kitchen', price: 56 },
  { name: 'Pivotal Tank Lever', price: 78 },
  { name: 'Mini Ball Valve', price: 96 },
]

export const FavouritesDrawer = ({ isOpen, onClose }: Props) => {
  const [favs, setFavs] = useState(dummy_favourites)

  const handleDeleteFav = (indexToDelete: number) => {
    const newFavs = [...favs];
    newFavs.splice(indexToDelete, 1);
    setFavs(newFavs);
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
        <DrawerHeader>
          {`Favourites (${favs.length})`}
        </DrawerHeader>
        <DrawerBody p={0}>
          {
            favs.length > 0 ? (
              <Stack spacing={3} p={4} divider={<StackDivider borderColor={'gray.100'} />}>

                {favs.map((element, index) => (
                  <Flex key={index}>
                    <Box
                      //alignSelf={'center'}
                      flexBasis={90}
                      h={90}
                      backgroundColor={'gray.100'}
                    />
                    <Flex flexGrow={1} px={6} justifyContent={'space-between'} alignItems={'center'}>
                      <Box>
                        <Text >{element.name}</Text>
                        <Text >{`$${element.price}`}</Text>
                      </Box>
                      <IconButton
                        onClick={() => handleDeleteFav(index)}
                        rounded='full'
                        icon={<FiTrash />}
                        color={'gray.800'}
                        aria-label='delete'
                        variant={'link'}
                        _hover={{ color: 'blue.600' }}
                      />
                    </Flex>
                  </Flex>

                ))}
              </Stack>
            ) : (
              <VStack spacing={6} mt={4}>
                <Icon as={FiShoppingCart} boxSize={10} />
                <Text textAlign={'center'}>You have no items in Favourites</Text>
                <Button onClick={onClose}>CONTINUE SHOPPING</Button>
              </VStack>
            )
          }
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
