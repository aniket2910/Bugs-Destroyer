import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ShowCode from "../components/ShowCode";

const Issue = () => {
  return (
    <Box
      w={"100%"}
      m={"20px 0"}
      border={"1px solid #ffffff12"}
      borderTop={"10px solid #161B22"}
      boxShadow={
        "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"
      }
      rounded={"10px"}
      overflow={"hidden"}
    >
      <Flex w={"100%"} justifyContent={"space-between"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-end"}
          w={"20%"}
          borderRight={"10px solid #161B22"}
          pr={"10px"}
          p={"10px"}
        >
          <Avatar
            size={"sm"}
            src={
              "https://149351115.v2.pressablecdn.com/wp-content/uploads/2020/03/Dark-Mode-technical-1.png"
            }
          />
          <Text
            fontSize={"12px"}
            fontWeight={"100"}
            mt={"10px"}
            textAlign={"right"}
          >
            Aniket Solanki
          </Text>
        </Box>
        <Box p={"10px"} flex={1}>
          <Box>
            <Text fontSize={"22px"} fontWeight={"100"}>
              JavaScript Runtime Error: Please help me out
            </Text>
          </Box>
          <Box mt={"15px"}>
            <Text fontSize={"15px"} fontWeight={"200"} letterSpacing={"1px"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              maxime iste, illum minima iusto hic magnam fugiat, tempore ea illo
              quis natus dolore voluptatibus! Adipisci aperiam corrupti
              excepturi placeat saepe!
            </Text>
          </Box>
          <Box
            rounded={"10px"}
            overflow={"hidden"}
            p={"10px"}
            mt={"15px"}
            borderTop={"10px solid #20232A"}
            backgroundColor={"#282C34"}
          >
            <Text fontSize={"15px"} fontWeight={"200"} letterSpacing={"1px"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              dicta ea impedit provident reiciendis maiores inventore omnis
              atque labore consectetur.
            </Text>
          </Box>
          <Box>
            <ShowCode />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Issue;
