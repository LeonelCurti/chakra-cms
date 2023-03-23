import React from 'react'
import { Drawer, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, HStack, IconButton, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi';
import { MobileSideNav } from './MobileSideNav';
import { AdminNavItem } from '../../../types';


export const Navbar = ({ navItems }: { navItems: AdminNavItem[] }) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <>
      <HStack
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 24 }}
        height="16"
        justify={'flex-start'}
        bg={useColorModeValue('white', 'gray.900')}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
        display={{ base: 'flex', md: 'none' }}
      >
        <IconButton
          variant="outline"
          onClick={onOpen}
          aria-label="open menu"
          icon={<FiMenu />}
        />
        <Text fontSize="2xl" pl="4" fontWeight="bold">
          Logo
        </Text>
      </HStack>

      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            Menu
          </DrawerHeader>
          <MobileSideNav navItems={navItems} />
        </DrawerContent>
      </Drawer>
    </>
  )
}