import React from 'react'
import { Center, Flex, IconButton, List, ListItem, useColorMode } from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi';
import { NavItem } from './NavItem';
import { AdminNavItem } from '../../../types';


export const MobileSideNav = ({ navItems }: { navItems: AdminNavItem[] }) => {
  const { toggleColorMode, colorMode } = useColorMode()
  return (
    <Flex
      direction={'column'}
      justify='space-between'
      h="full"
      overflow={'auto'}
    >
      <List
        py={2}>
        {
          navItems.map((item) => (
            <ListItem key={item.label}>
              <NavItem item={item} />
            </ListItem>
          ))
        }
      </List>
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
