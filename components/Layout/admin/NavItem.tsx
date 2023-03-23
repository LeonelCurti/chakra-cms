import NextLink from 'next/link';
import { Heading, Icon, Text, HStack, Box, Link, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { AdminNavItem } from '../../../types';

export const NavItem = ({ item }: { item: AdminNavItem }) => {
  const { pathname } = useRouter();

  if ('children' in item) {
    const { label, children } = item
    return (
      <>
        <Heading
          // color="whiteAlpha.700"
          fontWeight="medium"
          textTransform="uppercase"
          letterSpacing={6}
          fontSize="sm"
          ml={8}
          mt={{ base: 6, '2xl': 8 }}
          mb={2}
        >
          {label}
        </Heading>
        <Box mb={4}>
          {
            children && (
              children.map((child) => (
                <NextLink href={child.href} passHref key={child.label}>
                  <Link variant="unstyled" _hover={{
                    textDecoration: 'none',
                  }}>
                    <HStack
                      align="center"
                      justify="flex-start"
                      height={{ base: 8, '2xl': 12 }}
                      transition="ease-out"
                      transitionProperty="background"
                      transitionDuration="normal"
                      _hover={{
                        bg: useColorModeValue('gray.200', 'gray.700')
                      }}
                    >
                      <Icon
                        width={5}
                        height={5}
                        mr={4}
                        ml={4}
                        color={pathname === child.href ? "blue.500" : ""}
                        as={child.icon}
                      />
                      <Text
                        fontSize="md"
                        fontWeight="medium"
                        flex={1}
                        letterSpacing="wider"
                        color={pathname === child.href ? "blue.500" : ""}
                      >
                        {child.label}
                      </Text>
                      {pathname === child.href && (
                        <Box width={1} height={6} bg="blue.500" />
                      )}
                    </HStack>
                  </Link>
                </NextLink>
              ))
            )
          }
        </Box>
      </>
    );
  } else {
    const { label, icon, href } = item
    return (
      <NextLink href={href ?? '#'} passHref key={label}>
        <Link variant="unstyled" _hover={{
          textDecoration: 'none',
        }}>
          <HStack
            align="center"
            justify="flex-start"
            height={{ base: 8, '2xl': 12 }}
            transition="ease-out"
            transitionProperty="background"
            transitionDuration="normal"
            _hover={{
              bg: useColorModeValue('gray.200', 'gray.700')
            }}
          >
            <Icon
              width={5}
              height={5}
              mr={4}
              ml={4}
              color={pathname === item.href ? "blue.500" : ""}
              as={icon}
            />
            <Text
              fontSize="md"
              fontWeight="medium"
              flex={1}
              letterSpacing="wider"
              color={pathname === item.href ? "blue.500" : ""}
            >
              {label}
            </Text>
            {pathname === item.href && (
              <Box width={1} height={6} bg="blue.500" />
            )}
          </HStack>
        </Link>
      </NextLink>
    )
  }


};





