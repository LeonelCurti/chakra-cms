import React from 'react'
import { Box, BoxProps, CloseButton, Flex, IconButton, List, ListItem, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { NavItem } from './NavItem';
import { navItems } from './navData';
import { FiMoon, FiSun } from 'react-icons/fi';

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose }: SidebarProps) => {
  const { toggleColorMode, colorMode } = useColorMode()


  return (
    <Flex
      direction={'column'}
      justify='space-between'
      bg={useColorModeValue('gray.100', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.300', 'gray.700')}
      w={{ base: 'full', md: 48 }}
      pos="fixed"
      h="full"
    >
      <Box>
        <Flex h='16' alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="2xl" fontWeight="bold">
            Logo
          </Text>
          <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </Flex>

        <List width="full" overflowY="auto">
          {navItems.map((item, index) => (
            <ListItem key={item.label}>
              <NavItem item={item} />
            </ListItem>
            )
          )}
        </List>
      </Box>

      <Flex justify={'center'} m={2} >
        <IconButton
          w={'auto'}
          aria-label='icon'
          onClick={() => toggleColorMode()}
          icon={colorMode === 'light' ? <FiSun /> : <FiMoon />}
        />
      </Flex>
    </Flex>
  )
}

export default SidebarContent