import { Box, Button, Center, Link, Stack, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Id, WeekData } from "../../../types";
import { WeekLecture } from "./WeekLecture";

export default function Lecture() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [weekData, setWeekData] = useState<(Id & WeekData)[]>([]);
  const [metaverse, setMetaverse] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const response = (await axios.get("api/course")).data;
      setWeekData(response.data);
      setMetaverse(response.metaverse);
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
      <Stack m={2} direction="row" justifyContent={"space-between"}>
        <Box>
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
        <Link href={metaverse} isExternal>
          <Button colorScheme="facebook" fontSize={15} variant="ghost">
            이 과목 메타버스 질문방 바로가기 <ExternalLinkIcon mx="2px" />
          </Button>
        </Link>
      </Stack>
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
