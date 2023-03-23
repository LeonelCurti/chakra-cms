import React from "react";
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, IconButton, Text, useDisclosure } from "@chakra-ui/react";
import { FiHeart, FiMenu, FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi'
import { SearchInput } from "../../inputs";
import { DesktopNav } from "./DesktopNav";
import { PublicNavItem } from "../../../types";
import { MobileNav } from "./MobileNav";

type Props = {
  navItems: PublicNavItem[]
}

export const Navbar = ({ navItems }: Props) => {
  const {
    isOpen: isOpenSearchDrawer,
    onOpen: onOpenSearchDrawer,
    onClose: onCloseSearchDrawer
  } = useDisclosure()
  const {
    isOpen: isOpenMenuDrawer,
    onOpen: onOpenMenuDrawer,
    onClose: onCloseMenuDrawer
  } = useDisclosure()


  return (
    <>
      <Flex
        as={'header'}
        px={{ base: 4, md: 8, lg: 10 }}
        height={16}
        alignItems='center'
        justifyContent={"space-between"}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={'gray.200'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onOpenMenuDrawer}
            icon={<FiMenu />}
            fontSize={'2xl'}
            variant={'ghost'}
            aria-label={'Toggle Navigation'} />
        </Flex>

        <Flex flex={1} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={{ base: 'center', md: 'left' }}
            fontSize='3xl'
            fontWeight={"bold"}>
            Logo</Text>
          <Flex display={{ base: 'none', md: 'flex' }} w='full' ml={10}>
            <DesktopNav navItems={navItems} />
          </Flex>
        </Flex>


        <HStack
          spacing={2}
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
        >
          <IconButton
            aria-label="search"
            variant='ghost'
            fontSize={{ base: 'xl', md: 'lg' }}
            rounded={'full'}
            icon={<FiSearch />}
            onClick={onOpenSearchDrawer}
            _hover={{ bg: 'transparent', color: 'blue.600' }}
          />
          <IconButton
            display={{ base: 'none', md: 'inline-flex' }}
            aria-label="favorite"
            variant='ghost'
            fontSize={{ base: 'xl', md: 'lg' }}
            rounded={'full'}
            icon={<FiUser />}
            _hover={{ bg: 'transparent', color: 'blue.600' }}
          />
          <IconButton
            display={{ base: 'none', md: 'inline-flex' }}
            aria-label="favorite"
            variant='ghost'
            fontSize={{ base: 'xl', md: 'lg' }}
            rounded={'full'}
            icon={<FiHeart />}
            _hover={{ bg: 'transparent', color: 'blue.600' }}
          />
          <IconButton
            aria-label="cart"
            variant='ghost'
            fontSize={{ base: 'xl', md: 'lg' }}
            rounded={'full'}
            icon={<FiShoppingCart />}
            _hover={{ bg: 'transparent', color: 'blue.600' }}
          />
        </HStack>
      </Flex>

      <Drawer
        isOpen={isOpenSearchDrawer}
        onClose={onCloseSearchDrawer}
        placement='top'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth='1px'>
            Search in our site
          </DrawerHeader>
          <DrawerBody py={6}>
            <SearchInput
              placeHolder='Search...'
              onSearch={() => alert('search')}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Drawer
        isOpen={isOpenMenuDrawer}
        onClose={onCloseMenuDrawer}
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
    </>
  );
};

