import React from 'react'
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, IconButton, Input, InputGroup, InputRightElement, Select, VStack } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'

type Props = {
  isOpen: boolean,
  onClose: () => void
}

export const SearchDrawer = ({ isOpen, onClose }: Props) => {
  return (
    <Drawer   
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Search our site</DrawerHeader>

        <DrawerBody>
          <VStack gap={2}>
            <Select>
              <option selected>All Categories</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </Select>
            <InputGroup>
              <Input placeholder='Search...' />
              <InputRightElement
                children={
                  <IconButton
                    variant={'link'}
                    aria-label="search"
                    icon={<FiSearch />}
                    onClick={() => { }} />}
              />
            </InputGroup>
          </VStack>
        </DrawerBody>

      </DrawerContent>
    </Drawer>
  )
}
