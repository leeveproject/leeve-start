import Image from "next/image";
import { Container, Box } from "@chakra-ui/react";

export default function ThirdSection() {
  return (
    <section id="app">
      <Container
        maxWidth="100vw"
        backgroundColor="#115126"
        height={["300px", "500px", "500px", "630px", "730px"]}
      >
        <Box
          margin="0 auto"
          maxWidth="1500px"
          justifyContent="space-evenly"
          display={["block", "block", "flex", "flex"]}
        >
          <Box
            marginTop="50px"
            width={["100%", "100%", "70%", "70%"]}
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

            display={["none", "none", "flex", "flex"]}
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