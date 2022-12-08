import { Flex, FormControl, FormLabel, Input, InputProps, Tag, TagCloseButton, TagLabel, Wrap, WrapItem } from '@chakra-ui/react'
import React, { KeyboardEvent, useState } from 'react'

export type Props = InputProps & {
  tags: string[]
  onTagsChange(tags: string[]): void
  onTagRemove(index: number): void
}

const ProductTags = (props: Props) => {
  const { tags = [], onTagsChange, onTagRemove } = props
  const [value, setValue] = useState('');

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
      <Flex direction={'column'} gap={2} w='full'>
        <FormControl>
          <FormLabel>Product Tags</FormLabel>
          <Input value={value} onChange={onChange} onKeyDown={handleKeyDown} placeholder={'Type '} />
        </FormControl>

        <Wrap align='center'>
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