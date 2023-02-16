import { Box, Flex, Tag, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Image from 'next/image'

const randomImages = [
  'https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080',
  'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1613336026275-d6d473084e85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
]

export const ProdDetailPhotosGallery = () => {
  const [selected, setSelected] = useState(1)

  return (
    <Flex flexDir={'column'}>
      <Box
        w={'full'}
        h={'auto'}
      >       
        <Image
          alt={'product image'}
          src={randomImages[selected]}         
          layout="responsive"
          width="100%"
          height="100%"
          objectFit='cover' 
        />
      </Box>
      <Flex
        p={3}
        gap={2}
      >
        {
          randomImages.map((item, index) => (
            <Flex
              cursor={'pointer'}
              onClick={() => setSelected(index)}
              outline={selected === index ? '1px solid' : 'none'}
              flex={1}
              key={index}
            >
              <Box
                w={'full'}
                opacity={selected === index ? '1' : '0.8'}
              >
                <Image
                  alt={'product image'}
                  src={item}
                  layout="responsive"
                  width="100%"
                  height="100%"
                  objectFit='cover'
                />
              </Box>
            </Flex>
          ))
        }
      </Flex>
    </Flex>
  )
}
