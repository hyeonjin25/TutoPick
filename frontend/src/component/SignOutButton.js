import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { AppColor } from "../utils/GlobalStyles";

export function SignOutButton({ onClick }) {
  return (
    <Button
      backgroundColor={AppColor.primary}
      onClick={onClick}
      w='110px'
      h='36px'
      color={AppColor.white}
      fontSize='16px'
    >
      Sign out
    </Button>
  );
}
