import Layout from "../../../../components/layout/app/Layout";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import CourseLayout from "../../../../components/layout/course/CourseLayout";
import { userState } from "../../../../recoil";
import { User } from "../../../../types";

export default function LecturePage() {
  //   const [isLoading, setIsLoading] = useState<boolean>(true);
  const [metaverse, setMetaverse] = useState<string>("");
  const user = useRecoilValue<User>(userState);

  const router = useRouter();
  const { week, id } = router.query;

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       setIsLoading(false);
  //     };
  //     fetchData();
  //   }, []);

  return (
    <Layout>
      <CourseLayout
        title="1주차 강의 자료"
        type={user.type}
        metaverse={metaverse}
      >
        <>Lecture page</>
      </CourseLayout>
    </Layout>
  );
}
