import NextLink from 'next/link';
import { Heading, Icon, Text, HStack, Box, Link, useColorModeValue } from '@chakra-ui/react';
import { NavItem } from '../../layout/dashRoutes';
import { useRouter } from 'next/router';

type Props = {
  item: NavItem;
};

const NavItem = ({ item }: Props) => {
  const router = useRouter();
  const { label, children, href, icon } = item;
  const activePath = router.pathname

  if (children) {
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
                <NextLink href={child.href ?? '#'} passHref key={child.label}>
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
                        color={activePath === child.href ? "blue.500" : ""}
                        as={child.icon}
                      />
                      <Text
                        fontSize="md"
                        fontWeight="medium"
                        flex={1}
                        letterSpacing="wider"
                        color={activePath === child.href ? "blue.500" : ""}
                      >
                        {child.label}
                      </Text>
                      {activePath === child.href && (
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
              color={activePath === item.href ? "blue.500" : ""}
              as={icon}
            />
            <Text
              fontSize="md"
              fontWeight="medium"
              flex={1}
              letterSpacing="wider"
              color={activePath === item.href ? "blue.500" : ""}
            >
              {label}
            </Text>
            {activePath === item.href && (
              <Box width={1} height={6} bg="blue.500" />
            )}
          </HStack>
        </Link>
      </NextLink>
    )
  }


};
export default NavItem




