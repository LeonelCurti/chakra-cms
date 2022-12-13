import { Flex, Input, InputProps, Tag, TagCloseButton, TagLabel, Text, useColorModeValue, Wrap, WrapItem } from '@chakra-ui/react'
import React, { KeyboardEvent, useState } from 'react'

export type Props = InputProps & {
  tags: string[]
  onTagsChange(tags: string[]): void
  onTagRemove(index: number): void
}

const ProductTags = (props: Props) => {
  const { tags = [], onTagsChange, onTagRemove } = props
  const [value, setValue] = useState('');
  const textColor = useColorModeValue("gray.700", "white");
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    // event.preventDefault();
    const { currentTarget, key } = event
    if (key === 'Enter' && currentTarget.value) {
      onTagsChange(tags.concat([value]))
      setValue('')
    }
  }
  return (
    <>
      <Flex direction={'column'} gap={3} w='full'>
        <Text fontSize='lg' color={textColor} fontWeight='bold' mb={2}>
          Product Tags
        </Text>
        <Input value={value} onChange={onChange} onKeyDown={handleKeyDown} placeholder={'Type '} />


        <Wrap align='center' p={1} overflow={'auto'} maxH={'150px'}>
          {
            tags.map((tag, index) => (
              <WrapItem key={index}>
                <Tag >
                  <TagLabel >{tag}</TagLabel>
                  <TagCloseButton onClick={() => onTagRemove(index)} />
                </Tag>
              </WrapItem>
            ))
          }
        </Wrap>
      </Flex>
    </>
  )
}

export default ProductTags