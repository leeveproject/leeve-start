"use client"

import Image from "next/image";
import { NavBar } from "./nav";
import { ButtonAcess } from "./button";
import { useState, useEffect } from "react";
import { Container, Box } from "@chakra-ui/react";

export default function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) {
        setIsHeaderVisible(false)
      } else {
        setIsHeaderVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
  })


  return (
    <header
      id="header"
      style={{ display: isHeaderVisible ? "block" : "none" }}
    >
      <Container
        zIndex="1"
        maxWidth="100vw"
        position="fixed"
        backgroundColor="#fff"
        borderBottom="1px solid #f3f3f3"
      >
        <Box
          margin="0 auto"
          maxWidth="1500px"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              marginTop="5px"
              marginBottom="5px"
            >
              <Image
                width="50"
                height="50"
                src="/logo/image.svg"
                alt="image"
              />
            </Box>
            <Box>

              <NavBar />

            </Box>
            <Box>
              <ButtonAcess
                content="Entrar" />
            </Box>
          </Box>
        </Box>
      </Container>
    </header>
  )
}