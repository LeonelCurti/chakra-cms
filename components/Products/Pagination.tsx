import React from 'react'
import { Table } from '@tanstack/react-table'
import { HStack, IconButton, Select, Text } from '@chakra-ui/react'
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'
import { Product } from './types'

const Pagination = ({ table }: { table: Table<Product> }) => {
  return (
    <HStack gap={2} justify={'flex-end'}>
      <IconButton
        variant={'link'}
        aria-label='arrow top left'
        icon={<FiChevronsLeft />}
        onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}
      />
      <IconButton
        variant={'link'}
        aria-label='arrow left'
        icon={<FiChevronLeft />}
        onClick={() => table.previousPage()}
        isDisabled={!table.getCanPreviousPage()}
      />
      <IconButton
        variant={'link'}
        aria-label='arrow right'
        icon={<FiChevronRight />}
        onClick={() => table.nextPage()}
        isDisabled={!table.getCanNextPage()}
      />
      <IconButton
        variant={'link'}
        aria-label='arrow top right'
        icon={<FiChevronsRight />}
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        isDisabled={!table.getCanNextPage()}
      />
      <Text>Page {table.getState().pagination.pageIndex + 1} of{' '}
        {table.getPageCount()}</Text>
      <Select
        size={'sm'}
        w={'auto'}
        value={table.getState().pagination.pageSize}
        onChange={e => {
          table.setPageSize(Number(e.target.value))
        }}
      >
        {[10, 20, 30, 40, 50].map(pageSize => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </Select>
    </HStack>
  )
}

export default Pagination