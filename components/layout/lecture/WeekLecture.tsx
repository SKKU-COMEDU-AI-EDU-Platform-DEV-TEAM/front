import { Box, Progress, Stack, StackDivider, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Id, weekData } from "../../../types";
import { WeekContent } from "./WeekContent";

export const WeekLecture = (props: Id & weekData) => {
  const { id, subject, contents, isdone } = props;
  const numContents: number = 1 + contents.video.length;
  const numVideoDone: number = isdone.video.filter((done) => done === 1).length;
  const numQuizDone: number = isdone.quiz === 1 ? 1 : 0;
  const [isOnclick, setisOnclick] = useState(false);
  var progress: number = ((numVideoDone + numQuizDone) / numContents) * 100;

  return (
    <Stack
      direction={"column"}
      spacing={0}
      onClick={() => setisOnclick(!isOnclick)}
    >
      <Box bg="#c0c0c0" h={57} borderRadius="3">
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
              value={progress}
              ml="2"
            />
            <Text mb={2} ml={2}>
              {numVideoDone + numQuizDone}/{numContents}
            </Text>
          </>
        </Stack>
      </Box>
      {isOnclick && (
        <Box bg="#d9d9d9" borderRadius="3">
          {contents.video.map((v, i) => (
            <WeekContent
              key={i}
              week={id}
              id={i + 1}
              type={"lecture"}
              link={v}
            ></WeekContent>
          ))}
          <WeekContent
            week={id}
            id={numContents}
            type={"quiz"}
            link={contents.quiz}
          ></WeekContent>
          <WeekContent
            week={id}
            id={numContents + 1}
            type={"metaverse"}
            link={contents.metaverse}
          ></WeekContent>
        </Box>
      )}
    </Stack>
  );
};
