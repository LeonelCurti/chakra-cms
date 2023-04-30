import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, BoxProps, Container } from '@chakra-ui/react'
import React from 'react'
import { RxDividerVertical } from "react-icons/rx";

export const Breadcrum = (props: BoxProps) => {
  return (
    <Box {...props}>
      <Container maxW={'container.xl'} >
        <Breadcrumb
          spacing='1'
          color='gray.700'
          separator={<RxDividerVertical />}
          fontSize={'sm'}
        >
          <BreadcrumbItem >
            <BreadcrumbLink
              _hover={{ textDecoration: 'none' }}
              href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink _hover={{ textDecoration: 'none' }} href='#'>Category</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink
              fontWeight={700}
              _hover={{ textDecoration: 'none' }}
              href='#'>Single Product
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Container>
    </Box>
  )
}