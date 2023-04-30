import React from 'react'
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, List, ListItem, VStack } from '@chakra-ui/react'
import { Category } from 'types'

type Props = {
  isOpen: boolean,
  onClose: () => void
  categories: Category[]
}

export const FilterProductsDrawer = ({ isOpen, onClose, categories }: Props) => {
  return (
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
          >
            <List spacing={3} color={'gray.600'}>
              <ListItem _hover={{ color: 'blue.500', cursor: 'pointer' }}>All</ListItem>
              {
                categories.map((item, i) => (
                  <ListItem key={i} _hover={{ color: 'blue.500', cursor: 'pointer' }}>{item.name}</ListItem>

                ))
              }
            </List>
          </VStack>
        </DrawerBody>

        <DrawerFooter>
          <Button variant='outline' mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme='blue' onClick={onClose}>Apply</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
