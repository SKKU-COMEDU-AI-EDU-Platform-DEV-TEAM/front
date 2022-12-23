import { Stack, StackDivider, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Content } from "../../../types";

export const WeekContent = (props: Content) => {
  const { week, id, type, link } = props;
  const router = useRouter();
  const typeShow =
    type == "lecture" ? "강의영상" : type == "quiz" ? "퀴즈" : "메타버스";
  return (
    <Stack
      direction={"row"}
      divider={<StackDivider />}
      p={4}
      onClick={() => router.push(link)}
    >
      <Text w={"5%"} fontWeight={"bold"} textAlign={"center"}>
        {String(id).padStart(2, "0")}
      </Text>
      <Text w={"75%"} fontWeight={"bold"} textAlign={"left"} pl={2}>
        {typeShow}
      </Text>
    </Stack>
  );
};
