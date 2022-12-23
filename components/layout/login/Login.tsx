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
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { checkIsValid } from "../../../config";

export const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isEmailInvalid, setEmailInvalid] = useState(false);

  const emailReg = new RegExp("^[a-zA-Z0-9]+@[a-zA-Z0-9.]+$");

  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    setEmailInvalid(checkIsValid(emailReg, inputValue));
  };

  const handleLoginOnClick = () => {
    if (checkIsValid(emailReg, email)) {
      return;
    }
    //login
    console.log(isEmailInvalid);
    router.push("/main");
  };

  return (
    <>
      <Stack direction="row" justifyContent={"space-between"} mb={10}>
        <Image
          w={"80%"}
          objectFit="contain"
          src="/DIHYEOKGONG.png"
          alt="DIHYEOKGONG"
        />
        <Image w={"10%"} objectFit="contain" src="/SKKU.png" alt="SKKU" />
      </Stack>
      <FormControl mb={8} isRequired isInvalid={isEmailInvalid}>
        <FormLabel fontSize={16}>Email</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={handleEmailInputChange}
          borderRadius="2xl"
          borderWidth={"2px"}
          borderColor={"rgb(144, 187, 144)"}
        />
        {isEmailInvalid && (
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
        onClick={handleLoginOnClick}
        mb={5}
      >
        Login
      </Button>
      <Button
        height="40px"
        width="100%"
        borderRadius={"2xl"}
        bgColor="#DD9D9"
        onClick={() => router.push("/signup")}
      >
        Sign Up
      </Button>
    </>
  );
};
