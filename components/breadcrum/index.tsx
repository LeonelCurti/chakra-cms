import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

export const Breadcrum = () => {
  return (
    <Breadcrumb      
      spacing='8px'
      color='gray.600'
      separator={<FiChevronRight  />}
    >
      <BreadcrumbItem>
        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href='#'>Category</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href='#'>Single Product</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}