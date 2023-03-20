import React from 'react'
import { Stack } from '@chakra-ui/react';
import { NavItem } from '../../types';
import { MobileNavItem } from './MobileNavItem';

export const MobileNav = ({ navItems }: { navItems: NavItem[] }) => {
  return (
    <Stack
      bg={'white'}
      p={4}
      display={{ md: 'none' }}>
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};