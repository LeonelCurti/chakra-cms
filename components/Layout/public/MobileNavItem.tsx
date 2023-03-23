import React from 'react'
import NextLink from "next/link"
import { Flex, Link, Stack, Text, useDisclosure, Icon, Collapse, useColorModeValue } from '@chakra-ui/react';
import { FiChevronDown } from 'react-icons/fi';
import { PublicNavItem } from '../../../types';

export const MobileNavItem = ({ label, children, href }: PublicNavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack
      spacing={0}
      px={6}
      my={2}
      //border={'1px solid red'}
      onClick={children && onToggle}
    // _hover={{
    //   bg: useColorModeValue('gray.200', 'gray.700')
    // }}
    >
      <NextLink href={href ?? '#'} passHref>
        <Flex
          py={2}
          as={Link}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
            color: 'blue.500'
          }}>
          <Text
            fontSize={'md'}
          //fontWeight={600}
          //color={'gray.500'}
          >
            {label}
          </Text>
          {children && (
            <Icon
              as={FiChevronDown}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
      </NextLink>

      <Collapse
        in={isOpen}
        animateOpacity
        style={{ marginTop: '0!important' }}
      >
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={'gray.200'}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link
                textDecor={'none'}
                key={child.label}
                py={2}
                href={child.href}
                _hover={{
                  textDecoration: 'none',
                  color: 'blue.500'
                }}
              >
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse >
    </Stack >
  );
};