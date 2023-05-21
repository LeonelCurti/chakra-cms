import React from "react";
import NextLink from "next/link"
import {
  Box,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
} from "@chakra-ui/react";
import { DesktopSubNav } from "./DesktopSubNav";
import { PublicNavItem } from "../navItems";

export const DesktopNav = ({ navItems }: { navItems: PublicNavItem[] }) => {

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
              <Link
                as={NextLink}
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"lg"}  
                _hover={{
                  textDecoration: "none",
                  color: "blue.500",
                }}>
                {navItem.label}
              </Link>
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
