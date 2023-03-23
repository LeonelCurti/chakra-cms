import React from 'react'
import { NextPage } from 'next'
import { Box, Button, Divider, Grid, GridItem, Heading, Text, VStack } from '@chakra-ui/react'
import { BsWhatsapp } from 'react-icons/bs'
import { PublicLayout } from '../../components/layout'

const data = {
  address: '69 Gallaxy Enque, 23568 NY',
  phone: '+1 (893) 895 6358',
  email: 'contact@example.com',
  scheduleTime1: 'Mon - Fri: 9am - 13pm & 14:30pm - 18:30pm',
  scheduleTime2: 'Sat: 9am - 13pm',
  whatssAppHref: 'whatsapp://send?phone=346377868775454&text=hola',
}

const googleMapUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13125.839914485216!2d-58.3688807!3d-34.6683386!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a333f07703577b%3A0x9ae78eb09e838b4c!2sEstadio%20de%20Racing%20Club!5e0!3m2!1ses-419!2sar!4v1678412363339!5m2!1ses-419!2sar"

const ContactUs: NextPage = () => {
  return (
    <PublicLayout>
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={'2xl'}
        my={5}
        textAlign='center'>
        Contact Us
      </Heading>
      <Grid
        templateColumns={{ base: '1fr', md: '3fr 2fr' }}
        gap={4}
        p={3}
      >
        <GridItem>
          <Box w={'full'}
            h={{ base: 300, md: 'full' }} >
            <iframe
              src={googleMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" />
          </Box>
        </GridItem>
        <GridItem >
          <Box bg='gray.50' p={7}>
            <VStack spacing={5} alignItems={'flex-start'}>
              <Text fontSize={'sm'} textTransform={'uppercase'} fontWeight={600}>
                Address:{' '}
                <Text as={'span'} textTransform={'none'} fontWeight={500}
                >{data.address}</Text>
              </Text>
              <Text fontSize={'sm'} textTransform={'uppercase'} fontWeight={600}>
                WhatsApp:{' '}
                <Text as={'span'} textTransform={'none'} fontWeight={500}
                >{data.phone}</Text>
              </Text>
              <Text fontSize={'sm'} textTransform={'uppercase'} fontWeight={600}>
                Email:{' '}
                <Text as={'span'} textTransform={'none'} fontWeight={500}
                >{data.email}</Text>
              </Text>
              <Divider px={2} />
              <VStack spacing={5} alignItems={'flex-start'} fontSize={'sm'}>
                <Text fontWeight={600} textTransform={'uppercase'}>Opening hours</Text>
                <VStack alignItems={'flex-start'} fontWeight={500}>
                  <Text>{data.scheduleTime1}</Text>
                  <Text>{data.scheduleTime2}</Text>
                </VStack>
                <Text fontWeight={600} textTransform={'uppercase'}>¿Have any questions?</Text>
                <Button as={'a'} href={data.whatssAppHref} colorScheme='whatsapp' leftIcon={<BsWhatsapp />}>Send WhatsApp</Button>
              </VStack>
            </VStack>
          </Box>
        </GridItem>
      </Grid>
    </PublicLayout>

  )
}

export default ContactUs