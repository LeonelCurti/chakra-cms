import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import { FiSearch } from 'react-icons/fi'

type Props = {
  placeHolder: string
  onSearch: () => void
}

export const SearchInput = (props: Props) => {
  return (
    <InputGroup  >
      <Input
        pr='4.5rem'
        type='text'
        placeholder={props.placeHolder}
      />
      <InputRightElement width='5rem' mr={'2'}>
        <Button
          h='2rem'
          size='sm'
          colorScheme='blue'
          leftIcon={<FiSearch />}
          onClick={props.onSearch}
        >
          Seach
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default SearchInput