import { Button } from "@chakra-ui/react";

export function ButtonAcess(props) {
  return (
    <Button colorScheme="green">
      <a href="#email">
        {props.content}
      </a>
    </Button>
  )
}