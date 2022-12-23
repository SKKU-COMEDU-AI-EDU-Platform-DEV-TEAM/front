import { Box, Text } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { typeSelector } from "../../../recoil";

export const TypeDescription = () => {
  const type = useRecoilValue(typeSelector);
  return (
    <Box
      p={30}
      verticalAlign="space-between"
      bg="#F5F5F5"
      minH={"180"}
      width="400px"
      borderRadius="2xl"
      boxShadow={"base"}
    >
      <Text mt={5} fontSize={25} fontWeight="bold" textAlign={"center"}>
        나는 <span id="type">{type.type}</span> 유형!
      </Text>
      <Text mt={10} fontSize={20} textAlign={"left"}>
        {type.description}
      </Text>
    </Box>
  );
};
