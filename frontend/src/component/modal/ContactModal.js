import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import React from "react";
import { AppColor } from "../../utils/GlobalStyles";

function ContactModal({ isOpen, onClose, onAlertOpen }) {
  const initialRef = React.useRef(null);

  return (
    <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Offering private lessons</ModalHeader>
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Hour</FormLabel>
            <NumInput colorScheme='purple' max={5} />
          </FormControl>
          <FormControl>
            <FormLabel>Count</FormLabel>
            <NumInput colorScheme='purple' max={30} />
          </FormControl>
          <FormControl>
            <FormLabel>Cost (won)</FormLabel>
            <NumInput
              colorScheme='purple'
              defaultValue={10000}
              min={10000}
              max={1000000}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={() => {
              onAlertOpen();
              onClose();
            }}
            colorScheme='purple'
            bg={AppColor.primary}
            mr={3}
          >
            Submit
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

const NumInput = ({ defaultValue = 1, min = 1, max }) => {
  return (
    <NumberInput defaultValue={defaultValue} min={min} max={max}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default ContactModal;
