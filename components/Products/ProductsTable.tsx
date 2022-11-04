import React from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Checkbox, Box } from "@chakra-ui/react";
import { data } from './dummyData';
import RowActions from './RowActions';


export type Product = {
  sku: string;
  category: string;
  price: number;
};

const columnHelper = createColumnHelper<Product>()

const columns = [
  columnHelper.display({
    id: 'select',
    header: () => <Checkbox></Checkbox>,
    cell: () => <Checkbox></Checkbox>,
  }),
  columnHelper.display({
    id: 'image',
    header: () => 'Image',
    cell: () => <Box w={10} h={10} bg='gray.100' />
  }),
  columnHelper.accessor('sku', {
    header: () => 'SKU',
    cell: info => info.renderValue(),
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
    cell: () => <RowActions />
  }),
]

const ProductsTable = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
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
      </Table>
    </TableContainer>
  )
}


export default ProductsTable