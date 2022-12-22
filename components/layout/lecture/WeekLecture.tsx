import { Box, Progress, Stack, StackDivider, Text } from "@chakra-ui/react";
import { Id, weekData } from "../../../types";

export const WeekLecture = (props: Id & weekData) => {
  const { id, subject, contents, isdone } = props;
  const numContents = 1 + contents.video.length;
  const numVideoDone = isdone.video.filter((done) => done === 1).length;
  const numQuizDone = isdone.quiz === 1 ? 1 : 0;

  return (
    <Box width="100%" bg="#d1d1d1" h={57}>
      <Stack direction={"row"} divider={<StackDivider />} p={4}>
        <Text w={"5%"} fontWeight={"bold"} textAlign={"center"}>
          {id}주차
        </Text>
        <Text w={"75%"} fontWeight={"bold"} textAlign={"left"} pl={2}>
          {subject}
        </Text>
        <>
          <Progress
            borderRadius={10}
            w={"20%"}
            mt={1}
            size="lg"
            value={20}
            ml="2"
          />
          <Text mb={2} ml={2}>
            {numVideoDone + numQuizDone}/{numContents}
          </Text>
        </>
      </Stack>
    </Box>
  );
};
