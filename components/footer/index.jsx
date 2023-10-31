"use client"

import Image from "next/image";
import { CheckCircleIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { List, ListItem, ListIcon, Container, Box, Text, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <footer id="footer">
      <Container
        display="flex"
        height="400px"
        maxWidth="100%"
        alignItems="center"
        justifyContent="center"
        backgroundColor="#56cf7e84"
      >
        <Box
          width="1500px"
          margin="0 auto"
        >
          <Box
            display="flex"
            alignItems="center"
            marginBottom="20px"
            justifyContent="space-between"
          >
            <Box>
              <Image
                width="80"
                height="80"
                src="/logo/image.svg"
                alt="image"
              />
            </Box>
            <Box>
              <List spacing="3">
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  <a href="#">Home</a>
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  <a href="#services">Services</a>
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  <a href="#app">App</a>
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  <a href="#email">Email</a>
                </ListItem>
              </List>
            </Box>
            <Box>
              <Text
                fontSize="3xl"
                color="#3D221B"
              >
                Social
              </Text>
              <Box
                marginTop="10px"
              >
                <List>
                  <ListItem
                    display="flex"
                    flexDirection="column"
                  >
                    <Link
                      href="https://linkedin.com/company/leeve-app"
                      isExternal>
                      Linkedin <ExternalLinkIcon
                        max="2px"
                      />
                    </Link>
                    <Link
                      href="mailto:leeve.app@hotmail.com"
                      isExternal
                    >
                      Gmail
                      <ExternalLinkIcon
                        max="2px"
                      />
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Box>
          <Box
            padding="20px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderTop="1px solid #56CF7E"
          >
            <Text
              fontSize="2xl"
            >
              Leeve - Todos os direitos reservados
            </Text>
          </Box>
        </Box>
      </Container>
    </footer >
  )
}