import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Stack, Textarea, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { FiPlus } from 'react-icons/fi'

const AddCategoryButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        colorScheme={'blue'}
        leftIcon={<FiPlus />}
        onClick={onOpen}>
        Add New
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Category</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={3} p={1}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input />
              </FormControl>
              <FormControl>
                <FormLabel>Slug</FormLabel>
                <Input />
              </FormControl>
              <FormLabel>Parent category</FormLabel>
              <Select>
                <option selected>None</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </Select>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea />
              </FormControl>
            </Stack>

          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' onClick={onClose}>Add category</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddCategoryButton