import React from 'react'
import { Drawer, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/react";
import { MobileNav } from '@components/layout/PublicLayout/MobileNav';
import { PublicNavItem } from '@components/layout/PublicLayout/navItems';

type Props = {
  isOpen: boolean,
  onClose: () => void
  navItems: PublicNavItem[]
}


export const MainMenuDrawer = ({ isOpen, onClose, navItems }: Props) => {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement='left'
    >
      <DrawerOverlay />
      <DrawerContent >
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth='1px'>
          Menu
        </DrawerHeader>
        <MobileNav navItems={navItems} />
      </DrawerContent>
    </Drawer>
  )
}
