import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { userState } from "../recoil";
import { Types, User } from "../types";
import Layout from "../components/Layout";
import CourseLayout from "../components/CourseLayout";
import BubbleChart from "../components/course/BubbleChart";
import { useQuery } from "react-query";

export default function CoursePage() {
  const [metaverse, setMetaverse] = useState<string[]>([]);
  const user = useRecoilValue<User>(userState);
  const [courseData, setData] = useState<Types.Data[]>([]);

  const getCourseData = async () => {
    const { data } = await axios.get("api/course");
    return data;
  };
  const { isLoading, data, isError } = useQuery("course", getCourseData, {
    onSuccess: () => {
      setMetaverse(data.metaverse);
      setData(data.data);
    }
  });

  return (
    <Layout>
      <CourseLayout
        title="데이터분석기초 학습 콘텐츠"
        type={user.type}
        metaverse={metaverse[0]}
      >
        <BubbleChart
          bubblesData={courseData}
          width={1400}
          height={700}
          textFillColor="black"
          backgroundColor="#fff"
          minValue={10}
          maxValue={60}
          metaverse={metaverse}
          type={user.type}
        />
      </CourseLayout>
    </Layout>
  );
}
