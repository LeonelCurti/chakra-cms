import React from 'react'
import { Flex, Icon, HStack, Link } from '@chakra-ui/react'
import { FiMail } from 'react-icons/fi'
import { BsWhatsapp } from "react-icons/bs";

export const TopBar = () => {
  return (
    <Flex justify={{ base: 'center', sm: 'flex-end' }} color={'white'} alignItems={'center'} gap={6} bg={'black'} height={9} px={{ base: 0, sm: 10 }} >
      <HStack spacing={2}>
        <Icon as={FiMail} />
        <Link
          href='mailto:test@examile.com'
          fontSize={'sm'}
          _hover={{ textDecoration: 'none', color: 'blue.500', cursor: 'pointer', }}
          _visited={{ color: 'inherit' }}
        >
          contact@example.com
        </Link>
      </HStack>
      <HStack spacing={2}>
        <Icon as={BsWhatsapp} color={'green.300'}/>
        <Link
          fontSize={'sm'}
          href='whatsapp://send?phone=346377868775454&text=hola'
          _hover={{ textDecoration: 'none', color: 'blue.500', cursor: 'pointer', }}
          _visited={{ color: 'inherit' }}
        >
          011-5445-6548</Link>
      </HStack>
    </Flex>
  )
}
