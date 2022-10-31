import NextLink from 'next/link';
import { Heading, Icon, Text, HStack, Box, Link, useColorModeValue } from '@chakra-ui/react';
import { NavItem as Item } from './types';
import { useRouter } from 'next/router';

type Props = {
  item: Item;
};

export const NavItem = ({ item }: Props) => {
  const { label } = item;

  if (item.type === 'link') {
    const router = useRouter();
    const { icon } = item;
    const isActive = router.pathname === item.href

    return (
      <NextLink href={item.href} passHref>
        <Link variant="unstyled" _hover={{
          textDecoration: 'none',
        }}>
          <HStack
            align="center"
            justify="flex-start"
            height={{ base: 10, '2xl': 14 }}
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
              color={isActive ? "blue.600" : ""}
              as={icon}
            />
            <Text
              fontSize="md"
              fontWeight="medium"
              flex={1}
              letterSpacing="wider"
              color={isActive ? "blue.600" : ""}
            >
              {label}
            </Text>
            {isActive && (
              <Box width={1} height={6} bg="blue.600" />
            )}
          </HStack>
        </Link>
      </NextLink>
    )
  }

  return (
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
  );
};