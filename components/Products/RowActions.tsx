import { HStack, IconButton, Tooltip } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { FiEdit, FiEye, FiTrash } from 'react-icons/fi'
import { Product } from './types'

const RowActions = ({ product }: { product: Product }) => {
  const router = useRouter()

  const handleDelete = () => {
    alert(`Deleting poduct ${product.name}`)
  }
  const handleEdit = () => {
    router.push(`/admin/products/${product.sku}`)
  }
  const handleView = () => {
    router.push(`/products/${product.slug}`)
  }

  return (
    <HStack w={'full'} justify={'center'}>
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
    </HStack>
  )
}

export default RowActions