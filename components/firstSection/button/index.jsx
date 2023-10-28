import { Button } from "@chakra-ui/react";

export function ButtonAcess(props) {
  return (
    <Button colorScheme="green">
      {props.content}
    </Button>
  )
}