import { Box, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Id, WeekData } from "../types";
import { TypeDescriptionComponent } from "../components/main/TypeDescriptionComponent";
import Layout from "../components/Layout";
import { CourseDescription } from "../components/main/CourseDescription";
import { QuizGraph } from "../components/main/QuizGraph";
import { UserDescription } from "../components/main/UserDescription";
import { useRecoilValue } from "recoil";
import { userState } from "../recoil";

export default function MainPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [weekData, setWeekData] = useState<(Id & WeekData)[]>([]);
  const user = useRecoilValue(userState);
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
        {user.type == 2 && <QuizGraph />}
      </Stack>
    </Layout>
  );
}
