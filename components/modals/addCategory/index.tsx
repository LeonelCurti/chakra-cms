import React from 'react'
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Stack, Textarea } from '@chakra-ui/react'

type AddCategorySidebarProps = {
  isOpen: boolean,
  onClose: () => void
}

export const AddCategory = ({ isOpen, onClose }: AddCategorySidebarProps) => {
    return (
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
    )
  }
