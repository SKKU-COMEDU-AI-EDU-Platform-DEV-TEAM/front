import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Icon,
  Stack,
  Text
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { pointState, typeSelector, userState } from "../../../recoil";
import { GiRoundStar } from "react-icons/gi";
import { TbDiamonds } from "react-icons/tb";

export const Dashboard = () => {
  const user = useRecoilValue(userState);
  const type = useRecoilValue(typeSelector);
  const point = useRecoilValue(pointState);
  return (
    <Stack
      direction={"column"}
      w={{ base: "full", xl: "container.xl" }}
      justifyContent={"space-between"}
      verticalAlign="center"
      h="600px"
    >
      <Stack
        direction={"row"}
        spacing="100"
        w={{ base: "full", xl: "container.xl" }}
        justifyContent="center"
        p={30}
        verticalAlign={"center"}
      >
        <Box
          p={5}
          width="500px"
          bg="#F5F5F5"
          boxShadow={"base"}
          minH={"180"}
          borderRadius="2xl"
        >
          <Flex>
            <Avatar m={10} size="2xl" bg="gray.500" src="#" />
            <Stack w={500}>
              <Text fontSize={30} textAlign={"center"} mb={5} fontWeight="bold">
                {user.userName}
              </Text>
              {/* <Text
                  fontSize={18}
                  textAlign={"center"}
                  color=" rgb(144, 187, 144)"
                  fontWeight={"bold"}
                >
                  [학습 진행 상황]
                </Text> */}
              <Text
                color="rgb(144, 187, 144)"
                fontSize={15}
                textAlign={"center"}
                fontWeight={"bold"}
              >
                진행상황 어떻게 들어가면 좋을까
              </Text>
              {user.type == 1 && (
                <Box
                  alignSelf={"center"}
                  // w="200px"
                  // boxShadow={"base"}
                  // bg="#ffffff"
                >
                  <Text
                    mb={3}
                    fontStyle={"italic"}
                    fontSize={18}
                    textAlign="center"
                  >
                    <Icon as={GiRoundStar} pt="1" mr="1" color="yellow.500" />
                    Lv.{point.level}
                    <Icon
                      as={TbDiamonds}
                      pt="1"
                      ml="2"
                      mr="1"
                      color="yellow.500"
                    />
                    exp. {point.expValue}
                  </Text>
                </Box>
              )}
              <Button
                alignSelf={"center"}
                size="md"
                height="40px"
                width="180px"
                borderRadius={"2xl"}
                bgColor=" rgb(144, 187, 144)"
              >
                학습 바로가기
              </Button>
            </Stack>
          </Flex>
        </Box>
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
      </Stack>
      {/* <Box width="100px" bg="#d1d1d1" h={"100px"}></Box> */}
    </Stack>
  );
};
