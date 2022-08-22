import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link as NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux/auth/action";
import { RESET_RES_MSG } from "../../redux/auth/actionTypes";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [registerData, setRegisterData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const { loading, res_msg, res_type } = useSelector((store) => store.auth);

  const handleChange = (e) => {
    let { name, value } = e.target;
    // console.log(name, value);
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

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
        navigate("/login");
      }, 900);
    }
  }, [res_msg, res_type]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(registerData);
    dispatch(signup(registerData));
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={"#181818"}
      mt={"-64px"}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading color={"#fff"} fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
        </Stack>
        <Box rounded={"lg"} color="#fff" bg={"#101010"} boxShadow={"lg"} p={8}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      onChange={handleChange}
                      required
                      name="firstname"
                      type="text"
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      onChange={handleChange}
                      required
                      name="lastname"
                      type="text"
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  onChange={handleChange}
                  required
                  name="email"
                  type="email"
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    onChange={handleChange}
                    required
                    name="password"
                    type={showPassword ? "text" : "password"}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      type="submit"
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  type="submit"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  {loading ? <Spinner /> : "Sign up"}
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Text as={"span"} display={"inline-block"} color={"blue.400"}>
                    <NavLink to="/login">Login</NavLink>
                  </Text>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
