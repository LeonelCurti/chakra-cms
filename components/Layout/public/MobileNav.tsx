import React from 'react'
import { Stack } from '@chakra-ui/react';
import { MobileNavItem } from './MobileNavItem';
import { PublicNavItem } from '../../../types';

export const MobileNav = ({ navItems }: { navItems: PublicNavItem[] }) => {
  return (
    <Stack
      spacing={0}
      h={'full'}
      overflowY={'auto'}
    >
      {navItems.map((navItem, i) => (
        <MobileNavItem key={i} {...navItem} />
      ))}
    </Stack>
  );
};