import { Box, Button, Container, Image, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const TestStart = () => {
  const router = useRouter();

  return (
    <>
      <Container maxW="95%" minH={150} fontSize={23} centerContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsa sit ad,
        possimus sunt quidem a omnis magni beatae! Quo, consequatur. Esse quidem
        quam in quia! Nisi pariatur sequi illum?
      </Container>
      <Box display="flex" justifyContent={"right"} mt={10}>
        <Button
          height="40px"
          width="30%"
          borderRadius={"2xl"}
          bgColor="rgb(144, 187, 144)"
          // alignContent={"center"}
          // alignItems={"center"}
          // verticalAlign={"center"}
          onClick={() => router.push("/test/ing")}
        >
          설문조사 시작
        </Button>
      </Box>
    </>
  );
};
