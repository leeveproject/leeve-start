import Image from "next/image";
import { NavBar } from "./nav";
import { ButtonAcess } from "./button";
import { Container, Box } from "@chakra-ui/react";

export default function Header() {
  return (
    <header id="header">
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
                width="80"
                height="80"
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