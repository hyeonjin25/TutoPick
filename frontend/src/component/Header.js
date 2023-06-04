import { Search2Icon, SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import {
  ContractIdState,
  IsSignedInState,
  WalletState,
} from "../state/RecoilState";
import { AppColor } from "../utils/GlobalStyles";
import { SignOutButton } from "./SignOutButton";
import logo from "../img/logo.png";

function Header({ search = false, wallet }) {
  return (
    <Flex h='10vh' align={"center"} mx={"2%"}>
      <Flex gap={3} align={"center"}>
        <Image src={logo} alt='TUTOPICK' w='267px' h='40px' s />
        {/* searchbar */}
        {search && (
          <InputGroup>
            <InputLeftElement pointerEvents='none'>
              <SearchIcon color={AppColor.darkgray} />
            </InputLeftElement>
            <Input
              variant='filled'
              placeholder='Search'
              textAlign='center'
              bg={AppColor.gray}
              borderRadius='48px'
              w='532px'
              h='57px'
            />
          </InputGroup>
        )}
      </Flex>
      <Spacer />
      <SignOutButton onClick={() => wallet.signOut()} />
    </Flex>
  );
}

export default Header;
