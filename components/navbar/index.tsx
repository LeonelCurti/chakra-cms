import React from "react";
import { HStack, IconButton, Input, InputGroup, InputRightElement, Text, useBreakpoint, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { FiHeart, FiSearch, FiShoppingCart } from 'react-icons/fi'
import { SearchDrawer } from "../sidebar";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  useBreakpoint()
  return (
    <>
      <HStack
        as={'header'}
        px={{ base: 4, md: 8, lg: 10 }}
        height={14}
        justifyContent={"space-between"}
        //gap={4}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={'gray.200'}
      >
        <Text fontSize='3xl' fontWeight={"bold"}>Logo</Text>
        <HStack>
          <InputGroup w={'sm'} display={{ base: 'none', md: 'block' }}>
            <Input type='text' placeholder="Search" />
            <InputRightElement
              children={
                <IconButton
                  variant={'link'}
                  aria-label="search"
                  icon={<FiSearch />}
                  onClick={() => { }} />}
            />
          </InputGroup>
          <IconButton
            display={{ base: 'block', md: 'none' }}
            aria-label="search"
            variant='ghost'
            fontSize={{base:'xl', md:'lg'}}
            rounded={'full'}
            icon={<FiSearch />}
            onClick={onOpen}
            _hover={{ bg: 'transparent', color: 'blue.600' }}
            
            />
          <IconButton
            aria-label="favorite"
            variant='ghost'
            fontSize={{base:'xl', md:'lg'}}
            rounded={'full'}
            icon={<FiHeart />}
            _hover={{ bg: 'transparent', color: 'blue.600' }}
            />
          <IconButton
            aria-label="cart"
            variant='ghost'
            fontSize={{base:'xl', md:'lg'}}
            rounded={'full'}
            icon={<FiShoppingCart />}
            _hover={{ bg: 'transparent', color: 'blue.600' }}
          />
        </HStack>
      </HStack>
      <SearchDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};


