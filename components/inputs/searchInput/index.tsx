import { IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import { FiSearch } from 'react-icons/fi'

type Props = {
  placeHolder: string
  onSearch: () => void
}

export const SearchInput = (props: Props) => {
  return (
    <InputGroup >
      <Input
        pr='4.5rem'
        type='text'
        placeholder={props.placeHolder}
      />
      <InputRightElement
        children={
          <IconButton
            variant={'link'}
            aria-label="search"
            icon={<FiSearch />}
            onClick={props.onSearch} />}
      />
    </InputGroup>
  )
}

export default SearchInput