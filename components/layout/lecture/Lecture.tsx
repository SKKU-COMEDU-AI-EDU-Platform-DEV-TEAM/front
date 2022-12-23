import { Box, Center, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Id, WeekData } from "../../../types";
import { WeekLecture } from "./WeekLecture";

export default function Lecture() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [weekData, setWeekData] = useState<(Id & WeekData)[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = (await axios.get("api/course")).data;
      setWeekData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Stack
      direction={"column"}
      w={{ base: "full", xl: "container.xl" }}
      justifyContent={"space-between"}
      verticalAlign="center"
      pt={5}
      pb={10}
    >
      <Box m={2}>
        <Text
          width="fit-content"
          p={1}
          fontWeight="bold"
          borderBottomWidth="2px"
          borderBottomColor="rgb(144, 187, 144)"
        >
          데이터분석기초 학습 콘텐츠
        </Text>
      </Box>
      {weekData.map((data, i) => (
        <WeekLecture
          key={i}
          id={i + 1}
          subject={data.subject}
          contents={data.contents}
          isdone={data.isdone}
        />
      ))}
    </Stack>
  );
}
