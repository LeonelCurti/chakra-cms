import React from 'react'
import { Stack } from '@chakra-ui/react';
import { MobileNavItem } from './MobileNavItem';
import { PublicNavItem } from '../../../types';

export const MobileNav = ({ navItems }: { navItems: PublicNavItem[] }) => {
  return (
    <Stack
      bg={'white'}
      //p={4}
      display={{ md: 'none' }}>
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};