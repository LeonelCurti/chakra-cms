import { Box, Button, Flex, FormLabel, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Switch, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import ProductTags from './ProductTags'

const MoreOptionsButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [tags, setTags] = useState(['foo', 'bar'])
  const [isVisible, setIsVisible] = useState(true)

  const handleAddTags = (tags: string[]) => {
    setTags(tags)
  }

  const handleTagRemove = (index: number) => {
    setTags([...tags.slice(0, index), ...tags.slice(index + 1)])
  }

  return (
    <>
      <Button
        variant={'ghost'}
        colorScheme={'blue'}
        onClick={onOpen}>
        More Options
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>More Options</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              borderWidth={'1px'}
              borderRadius={'md'}
              p={3}
              gap={1}
            >
              <ProductTags
                tags={tags}
                onTagsChange={handleAddTags}
                onTagRemove={handleTagRemove}
              />
            </Flex>
            <Box p={2}>
              <FormLabel htmlFor='isChecked'>Show this product online:</FormLabel>
              <span>No</span>
              <Switch id='isChecked' mx={2} isChecked={isVisible} onChange={(e) => setIsVisible(e.target.checked)}
              />
              <span>Yes</span>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' onClick={onClose}>Save</Button>
          </ModalFooter>
        </ModalContent>

      </Modal>
    </>
  )
}

export default MoreOptionsButton