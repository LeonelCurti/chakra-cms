import { Box, Divider, Flex, IconButton, Input, InputGroup, InputRightElement, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { FiSearch } from 'react-icons/fi'

const Navbar = () => {
  return (
    <Box
      as="header"
      bg={'white'}
      position="fixed"
      w='full'
    >
      <Flex
        px={{ base: 4, md: 8 ,lg:10}}
        h={14}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={4}
      >
        <Text fontSize='2xl' fontWeight={"medium"}>Logo</Text>
        <Box >
          <InputGroup >
            <Input           
              type='text' 
              placeholder="Search"                
              maxW={{ base: 'sm', md: 'lg' }} />
            <InputRightElement children={<IconButton w={'full'} variant={'link'} aria-label="search" icon={<FiSearch />} onClick={() => { }} />} />
          </InputGroup>
        </Box>
      </Flex>
      <Divider />
    </Box>
  );
};

export default Navbar;
