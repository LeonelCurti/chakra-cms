import React from 'react'
import { Box, Button, Card, CardBody, Flex, Heading, IconButton, Text, } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { BsWhatsapp } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import ImageNotFound from '../../../public/images/image_not_availble.png'

const whatssAppHref = 'https://api.whatsapp.com/send?phone=346377868775454&text=hola'

type ProductCardProps = {
  title: string
  price: number
  img?: string//put default image in case of not presence
}

export const ProductCard = (props: ProductCardProps) => {
  const router = useRouter()
  const { title, price, img } = props

  const handleSendWhatsappMsg = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation()
    router.push(whatssAppHref)
  }

  return (
    <Card
      border={1}
      borderStyle={'solid'}
      borderColor={'gray.200'}
      role={'group'}
      shadow='none'
      _hover={{
        cursor: 'pointer'
      }}
    >
      <CardBody p={0}>
        <Box position={'relative'}>
          <Box position={'absolute'} right={1} top={1} display={'none'} _groupHover={{ display: 'block' }} zIndex={900}>
            <IconButton
              rounded='full'
              variant='ghost'
              _hover={{ bg: 'transparent', color: 'blue.500' }}
              aria-label='Call Sage'
              fontSize='20px'
              icon={<FiHeart />}
            />
          </Box>
          <Box
            position={'relative'}
            roundedTop={'md'}
            h={{ base: 200, sm: 250 }} >
              <Image
                fill
                alt='product image'
                objectFit='contain'
                style={{
                  borderTopLeftRadius: '5px',
                  borderTopRightRadius: '5px'
                }}
                src={img || ImageNotFound}
                quality={75}
                sizes="(max-width: 480px) 50vw,
                  (max-width: 768px) 33vw,
                  20vw"
              />     
          </Box>
      </Box>
      <Flex direction={'column'} gap={2} align={'center'} textAlign={'center'} py={4} px={1}>
        <Heading w={'full'} noOfLines={2} size={'xs'} fontWeight={'500'}>{title}</Heading>

        {
          (price > 0) ? (
            <Text fontSize={'lg'} fontWeight={'bold'}>
              {`$${price}`}
            </Text>

          ) : (
            <Button
              as={'a'}
              variant='outline'
              size={'sm'}
              onClick={handleSendWhatsappMsg}
              leftIcon={<BsWhatsapp />}>
              Consult
            </Button>
          )
        }
      </Flex>
    </CardBody>
    </Card >
  )
}
