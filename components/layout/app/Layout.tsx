import { Center } from "@chakra-ui/react";
import { LayoutDefaultProps } from "../../../types";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: LayoutDefaultProps) {
  return (
    <>
      <Header />
      <Center pt={55} minH="90vh" alignItems={"start"}>
        {children}
      </Center>
      <Footer />
    </>
  );
}
