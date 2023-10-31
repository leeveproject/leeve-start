import Image from "next/image";
import { ButtonAcess } from "./button";
import { Box, Container, Text } from "@chakra-ui/react";

export default function firstSection() {
  return (
    <section id="home">
      <Container
        maxWidth="100vw"
        paddingTop={["20px", "20px", "90px", "90px"]}
      >
        <Box
          margin="0 auto"
          maxWidth="1500px"
          display={["block", "block", "flex", "flex"]}
        >
          <Box
            height={[400, 400, 600, 800]}
            backgroundColor="#56cf7e84"
            width={["100%", "100%", "40%", "40%"]}
          >
            <Box
              margin="80px 10px 0px 10px"

            >
              <Box>
                <Text
                  color="#351b15"
                  fontSize={["5xl", "5xl", "5xl", "6xl"]}
                >
                  O App que <br />
                  facilita sua <br />
                  rotina.
                </Text>
              </Box>
              <Box>
                <Text
                  color="#351b15"
                  fontSize={["1xl", "1xl", "2xl", "3xl"]}
                >
                  Gerencie seu empreendimento de forma <br />
                  simples e planejada.
                </Text>
              </Box>
              <Box
                marginTop="20px"
              >
                <ButtonAcess
                  content="Saiba mais"
                />
              </Box>
            </Box>
          </Box>
          <Box
            width={["100%", "100%", "60%", "60%"]}
          >
            <Box
              marginTop="50px"
              marginBottom={["150px", "0px", "0px", "0px"]}
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
    </section>
  )
}