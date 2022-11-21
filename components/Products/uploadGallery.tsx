import React from 'react'
import { Box, Flex, Heading, Icon, Input } from '@chakra-ui/react'

import { FiImage } from 'react-icons/fi';

const UploadGallery = () => {
  return (
    <Box      
      my={6}
      p={3}
      borderWidth={'1px'}
      borderRadius={'md'}
    >
      <Heading size={'sm'}>Images</Heading>
      <Flex justify={'space-evenly'} gap={5} py={6} wrap={'wrap'}>
        {
          [1, 2, 3, 4].map((el, i) => (
            <Box
              key={i}
              p={5}
              position="relative"
              borderWidth={'1px'}
              borderRadius={'md'}
              borderStyle={'dashed'}
              
            ><Input
                type="file"
                height="100%"
                width="100%"
                position="absolute"
                top="0"
                left="0"
                opacity="0"
                aria-hidden="true"
                accept="image/*"
                _hover={{cursor:'pointer'}}                
              />
              <Flex justify={'center'} align={'center'}>
                <Icon as={FiImage} boxSize={'16'} />
              </Flex>
            </Box>
          ))
        }
      </Flex>
    </Box>
  )
}

export default UploadGallery