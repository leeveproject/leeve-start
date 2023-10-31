"use client"

import React from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

export function NavBar() {
  return (
    <React.Fragment>
      <Box
        display={["none", "none", "flex", "flex"]}
      >
        <Breadcrumb
          separator={<ChevronRightIcon color="#b8b8b8" />}
        >

          <BreadcrumbItem>
            <BreadcrumbLink><a href="#">Home</a></BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink><a href="#services">Services</a></BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink><a href="#app">App</a></BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink><a href="#email">Email</a></BreadcrumbLink>
          </BreadcrumbItem>

        </Breadcrumb>
      </Box>
    </React.Fragment>
  )
}