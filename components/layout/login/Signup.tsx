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

export const Signup = () => {
  const router = useRouter();

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

  const mbtiArr = [
    "ISTJ",
    "ISFJ",
    "INFJ",
    "INTJ",
    "ISTP",
    "ISFP",
    "INFP",
    "INTP",
    "ESTJ",
    "ESFJ",
    "ENFJ",
    "ENTJ",
    "ESTP",
    "ESFP",
    "ENFP",
    "ENTP"
  ];
  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    setEmailInvalid(checkIsValid(emailReg, inputValue));
  };

  const handlePwInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setPw(inputValue);
    setPwInvalid(checkIsValid(pwReg, pw));
  };
  const handleSignupOnClick = () => {
    if (
      isConfirmPwInvalid ||
      checkIsValid(emailReg, email) ||
      checkIsValid(pwReg, pw)
    ) {
      return;
    }
    //signup
    router.push("/");
  };
  return (
    <>
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
          {mbtiArr.map((mbti) => (
            <option key={mbti}>{mbti}</option>
          ))}
        </Select>
      </FormControl>
      <Button
        width="100%"
        borderRadius={"2xl"}
        bgColor=" rgb(144, 187, 144)"
        _hover={{ bgColor: "green" }}
        onClick={handleSignupOnClick}
      >
        Sign Up
      </Button>
    </>
  );
};
