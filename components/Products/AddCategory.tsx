import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Button, Checkbox, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'

const AddCategory = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        variant={'ghost'}
        colorScheme={'blue'}
        onClick={onOpen}>
        Add Category
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Category</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

            <Text mb={1}>What category does the product belong to?</Text>
            <Flex
              p={3}
              maxH={'28'}
              overflow={'auto'}
              direction={'column'}
              borderWidth={'1px'}
              borderRadius={'md'}>
              <Checkbox>Category 1</Checkbox>
              <Checkbox>Category 2</Checkbox>
              <Checkbox>Category 3</Checkbox>
              <Checkbox>Category 4</Checkbox>
              <Checkbox>Category 5</Checkbox>      
            </Flex>
            <Accordion allowToggle variant='outline'>
              <AccordionItem border={'none'}>
                <h2>
                  <AccordionButton _hover={{ backgroundColor: 'inherit' }} px={0} py={2}>
                    <Text color={'blue.500'}>
                      + Create category
                    </Text>
                  </AccordionButton>
                </h2>
                <AccordionPanel p={0}>
                  <Flex
                    direction={'column'}
                    gap={3}
                    p={3}
                    borderWidth={'1px'}
                    borderRadius={'md'}>
                    <Input type="name" />
                    <Select placeholder='Parent category'>
                      <option>T-shirts</option>
                      <option>Shoes</option>
                    </Select>
                    <Button colorScheme='blue' variant='outline'>Add new category</Button>

                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' onClick={onClose}>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddCategory