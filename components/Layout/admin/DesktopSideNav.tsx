import React from 'react'
import { Box, BoxProps, Center, CloseButton, Flex, IconButton, List, ListItem, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi';
import { NavItem } from './NavItem';
import { AdminNavItem } from '../../../types';

interface Props extends BoxProps {
  navItems: AdminNavItem[];
}

export const DesktopSideNav = ({ navItems }: Props) => {
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <Flex
      direction={'column'}
      display={{ base: 'none', md: 'flex' }}
      justify='space-between'
      bg={useColorModeValue('gray.100', 'gray.900')}
      borderRight="5px"
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
        </Flex>

        <List width="full" overflowY="auto">
          {navItems.map((item) => (
            <ListItem key={item.label}>
              <NavItem item={item} />
            </ListItem>
          )
          )}
        </List>
      </Box>

      <Center py={2} >
        <IconButton
          w={'auto'}
          aria-label='icon'
          onClick={() => toggleColorMode()}
          icon={colorMode === 'light' ? <FiSun /> : <FiMoon />}
        />
      </Center>
    </Flex>
  )
}