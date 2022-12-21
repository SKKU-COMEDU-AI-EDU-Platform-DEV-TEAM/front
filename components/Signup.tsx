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

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  const [isEmailInvalid, setEmailInvalid] = useState(false);
  const [isPwInvalid, setPwInvalid] = useState(false);
  const isConfirmPwInvalid = pw != confirmPw;

  const emailReg = new RegExp("^[a-zA-Z0-9]+@[a-zA-Z0-9.]+$");
  const pwReg = new RegExp(
    "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{6,}$"
  );

  const handleEmailInputChange = (e: any) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    if (emailReg.test(inputValue)) {
      setEmailInvalid(false);
    } else {
      setEmailInvalid(true);
    }
  };
  const handlePwInputChange = (e: any) => {
    const inputValue = e.target.value;
    setPw(inputValue);
    if (pwReg.test(inputValue)) {
      setPwInvalid(false);
    } else {
      setPwInvalid(true);
    }
    console.log(inputValue);
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
      pt={12}
    >
      <Stack direction="row" justifyContent={"space-between"} mb={10}>
        <Image
          w={"80%"}
          objectFit="contain"
          src="./DIHYEOKGONG.png"
          alt="site-logo"
        />
        <Image w={"10%"} objectFit="contain" src="./SKKU.png" alt="skku-logo" />
      </Stack>
      <FormControl mb={1} isRequired isInvalid={isEmailInvalid}>
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
      <FormControl mb={1} isRequired>
        <FormLabel fontSize={16}>Name</FormLabel>
        <Input
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          borderRadius="2xl"
          borderWidth={"2px"}
          borderColor={"rgb(144, 187, 144)"}
        />
      </FormControl>
      <FormControl mb={1} isRequired isInvalid={isPwInvalid}>
        <FormLabel fontSize={16}>Password</FormLabel>
        <Input
          type="password"
          value={pw}
          onChange={handlePwInputChange}
          borderRadius="2xl"
          borderWidth={"2px"}
          borderColor={"rgb(144, 187, 144)"}
        />
        {isPwInvalid && (
          <FormErrorMessage>
            Requirement: at least 6 characters, one capital letter, one
            lowercase letter, atleast one digit and one special charcter!
          </FormErrorMessage>
        )}
      </FormControl>
      <FormControl mb={1} isRequired isInvalid={isConfirmPwInvalid}>
        <FormLabel fontSize={16}>Confirm Password</FormLabel>
        <Input
          type="password"
          value={confirmPw}
          onChange={(e) => setConfirmPw(e.target.value)}
          borderRadius="2xl"
          borderWidth={"2px"}
          borderColor={"rgb(144, 187, 144)"}
        />
        {isConfirmPwInvalid && (
          <FormErrorMessage>Pw does not match.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl mb={10} isRequired>
        <FormLabel fontSize={16}>MBTI</FormLabel>
        <Select
          borderRadius="2xl"
          borderWidth={"2px"}
          borderColor={"rgb(144, 187, 144)"}
          placeholder="ISTJ"
        >
          <option>ISTJ</option>
          <option>ISFJ</option>
          <option>INFJ</option>
          <option>INTJ</option>
          <option>ISTP</option>
          <option>ISFP</option>
          <option>INFP</option>
          <option>INTP</option>
          <option>ESTJ</option>
          <option>ESFJ</option>
          <option>ENFJ</option>
          <option>ENTJ</option>
          <option>ESTP</option>
          <option>ESFP</option>
          <option>ENFP</option>
          <option>ENTP</option>
        </Select>
      </FormControl>
      <Button
        width="100%"
        borderRadius={"2xl"}
        bgColor=" rgb(144, 187, 144)"
        _hover={{ bgColor: "green" }}
      >
        Done
      </Button>
    </Box>
  );
};
