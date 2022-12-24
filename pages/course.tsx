import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Id, User, WeekData } from "../types";
import { useRecoilValue } from "recoil";
import { userState } from "../recoil";
import Layout from "../components/layout/app/Layout";
import CourseLayout from "../components/layout/course/CourseLayout";
import { Week } from "../components/layout/course/Week";

export default function CoursePage() {
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
    <Layout>
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
    </Layout>
  );
}
