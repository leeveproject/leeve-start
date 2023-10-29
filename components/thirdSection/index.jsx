import Image from "next/image";
import { Container, Box } from "@chakra-ui/react";

export default function ThirdSection() {
  return (
    <section id="app">
      <Container
        height="730px"
        maxWidth="100vw"
        backgroundColor="#115126"
      >
        <Box
          display="flex"
          margin="0 auto"
          maxWidth="1500px"
          justifyContent="space-evenly"
        >
          <Box
            width="70%"
            marginTop="50px"
          >
            <Image
              width="900"
              height="900"
              src="/image/macgreen.image.svg"
              alt="image"
            />
          </Box>
          <Box
            width="30%"
          >
            <Image
              width="500"
              height="500"
              src="/image/text.image.svg"
              alt="image"
            />
          </Box>
        </Box>
      </Container>
    </section>
  )
}