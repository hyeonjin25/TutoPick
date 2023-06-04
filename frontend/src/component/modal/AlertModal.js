import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";

function AlertModal({ isOpen, onClose, title, content }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Your message has been sent successfully!</ModalHeader>
        <ModalBody pb={6}>
          <Text fontSize='lg'>Please wait for a response</Text>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Ok</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AlertModal;
