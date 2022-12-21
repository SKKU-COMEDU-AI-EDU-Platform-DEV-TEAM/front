import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Image,
  Input,
  Select,
  Stack,
  Text
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { LoginValue } from "../types";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isInvalid, setInvalid] = useState(false);
  const emailReg = new RegExp("^[a-zA-Z0-9]+@[a-zA-Z0-9.]+$");
  const handleEmailInputChange = (e: any) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    if (emailReg.test(inputValue)) {
      setInvalid(false);
    } else {
      setInvalid(true);
    }
  };
  return (
    <Box
      position="fixed"
      top="50%"
      left="50%"
      transform={"translate(-50%,-50%)"}
      bg="#ffffff"
      boxShadow={"base"}
      w="xl"
      borderWidth="1px"
      borderRadius="2xl"
      p={16}
    >
      <Stack direction="row" justifyContent={"space-between"} mb={10}>
        <Image
          w={"80%"}
          objectFit="contain"
          src="./DIHYEOKGONG.png"
          alt="Dan Abramov"
        />
        <Image
          w={"10%"}
          objectFit="contain"
          src="./SKKU.png"
          alt="Dan Abramov"
        />
      </Stack>
      <FormControl mb={8} isRequired isInvalid={isInvalid}>
        <FormLabel fontSize={16}>Email</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={handleEmailInputChange}
          borderRadius="2xl"
          borderWidth={"2px"}
          borderColor={"rgb(144, 187, 144)"}
        />
        {isInvalid && (
          <FormErrorMessage>Email address is invalid.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl mb={14} isRequired>
        <FormLabel fontSize={16}>Password</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          borderRadius="2xl"
          borderWidth={"2px"}
          borderColor={"rgb(144, 187, 144)"}
        />
      </FormControl>
      <Button
        width="100%"
        borderRadius={"2xl"}
        bgColor=" rgb(144, 187, 144)"
        _hover={{ bgColor: "green" }}
        mb={5}
      >
        Login
      </Button>
      <Button height="40px" width="100%" borderRadius={"2xl"} bgColor="#DD9D9">
        Sign Up
      </Button>
    </Box>
  );
};
