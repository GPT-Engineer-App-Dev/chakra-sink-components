import { useState } from "react";
import { Container, VStack, Button, Input, FormControl, FormLabel, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Alert, AlertIcon, AlertTitle, AlertDescription, Box } from "@chakra-ui/react";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showAlert, setShowAlert] = useState(false);

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Button colorScheme="teal" onClick={onOpen}>Open Modal</Button>
        <Button colorScheme="red" onClick={() => setShowAlert(true)}>Show Alert</Button>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button colorScheme="blue">Submit</Button>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            This is the content of the modal.
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {showAlert && (
        <Alert status="error" mt={4}>
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>Error!</AlertTitle>
            <AlertDescription>
              This is an error alert.
            </AlertDescription>
          </Box>
          <Button onClick={() => setShowAlert(false)} ml={4}>
            Close
          </Button>
        </Alert>
      )}
    </Container>
  );
};

export default Index;