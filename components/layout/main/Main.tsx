import { Box, Stack } from "@chakra-ui/react";
import { CourseDescription } from "./CourseDescription";
import { TypeDescription } from "./TypeDescription";
import { UserDescription } from "./UserDescription";
import { QuizGraph } from "./QuizGraph";
import { useEffect, useState } from "react";
import { Id, WeekData } from "../../../types";
import axios from "axios";

export const Main = () => {
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
      h="600px"
      spacing={12}
    >
      <Stack direction={"row"} justifyContent="space-between" pt={30}>
        <UserDescription />
        <TypeDescription />
        <CourseDescription />
      </Stack>
      <QuizGraph />
    </Stack>
  );
};
