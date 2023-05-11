import React from 'react'
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/react";
import { SearchInput } from '@components/inputs';

type Props = {
  isOpen: boolean,
  onClose: () => void
}

export const SearchDrawer = ({ isOpen, onClose }: Props) => {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement='top'
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader 
        fontSize={'lg'} 
        //borderBottomWidth='1px'
        >
          What are you loking for?
        </DrawerHeader>
        <DrawerBody pb={6}>
          <SearchInput
            placeHolder='Search...'
            onSearch={() => alert('search')}
          />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
