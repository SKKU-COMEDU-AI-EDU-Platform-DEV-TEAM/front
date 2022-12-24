import { Box, Button, Center, Link, Stack, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Id, User, WeekData } from "../../../types";
import { Week } from "./Week";
import CourseLayout from "./CourseLayout";
import { useRecoilValue } from "recoil";
import { userState } from "../../../recoil";

export default function Course() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [weekData, setWeekData] = useState<(Id & WeekData)[]>([]);
  const [metaverse, setMetaverse] = useState<string>("");
  const router = useRouter();
  const user = useRecoilValue<User>(userState);

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
    <CourseLayout
      title="데이터분석기초 학습 콘텐츠"
      type={user.type}
      metaverse={metaverse}
    >
      <>
        {weekData.map((data, i) => (
          <Week
            key={i}
            id={i + 1}
            subject={data.subject}
            contents={data.contents}
            isdone={data.isdone}
          />
        ))}
      </>
    </CourseLayout>
  );
}
