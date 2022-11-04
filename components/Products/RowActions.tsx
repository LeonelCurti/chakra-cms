import { HStack, IconButton, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { FiEdit, FiEye, FiTrash } from 'react-icons/fi'

const RowActions = () => {
  return (
    <HStack w={'full'} justify={'center'}>
      <Tooltip label='Delete' hasArrow>
        <span>
          <IconButton
            variant="outline"
            aria-label="delete"
            icon={<FiTrash />}
          />
        </span>
      </Tooltip>
      <Tooltip label='Edit' hasArrow>
        <span>
          <IconButton
            variant="outline"
            aria-label="edit"
            icon={<FiEdit />}
          />
        </span>
      </Tooltip>
      <Tooltip label='View' hasArrow>
        <span>
          <IconButton
            variant="outline"
            aria-label="view"
            icon={<FiEye />}
          />
        </span>
      </Tooltip>
    </HStack>
  )
}

export default RowActions