import Layout from "../../../../components/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import CourseLayout from "../../../../components/CourseLayout";
import { userState } from "../../../../recoil";
import { Lecture, User } from "../../../../types";
import { Box, Text, Stack, AspectRatio, StackDivider } from "@chakra-ui/react";
import axios from "axios";
import { useQuery } from "react-query";

export default function LecturePage() {
  const router = useRouter();
  const { week, id } = router.query;
  const [content, setContent] = useState<Lecture>();
  const user = useRecoilValue<User>(userState);

  const getLectureData = async () => {
    const { data } = await axios.get(`/api/lecture/${week}/${id}`);
    return data;
  };
  const { isLoading, data, isError } = useQuery("lecture", getLectureData, {
    onSuccess: () => {
      setContent(data);
    }
  });

  return (
    <Layout>
      <CourseLayout
        title={`${week}주차 | ${content?.title} `}
        type={user.type}
        metaverse={""}
      >
        <>
          <Box bg="#c0c0c0" h={57} borderRadius="3">
            <Stack direction={"row"} p={4}>
              <Text w={"2%"} fontWeight={"bold"} textAlign={"center"}>
                {String(id).padStart(2, "0")}.
              </Text>
              <Text fontWeight={"bold"} textAlign={"left"} pl={2}>
                {content?.videoTitle}
              </Text>
            </Stack>
          </Box>
          <Stack
            bg="#d9d9d9"
            borderRadius="3"
            maxH="fit-content"
            p="5%"
            spacing={20}
            divider={<StackDivider borderColor="gray.900" />}
          >
            <AspectRatio ratio={16 / 9}>
              <iframe
                title={content?.title}
                src={content?.video}
                allowFullScreen
              />
            </AspectRatio>
            <AspectRatio ratio={16 / 9}>
              <embed src={content?.pdf} type="application/pdf" />
            </AspectRatio>
          </Stack>
        </>
      </CourseLayout>
    </Layout>
  );
}
