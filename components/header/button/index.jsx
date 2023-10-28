import { Button } from "@chakra-ui/react";

export function ButtonAcess(props) {
  return (
    <Button
      variant="ghost"
      colorScheme='teal'
    >
      {props.content}
    </Button>
  )
}