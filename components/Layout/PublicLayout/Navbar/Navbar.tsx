import React from "react";
import { Flex, HStack, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, useDisclosure } from "@chakra-ui/react";
import { FiHeart, FiMenu, FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi'
import { DesktopNav } from "../DesktopNav";
import { PublicNavItem } from "../navItems";
import { SearchDrawer } from "@components/drawers";
import { MainMenuDrawer } from "@components/drawers/mainMenuDrawer";
import { CartDrawer } from "@components/drawers/cartDrawer";
import { FavouritesDrawer } from "@components/drawers/favouritesDrawer";

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
  const {
    isOpen: isOpenCartDrawer,
    onOpen: onOpenCartDrawer,
    onClose: onCloseCartDrawer
  } = useDisclosure()
  const {
    isOpen: isOpenFavouritesDrawer,
    onOpen: onOpenFavouritesDrawer,
    onClose: onCloseFavouritesDrawer
  } = useDisclosure()

  return (
    <>
      <Flex
        as={'header'}
        px={{ base: 4, md: 8, lg: 10 }}
        height={16}
        alignItems='center'
        justifyContent={"space-between"}
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
          <Menu placement="bottom">
            <MenuButton            
              as={IconButton}
              display={{ base: 'none', md: 'inline-flex' }}
              aria-label="user-options"
              variant='ghost'
              fontSize={{ base: 'xl', md: 'lg' }}
              rounded={'full'}
              icon={<FiUser />}
              _hover={{ bg: 'transparent', color: 'blue.600' }}>
            </MenuButton>
            <MenuList>
              <MenuItem>My Account</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuDivider />
              <MenuItem>Sign Out</MenuItem>
            </MenuList>
          </Menu>

          <IconButton
            display={{ base: 'none', md: 'inline-flex' }}
            aria-label="favorite"
            variant='ghost'
            fontSize={{ base: 'xl', md: 'lg' }}
            rounded={'full'}
            icon={<FiHeart />}
            onClick={onOpenFavouritesDrawer}
            _hover={{ bg: 'transparent', color: 'blue.600' }}
          />
          <IconButton
            aria-label="cart"
            variant='ghost'
            fontSize={{ base: 'xl', md: 'lg' }}
            rounded={'full'}
            icon={<FiShoppingCart />}
            onClick={onOpenCartDrawer}
            _hover={{ bg: 'transparent', color: 'blue.600' }}
          />
        </HStack>
      </Flex>

      <SearchDrawer
        isOpen={isOpenSearchDrawer}
        onClose={onCloseSearchDrawer}
      />

      <MainMenuDrawer
        isOpen={isOpenMenuDrawer}
        onClose={onCloseMenuDrawer}
        navItems={navItems}
      />
      <CartDrawer
        isOpen={isOpenCartDrawer}
        onClose={onCloseCartDrawer}
      />
      <FavouritesDrawer
        isOpen={isOpenFavouritesDrawer}
        onClose={onCloseFavouritesDrawer}
      />
    </>
  );
};

