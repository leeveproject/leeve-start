"use client"

import axios from "axios";
import { useState } from "react";
import { Button, Input } from "@chakra-ui/react";
import { Container, Box, Text } from "@chakra-ui/react";

export default function FourthSection() {
  const [email, setEmail] = useState("");

  async function handleEmail(e) {
    e.preventDefault()
    try {
      await axios.post("/api/email", { email })
    } catch (error) {
      console.log("erro na section: " + error)
    }
  }

  return (
    <section id="email">
      <Container
        maxWidth="100vw"
      >
        <Box
          height="800px"
          display="flex"
          margin="0 auto"
          maxWidth="1500px"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            margin="0 auto"
            maxWidth="1000px"
          >
            <Text
              fontSize="6xl"
              color="#115126"
            >
              Inscreva-se na nossa newsletter
            </Text>
            <Box
              maxWidth="500px"
              margin="0 auto"
              marginTop="10px"
              color="#3D221B"
            >

              <Text
                fontSize="3xl"
              >
                Saiba tudo sobre nosso produto.
              </Text>
            </Box>
            <Box
              marginTop="30px"
            >
              <form onSubmit={handleEmail}>
                <Box>
                  <Input
                    type="email"
                    value={email}
                    placeholder="Digite seu melhor email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Box>
                <Box>
                  <Button
                    type="submit"
                    width="100%"
                    color="#fff"
                    marginTop="10px"
                    colorScheme="green"
                  >
                    Receber
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>

      </Container>
    </section>
  )
}