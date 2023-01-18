import React from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Checkbox, Box, Tfoot, Text, Link } from "@chakra-ui/react";
import { data } from '../../Utils/dummyProducts';
import RowActions from './ProductActionsRow';
import { Product } from '../Products/types';
import Pagination from './Pagination';
import NextLink from "next/link"
const columnHelper = createColumnHelper<Product>()

const columns = [
  columnHelper.display({
    id: 'select',
    header: ({ table }) => <Checkbox
      isChecked={table.getIsAllRowsSelected()} isIndeterminate={table.getIsSomeRowsSelected()} onChange={table.getToggleAllRowsSelectedHandler()} />,
    cell: ({ row }) => <Checkbox
      isChecked={row.getIsSelected()}
      isIndeterminate={row.getIsSomeSelected()}
      onChange={row.getToggleSelectedHandler()} />,
  }),
  columnHelper.display({
    id: 'image',
    header: () => 'Image',
    cell: () => <Box w={10} h={10} bg='gray.100' />
  }),
  columnHelper.accessor('name', {
    header: () => 'Name',
    cell: props => <>
      <NextLink 
        href={`/admin/products/${props.row.original.sku}`} passHref
        >
        <Link>{props.renderValue()}</Link>
      </NextLink>
      <Text fontSize='xs'>{`SKU: ${props.row.original.sku}`}</Text>
    </>
  }),
  columnHelper.accessor('category', {
    header: () => 'Category',
    cell: info => info.renderValue(),
  }),
  columnHelper.accessor('price', {
    header: () => 'Price',
    cell: info => info.renderValue(),
  }),
  columnHelper.display({
    id: 'actions',
    header: () => 'Actions',
    cell: (props) => <RowActions product={props.row.original} />
  }),
]

const ProductsTable = () => {
  const [rowSelection, setRowSelection] = React.useState({})
  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
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
            <Th colSpan={6}>
              <Pagination table={table} />
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  )
}


export default ProductsTable