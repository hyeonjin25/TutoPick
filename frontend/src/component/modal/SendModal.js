import {
  Button,
  FormControl,
  FormLabel,
  Input,
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
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { sendMoney } from "../../nearApi/nearApi";
import {
  ContractIdState,
  IsSignedInState,
  WalletState,
} from "../../state/RecoilState";
import { AppColor } from "../../utils/GlobalStyles";

function SendModal({ isOpen, onClose, onAlertOpen }) {
  const initialRef = React.useRef(null);

  const [coin, setCoin] = useState(5);
  const isSignedIn = useRecoilValue(IsSignedInState);
  const contractId = useRecoilValue(ContractIdState);
  const wallet = useRecoilValue(WalletState);

  console.log(coin);

  return (
    <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Send your coin</ModalHeader>
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Cost (near)</FormLabel>
            <Input
              colorScheme='purple'
              value={coin}
              onChange={(event) => setCoin(event.target.value)}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={() => {
              sendMoney({
                wallet: wallet,
                contractId: contractId,
                amount: coin,
                receivedId: "toystory.testnet",
              });

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

export default SendModal;
