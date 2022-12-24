import Layout from "../../../../components/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import CourseLayout from "../../../../components/CourseLayout";
import { userState } from "../../../../recoil";
import { User } from "../../../../types";
import { Box, Progress, Stack, StackDivider, Text } from "@chakra-ui/react";
import axios from "axios";

export default function LecturePage() {
  const router = useRouter();
  const { week, id } = router.query;
  console.log(week, id);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [metaverse, setMetaverse] = useState<string>("");
  const user = useRecoilValue<User>(userState);

  useEffect(() => {
    const fetchData = async () => {
      const response = (await axios.get(`/api/course/${week}/lecture/${id}`))
        .data;
      console.log(response);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <CourseLayout
        title={`${id}주차 | 강의 이름 `}
        type={user.type}
        metaverse={metaverse}
      >
        <>
          <Box bg="#c0c0c0" h={57} borderRadius="3">
            <Stack direction={"row"} p={4}>
              <Text w={"2%"} fontWeight={"bold"} textAlign={"center"}>
                {String(id).padStart(2, "0")}.
              </Text>
              <Text fontWeight={"bold"} textAlign={"left"} pl={2}>
                강의 영상 타이틀
              </Text>
            </Stack>
          </Box>
          <Box bg="#d9d9d9" borderRadius="3" h={100}></Box>
        </>
      </CourseLayout>
    </Layout>
  );
}
