import { Button, Container, Flex, FormControl, FormLabel, Heading, Icon, Input, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../../../layout/Sidebar'
import { BiCategory } from "react-icons/bi";
import { FiMove, FiImage } from 'react-icons/fi';
import { IoOptionsOutline } from 'react-icons/io5';
import UploadGallery from '../../../components/Products/ProductGallery';
import AddCategoryButton from '../../../components/Products/AddCategoryButton';
import MoreOptionsButton from '../../../components/Products/MoreOptionsButton';

const AddProduct = () => {
  return (
    <Sidebar>
      <Container maxW='container.md'>
        <Heading size={{ base: 'lg', md: 'lg' }} >
          Add new product
        </Heading>

        <Flex
          direction={'column'}
          gap={3}
          mt={6}
          p={3}
          borderWidth={'1px'}
          borderRadius={'md'}
        >
          <Heading size={'sm'}>Name and description</Heading>
          <FormControl id="name">
            <FormLabel fontWeight={'normal'}>Name</FormLabel>
            <Input type="name" />
          </FormControl>
          <FormControl id="description">
            <FormLabel fontWeight={'normal'}>Description</FormLabel>
            <Textarea />
          </FormControl>
        </Flex>

        <UploadGallery />

        <Heading size={'sm'} mt={3} mb={2}>Advanced Options</Heading>
        <Flex
          my={4}
          p={3}
          justify={'space-between'}
          borderWidth={'1px'}
          borderRadius={'md'}>
          <Flex align={'center'}>
            <Icon as={BiCategory} boxSize={'10'} />
            <Flex direction={'column'} px={'5'}>
              <Heading size={'sm'}>
                Categories
              </Heading>
              <Text fontWeight={'normal'}>
                Create categories that you need
              </Text>
            </Flex>
          </Flex>
          <AddCategoryButton />
        </Flex>

        <Flex
          my={4}
          p={3}
          justify={'space-between'}
          borderWidth={'1px'}
          borderRadius={'md'}>
          <Flex align={'center'}>
            <Icon as={FiMove} boxSize={'10'} />
            <Flex direction={'column'} px={'5'}>
              <Heading size={'sm'}>
                Variants
              </Heading>
              <Text fontWeight={'normal'}>
                Colors and sizes are variants
              </Text>
            </Flex>
          </Flex>
          <Button variant={'ghost'} colorScheme={'blue'}>
            Add variant
          </Button>
        </Flex>

        <Flex
          my={4}
          p={3}
          justify={'space-between'}
          borderWidth={'1px'}
          borderRadius={'md'}>
          <Flex align={'center'}>
            <Icon as={IoOptionsOutline} boxSize={'10'} />
            <Flex direction={'column'} px={'5'}>
              <Heading size={'sm'}>
                More Options
              </Heading>
              <Text fontWeight={'normal'} display={{ base: 'none', sm: 'block' }}>
                Tags, visibility, SEO, etc.
              </Text>
            </Flex>
          </Flex>
          <MoreOptionsButton />
        </Flex>

        <Flex justify={'flex-end'} gap={3} my={6}>
          <Button variant={'ghost'} colorScheme={'blue'}>
            Cancel
          </Button>
          <Button colorScheme={'blue'} mr={5}>
            Publish
          </Button>
        </Flex>

      </Container>
    </Sidebar>
  )
}

export default AddProduct