import React from 'react'
import { Box, useDisclosure, Drawer, DrawerContent } from '@chakra-ui/react';
import { Content } from './content';
import { TopBar } from './topBar';
import { NavItem } from '../../layout/admin/types'

type Props = {
  children: React.ReactNode,
  routes: NavItem[]
};

export const AdminNavigation= ({ routes, children }: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <Box
      minH="100vh"
    // bg={useColorModeValue('gray.100', 'gray.900')}
    >
      {/* fixed sidebar for desktop */}
      <Box display={{ base: 'none', md: 'block' }} >
        <Content
          routes={routes}
          onClose={() => onClose()}
        />
      </Box>
      {/* sidebar drawer for mobile */}
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="xs"
      >
        <DrawerContent>
          <Content
            routes={routes}
            onClose={() => onClose()}
          />
        </DrawerContent>
      </Drawer>
      {/* top menu for mobile */}
      <TopBar
        onOpen={onOpen} />
      <Box ml={{ base: 0, md: 48 }} >{children}</Box>
    </Box>
  )
}