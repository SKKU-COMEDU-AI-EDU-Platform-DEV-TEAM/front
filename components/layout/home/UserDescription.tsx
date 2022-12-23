import { Avatar, Box, Button, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { pointState, typeSelector, userState } from "../../../recoil";
import { GiRoundStar } from "react-icons/gi";
import { TbDiamonds } from "react-icons/tb";
import { useRouter } from "next/router";

export const UserDescription = () => {
  const user = useRecoilValue(userState);
  const point = useRecoilValue(pointState);
  const router = useRouter();
  return (
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
          <Text
            color="rgb(144, 187, 144)"
            fontSize={15}
            textAlign={"center"}
            fontWeight={"bold"}
          >
            진행상황 어떻게 들어가면 좋을까
          </Text>
          {user.type == 1 && (
            <Box alignSelf={"center"}>
              <Text
                mb={3}
                fontStyle={"italic"}
                fontSize={18}
                textAlign="center"
              >
                <Icon as={GiRoundStar} pt="1" mr="1" color="yellow.500" />
                Lv.{point.level}
                <Icon as={TbDiamonds} pt="1" ml="2" mr="1" color="yellow.500" />
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
            onClick={() => router.push("/course")}
          >
            학습 바로가기
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};
