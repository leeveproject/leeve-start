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
          height="800px"
          maxWidth="1500px"
        >
          <Box
            marginTop="50px"
          >
            <Box>
              <Text
                fontSize="6xl"
                color="#351b15"
              >
                Nossos serviços
              </Text>
            </Box>
            <Box
              display="flex"
              margin="0 auto"
              marginTop="80px"
              maxWidth="1200px"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Image
                  width="200"
                  height="200"
                  src="/image/box.image.svg"
                  alt="image"
                />
                <Text
                  fontSize="2xl"
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
      </Container>
    </section >
  )
}