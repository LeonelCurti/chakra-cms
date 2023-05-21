import React from 'react'
import NextLink from "next/link"
import { Flex, Link, Stack, Text, useDisclosure, Icon, Collapse, useColorModeValue } from '@chakra-ui/react';
import { FiChevronDown } from 'react-icons/fi';
import { PublicNavItem } from '../navItems';

export const MobileNavItem = ({ label, children, href }: PublicNavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  if (children) {
    return (
      <>
        <Flex
          onClick={onToggle}
          px={4}
          py={3}
          justify={'space-between'}
          align={'center'}
          _hover={{
            cursor: 'pointer',
            bg: useColorModeValue('gray.200', 'gray.800'),
          }}>
          <Text fontSize={{ base: 'lg', md: 'md' }}
          >
            {label}
          </Text>
          <Icon
            as={FiChevronDown}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        </Flex>

        <Collapse
          in={isOpen}
          animateOpacity
          style={{ marginTop: '0!important' }}
        >
          <Stack
            spacing={0}
            align={'start'}>
            {
              children.map((child) => (
                <Link
                  as={NextLink}
                  key={child.label}
                  href={child.href ?? '#'}
                  textDecor={'none'}
                  fontSize={{ base: 'lg', md: 'md' }}
                  pl={6}
                  py={2}
                  w={'full'}
                  _hover={{
                    bg: useColorModeValue('gray.200', 'gray.800'),
                  }}
                >
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse >
      </>
    )
  } else {
    return (
      <Link as={NextLink} href={href ?? '#'}>
        <Flex
          px={4}
          py={3}
          as={Link}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.800'),
          }}>
          <Text
            fontSize={{ base: 'lg', md: 'md' }}
          //fontWeight={500}
          >
            {label}
          </Text>
        </Flex>
      </Link>
    )
  }
};
