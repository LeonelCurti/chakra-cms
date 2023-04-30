import React from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Box, Tfoot, Text } from "@chakra-ui/react";
import { dummyCategories } from '../../../utils/dummyCategories';
import { ActionsRow } from './actionsRow';
import { Category } from '../../../types';
import { Pagination } from '../pagination';

const columnHelper = createColumnHelper<Category>()

const columns = [
  columnHelper.display({
    id: 'image',
    header: () => 'Image',
    cell: () => <Box w={10} h={10} bg='gray.100' />
  }),
  columnHelper.accessor('name', {
    header: () => 'Name',
    cell: props => <>
      <Text>{props.renderValue()}</Text>
    </>
  }),
  columnHelper.accessor('slug', {
    header: () => 'Slug',
    cell: info => info.renderValue(),
  }),
  columnHelper.display({
    id: 'actions',
    header: () => 'Actions',
    cell: () => <ActionsRow />
  }),
]

export const CategoriesTable = () => {
  const table = useReactTable({
    data:dummyCategories,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <TableContainer>
      <Table>
        <Thead>
          {
            table.getHeaderGroups().map(headerGroup => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <Th key={header.id}>
                    {
                      header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())
                    }
                  </Th>
                ))}
              </Tr>
            ))
          }
        </Thead>
        <Tbody>
          {
            table.getRowModel().rows.map(row => (
              <Tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <Td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </Tr>
            ))
          }
        </Tbody>
        <Tfoot>
          <Tr>
            <Th colSpan={4}>
              <Pagination table={table} />
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  )
}