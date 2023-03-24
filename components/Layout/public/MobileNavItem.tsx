import React from 'react'
import NextLink from "next/link"
import { Flex, Link, Stack, Text, useDisclosure, Icon, Collapse, useColorModeValue } from '@chakra-ui/react';
import { FiChevronDown } from 'react-icons/fi';
import { PublicNavItem } from '../../../types';

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
                <NextLink
                  key={child.label}
                  href={child.href ?? '#'}
                  passHref
                >
                  <Link
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
                </NextLink>
              ))}
          </Stack>
        </Collapse >
      </>
    )
  } else {
    return (
      <NextLink href={href ?? '#'} passHref>
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
      </NextLink>
    )
  }

};
// export const MobileNavItem = ({ label, children, href }: PublicNavItem) => {
//   const { isOpen, onToggle } = useDisclosure();


//   return (
//     <Stack
//       spacing={0}
//       onClick={children && onToggle}
//     >
//       <NextLink href={href ?? '#'} passHref>
//         <Flex
//           px={4}
//           py={2}
//           as={Link}
//           justify={'space-between'}
//           align={'center'}
//           _hover={{
//             textDecoration: 'none',
//             bg: useColorModeValue('gray.200', 'gray.700'),
//           }}>
//           <Text
//             fontSize={{ base: 'lg', md: 'md' }}
//           //fontWeight={500}
//           >
//             {label}
//           </Text>
//           {children && (
//             <Icon
//               as={FiChevronDown}
//               transition={'all .25s ease-in-out'}
//               transform={isOpen ? 'rotate(180deg)' : ''}
//               w={6}
//               h={6}
//             />
//           )}
//         </Flex>
//       </NextLink>

//       <Collapse
//         in={isOpen}
//         animateOpacity
//         style={{ marginTop: '0!important' }}
//       >
//         <Stack
//           //mt={2}
//           spacing={0}
//           align={'start'}>
//           {children &&
//             children.map((child) => (
//               <NextLink
//                 href={child.href ?? '#'}
//                 passHref
//                 key={child.label}
//               >
//                 <Link
//                   textDecor={'none'}
//                   fontSize={{ base: 'lg', md: 'md' }}
//                   //fontWeight={500}
//                   pl={6}
//                   py={2}
//                   w={'full'}
//                   _hover={{
//                     bg: useColorModeValue('gray.200', 'gray.700'),
//                   }}
//                 >
//                   {child.label}
//                 </Link>
//               </NextLink>
//             ))}
//         </Stack>
//       </Collapse >
//     </Stack >
//   );
// };