import { Box, Button, Center, Image, Text } from "@chakra-ui/react";
import React from "react";
import { AppColor } from "../utils/GlobalStyles";
import logo from "../img/logo.png";

const SignInPrompt = ({ onClick }) => {
  return (
    <Box w={"100%"} h='100vh'>
      <Center w={"100%"} h='80%'>
        <Box textAlign={"center"}>
          <Image src={logo} alt='TUTOPICK' w='267px' h='40px' m='0 auto' />
          <br />
          <br />
          <Button
            onClick={onClick}
            bg={AppColor.primary}
            color={AppColor.white}
          >
            Sign in with NEAR Wallet
          </Button>
        </Box>
      </Center>
    </Box>
  );
};

export default SignInPrompt;
