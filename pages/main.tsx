import { Box, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/layout/app/Layout";
import { UserDescription } from "../components/layout/main/UserDescription";
import { TypeDescriptionComponent } from "../components/layout/main/TypeDescriptionComponent";
import { CourseDescription } from "../components/layout/main/CourseDescription";
import { QuizGraph } from "../components/layout/main/QuizGraph";
import { Id, WeekData } from "../types";

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
    <Layout>
      <Stack
        direction={"column"}
        w={{ base: "full", xl: "container.xl" }}
        h="600px"
        spacing={12}
      >
        <Stack direction={"row"} justifyContent="space-between" pt={30}>
          <UserDescription />
          <TypeDescriptionComponent />
          <CourseDescription />
        </Stack>
        <QuizGraph />
      </Stack>
    </Layout>
  );
};
