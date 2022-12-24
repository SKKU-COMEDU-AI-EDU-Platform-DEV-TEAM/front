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

export default function Quiz() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [metaverse, setMetaverse] = useState<string>("");
  const user = useRecoilValue<User>(userState);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <CourseLayout title="1주차 퀴즈" type={user.type} metaverse={metaverse}>
      <>Quiz page</>
    </CourseLayout>
  );
}
