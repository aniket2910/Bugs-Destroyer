import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login } from "../../redux/auth/action";
import { RESET_RES_MSG } from "../../redux/auth/actionTypes";

export default function Login() {
  const [signinData, setSigninData] = useState({});
  const dispatch = useDispatch();
  const toast = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const { loading, authStatus, res_msg, res_type } = useSelector(
    (store) => store.auth
  );
  let from = location.state?.from?.pathname || "/";
  const handleChange = (e) => {
    let { name, value } = e.target;
    setSigninData({
      ...signinData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (authStatus) {
      navigate(from, { replace: true });
    }
  }, [authStatus]);

  useEffect(() => {
    if (res_msg !== "" && res_type !== "") {
      toast({
        duration: 1000,
        isClosable: true,
        status: res_type,
        title: res_msg,
      });
      setTimeout(() => {
        dispatch({
          type: RESET_RES_MSG,
        });
      }, 500);
    }
    if (res_type == "success") {
      setTimeout(() => {
        navigate("/");
      }, 900);
    }
  }, [res_msg, res_type]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(signinData);
    dispatch(login(signinData));
  };
  return (
    <Flex
      minH={"100vh"}
      mt={"-64px"}
      align={"center"}
      justify={"center"}
      bg={"#181818"}
      color={"#fff"}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box rounded={"lg"} bg={"#101010"} boxShadow={"lg"} p={8}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  onChange={handleChange}
                  required
                  name="email"
                  type="email"
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  onChange={handleChange}
                  name="password"
                  type="password"
                  required
                />
              </FormControl>
              <Stack spacing={4}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"flex-end"}
                ></Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  type="submit"
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  {loading ? <Spinner /> : "Sign in"}
                </Button>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"flex-end"}
                >
                  <Text>
                    Don't have an Account ?
                    <Link to="/signup">
                      <Text color={"blue.400"} as="span">
                        {" "}
                        Signup
                      </Text>
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
