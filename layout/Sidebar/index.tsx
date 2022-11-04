import React from 'react'
import { Box, useDisclosure, useColorModeValue, Drawer, DrawerContent } from '@chakra-ui/react';
import TopBar from './TopBar';
import SidebarContent from './SidebarContent';

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <Box
      minH="100vh"
      // bg={useColorModeValue('gray.100', 'gray.900')}
    >
      {/* fixed sidebar for desktop */}
      <Box display={{ base: 'none', md: 'block' }} >
        <SidebarContent
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
          <SidebarContent
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

export default Sidebar