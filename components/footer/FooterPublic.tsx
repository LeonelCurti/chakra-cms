import { Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'

export const FooterPublic = () => {
  return (
    <Flex bg={'gray.50'} justify='center' p={4}>
      <Text>© {new Date().getFullYear()} Made by <Link href='https://twitter.com/leomcurti'>Leo</Link></Text>
    </Flex>
  )
}


