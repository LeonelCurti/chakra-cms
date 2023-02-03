import React from 'react'
import { FlexProps, HStack, IconButton, Text, useColorModeValue } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi';

interface TopBarProps extends FlexProps {
  onOpen: () => void;
}

export const TopBar = ({ onOpen }: TopBarProps) => {
   return (
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
  )
}