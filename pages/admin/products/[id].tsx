import { Box, Button, Card, CardBody, Container, Flex, FormControl, FormLabel, Heading, HStack, Input, Stack, Switch, Text, Textarea, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { FiTrash2, FiExternalLink } from 'react-icons/fi'
import ProductCategories from '../../../components/Products/ProductCategories'
import ProductGallery from '../../../components/Products/ProductGallery'
import ProductTags from '../../../components/Products/ProductTags'
import AdminLayout from '../../../components/Layout/Admin'

const EditProduct = () => {
  const router = useRouter();
  const bgMainColor = useColorModeValue('gray.50', 'gray.800')
  const bgCard = useColorModeValue('white', '#1f2733')
  const textColor = useColorModeValue("gray.700", "white");
  const [tags, setTags] = useState(['foo', 'bar'])
  const [isVisible, setIsVisible] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const handleAddTags = (tags: string[]) => {
    setTags(tags)
  }

  const handleTagRemove = (index: number) => {
    setTags([...tags.slice(0, index), ...tags.slice(index + 1)])
  }

  const handleUpdateProduct = () => {
    setIsLoading(true)
    setTimeout(() => {
      router.push('/admin/products')
    }, 1500)
  }
  return (
    <AdminLayout>
      <Box bg={bgMainColor}>
        <Container maxW='container.md'>
          <Stack direction={{ base: 'column', md: 'row' }} justify={'space-between'} alignItems={'center'} pt={{ base: '4', md: '6' }}>
            <Heading size={{ base: 'md', md: 'lg' }}>
              Edit Product
            </Heading>
            <HStack>
              <Button
                colorScheme='blue'
                leftIcon={<FiTrash2 />}
                variant='ghost'
                onClick={() => alert(`Deleting product ${router.query.id} `)}
              >Delete</Button>
              <Button
                colorScheme='blue'
                leftIcon={<FiExternalLink />}
                variant='ghost'
                onClick={() => router.push(`/products/${router.query.id}`)}
              >View</Button>
              <Button
                colorScheme='blue'
                onClick={handleUpdateProduct}
                isLoading={isLoading}
              >Update</Button>
            </HStack>
          </Stack>

          <Card
            direction={'column'}
            my={5}
            bg={bgCard}
          >
            <CardBody>
              <Text fontSize='lg' color={textColor} fontWeight='bold' mb={2}>
                Name and Description
              </Text>
              <FormControl id="name">
                <FormLabel fontWeight={'normal'}>Name</FormLabel>
                <Input type="name" />
              </FormControl>
              <FormControl id="description">
                <FormLabel fontWeight={'normal'}>Description</FormLabel>
                <Textarea />
              </FormControl>
            </CardBody>
          </Card>

          <Card bg={bgCard} my={5}>
            <CardBody>
              <ProductGallery />
            </CardBody>
          </Card>

          <Flex gap={3} flexDirection={{ base: 'column', md: 'row' }} align={{ base: 'stretch', md: 'flex-start' }} my={5} >
            <Card bg={bgCard} w={'full'}>
              <CardBody>
                <ProductCategories />
              </CardBody>
            </Card>
            <Card bg={bgCard} w={'full'} >
              <CardBody>
                <ProductTags
                  tags={tags}
                  onTagsChange={handleAddTags}
                  onTagRemove={handleTagRemove}
                />
              </CardBody>
            </Card>
          </Flex>

          <Box p={2}>
            <FormLabel htmlFor='isChecked'>Show this product online:</FormLabel>
            <span>No</span>
            <Switch id='isChecked' mx={2} isChecked={isVisible} onChange={(e) => setIsVisible(e.target.checked)}
            />
            <span>Yes</span>
          </Box>

          <Flex justify={'flex-end'} gap={3} my={6}>
            <Button variant={'ghost'} colorScheme={'blue'}>
              Cancel
            </Button>
            <Button colorScheme={'blue'} mr={5}>
              Update
            </Button>
          </Flex>

        </Container>
      </Box>
    </AdminLayout>
  )
}

export default EditProduct