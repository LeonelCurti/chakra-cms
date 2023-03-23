import React from 'react'
import NextLink from "next/link"
import { Box, Flex, Link, Stack, Text, Icon } from '@chakra-ui/react';
import { FiChevronRight } from 'react-icons/fi';
import { PublicNavItem } from '../../../types';

export const DesktopSubNav = ({ label, href, subLabel }: PublicNavItem) => {
  return (
    <NextLink href={href ?? '#'} passHref>
      <Link
        role={'group'}
        display={'block'}
        _hover={{ bg: 'gray.100' }}>
        <Stack direction={'row'} align={'center'} px={4}
          py={2}>
          <Box>
            <Text
              transition={'all .3s ease'}
              //_groupHover={{ color: 'blue.500' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon
              //color={'blue.500'} 
              w={5} h={5}
              as={FiChevronRight} />
          </Flex>
        </Stack>
      </Link>
    </NextLink>
  );
};