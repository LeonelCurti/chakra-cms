import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, BoxProps } from '@chakra-ui/react'
import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

export const Breadcrum = (props: BoxProps) => {
  return (
    <Box {...props}>
      <Breadcrumb
        spacing='1'
        color='gray.600'
        separator={<FiChevronRight />}
        fontSize={{base:'xs', md:'sm'}}
      >
        <BreadcrumbItem>
          <BreadcrumbLink  href='#'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Category</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>Single Product</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  )
}