import { HStack, IconButton, Tooltip } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { FiEdit, FiEye, FiTrash } from 'react-icons/fi'

export const ActionsRow = () => {
  const router = useRouter()

  const handleDelete = () => {
    alert(`Delete poduct category`)
  }
  const handleEdit = () => {
    alert(`Edit poduct category`)
  }
  const handleView = () => {
    alert(`View poduct category`)
  }

  return (
    <HStack w={'full'} justify={'center'}>
      <Tooltip label='Edit' hasArrow>
        <span>
          <IconButton
            variant="outline"
            aria-label="edit"
            onClick={handleEdit}
            icon={<FiEdit />}
          />
        </span>
      </Tooltip>
      <Tooltip label='View' hasArrow>
        <span>
          <IconButton
            variant="outline"
            aria-label="view"
            onClick={handleView}
            icon={<FiEye />}
          />
        </span>
      </Tooltip>
      <Tooltip label='Delete' hasArrow>
        <span>
          <IconButton
            variant="outline"
            aria-label="delete"
            onClick={handleDelete}
            icon={<FiTrash />}
          />
        </span>
      </Tooltip>
    </HStack>
  )
}
