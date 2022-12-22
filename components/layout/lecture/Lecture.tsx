import { Center, Stack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Id, weekData } from "../../../types";
import { WeekLecture } from "./WeekLecture";

export default function Lecture() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [weekData, setWeekData] = useState<(Id & weekData)[]>([]);

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
      pt="50"
    >
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
