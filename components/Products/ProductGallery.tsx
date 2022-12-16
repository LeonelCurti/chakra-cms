import React from 'react'
import { Box, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react'
import { useDropzone } from "react-dropzone";
import { FiCamera, FiTrash2 } from 'react-icons/fi';

const ProductGallery = () => {
  const { getRootProps, getInputProps } = useDropzone();
  const titleTextColor = useColorModeValue("gray.700", "white");
  const bgImage = useColorModeValue("gray.50", "gray.700");
  const IconColor = useColorModeValue("gray.600", "gray.800");
  return (
    <>
      <Text fontSize='lg' color={titleTextColor} fontWeight='bold' mb={2}>
        Images
      </Text>
      <Flex justify={'space-evenly'} gap={4} py={6} wrap={'wrap'}>
        {
          [1, 2, 3, 4].map((el, i) => (
            <Box
              position={'relative'}
              key={i}
              bg={bgImage}
              borderStyle={'dashed'}
              borderWidth={'2px'}
              borderColor={'gray.500'}
              cursor='pointer'
              {...getRootProps({ className: "dropzone" })}
            >
              <Box
                position='absolute'
                right={'5px'}
                top={'2px'}
                onClick={(e) => {
                  e.stopPropagation()
                  alert(`Delete ${i + 1}º image `)
                }}>
                <Icon
                  as={FiTrash2}
                  _hover={{ color: 'red.500' }} />
              </Box>
              <input {...getInputProps()} />
              <Flex p={6} role='group' >
                <Icon
                  as={FiCamera}
                  minW='70px'
                  minH='70px'
                  color={IconColor}
                  _groupHover={{ color: 'gray.900' }} />
              </Flex>
            </Box>
          ))
        }
      </Flex>
    </>
  )
}

export default ProductGallery
