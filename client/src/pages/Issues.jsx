import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Issue from "./Issue";

const Issues = () => {
  return (
    <Box
      width={"100%"}
      boxShadow={
        "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;"
      }
      pt={"20px"}
      pb={"20px"}
      color={"#fff"}
    >
      <Box maxW={"760px"} m={"auto"} px={4}>
        <Issue />
        <Issue />
        <Issue />
      </Box>
    </Box>
  );
};

export default Issues;
