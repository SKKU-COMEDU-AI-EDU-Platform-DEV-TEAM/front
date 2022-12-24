import { useRouter } from "next/router";
import Layout from "../../../components/layout/app/Layout";
import Quiz from "../../../components/layout/course/Quiz";

export default function LecturePage() {
  const router = useRouter();
  const { week, id } = router.query;
  console.log(week, id);

  return (
    <Layout>
      <Quiz />
    </Layout>
  );
}
