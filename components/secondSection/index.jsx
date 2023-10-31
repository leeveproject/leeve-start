import Image from "next/image";
import { Container, Box, Text } from "@chakra-ui/react";

export default function SecondSection() {
  return (
    <section id="services">
      <Container
        maxWidth="100vw"
      >
        <Box
          margin="0 auto"
          maxWidth="1500px"
          height={["1200px", "1200px", "800px", "800px"]}
        >
          <Box
            marginTop="50px"
          >
            <Box>
              <Text
                color="#351b15"
                fontSize={["4xl", "4xl", "6xl", "6xl"]}
              >
                Nossos serviços
              </Text>
            </Box>

            <Box
              display="flex"
              margin="0 auto"
              marginTop="80px"
              maxWidth="1500px"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                justifyContent="space-between"
                display={["block", "block", "flex", "flex"]}
                width={["220px", "220px", "1200px", "1200px"]}
              >
                <Box>
                  <Image
                    width="200"
                    height="200"
                    src="/image/box.image.svg"
                    alt="image"
                  />
                  <Text
                    fontSize={"2xl"}
                  >
                    Gerenciamento de <br />
                    produto, caixa e <br />
                    estoque.
                  </Text>
                </Box>
                <Box>
                  <Image
                    width="200"
                    height="200"
                    src="/image/money.image.svg"
                    alt="image"
                  />
                  <Text
                    fontSize="2xl"
                  >
                    Controle de gastos <br />
                    e lucros mensais.
                  </Text>
                </Box>
                <Box>
                  <Image
                    width="200"
                    height="200"
                    src="/image/people.image.svg"
                    alt="image"
                  />
                  <Text
                    fontSize="2xl"
                  >
                    Gestão e controle <br />
                    de funcionários.
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

    </section >
  )
}