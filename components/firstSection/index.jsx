import Image from "next/image";
import { ButtonAcess } from "./button";
import { Box, Container, Text } from "@chakra-ui/react";

export default function firstSection() {
  return (
    <Container
      maxWidth="100vw"
      paddingTop="90px"
    >
      <Box
        display="flex"
        margin="0 auto"
        maxWidth="1500px"
      >
        <Box
          width="40%"
          height="750px"
          backgroundColor="#56cf7e84"
        >
          <Box
            margin="80px 10px 0px 10px"

          >
            <Box>
              <Text
                fontSize="6xl"
                color="#351b15"
              >
                O App que <br />
                facilita sua <br />
                rotina.
              </Text>
            </Box>
            <Box>
              <Text
                fontSize="3xl"
                color="#351b15"
              >
                Gerencie seu empreendimento de forma <br />
                simples e planejada.
              </Text>
            </Box>
            <Box>
              <ButtonAcess
                content="Saiba mais"
              />
            </Box>
          </Box>
        </Box>
        <Box
          width="60%"
        >
          <Box
            marginTop="50px"
          >
            <Image
              width="900"
              height="900"
              src="/image/mac.image.svg"
              alt="image"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}