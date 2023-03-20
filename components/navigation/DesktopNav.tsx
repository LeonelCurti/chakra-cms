import React from "react";
import NextLink, { type LinkProps as NextLinkProps } from "next/link"
import { NavItem } from "../../types";
import {
  Box,
  Link as ChakraLink,
  LinkProps,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
} from "@chakra-ui/react";
import { DesktopSubNav } from "./DesktopSubNav";

type ChakraAndNextProps = LinkProps & NextLinkProps;

//ensure the children passed to PopoverTrigger is focusable and has a forwarded ref
const ChakraNextLink = React.forwardRef<HTMLAnchorElement, ChakraAndNextProps>(({ href, children, ...props }, ref) => {
  return (
    <NextLink href={href} passHref>
      <ChakraLink ref={ref} {...props}>
        {children}
      </ChakraLink>
    </NextLink>
  );
});

export const DesktopNav = ({ navItems }: { navItems: NavItem[] }) => {

  return (
    <Stack
      direction={"row"}
      spacing={6}
      alignItems="center"
      justifyContent={"center"}
      w={"full"}>
      {navItems.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <ChakraNextLink
                p={2}
                href={navItem.href ?? "#"}
                textTransform={"uppercase"}
                fontSize={"sm"}
                fontWeight={600}
                //color={'gray.600'}
                _hover={{
                  textDecoration: "none",
                  color: "blue.500",
                }}>
                {navItem.label}
              </ChakraNextLink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                boxShadow={"3xl"}
                bg={"white"}
                py={2}
                rounded={"sm"}
                minW={"xs"}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};
