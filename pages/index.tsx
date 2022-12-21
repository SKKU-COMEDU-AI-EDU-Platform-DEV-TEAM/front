import { Box, Center, Img, Stack, Text } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { typeSelector, userState } from "../recoil";
import { useRecoilState, useRecoilValue } from "recoil";
export default function Home() {
  // const [user, setUser] = useRecoilState(userState);
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
