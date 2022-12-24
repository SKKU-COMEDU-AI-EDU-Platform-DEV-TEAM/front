import Layout from "../../../../components/layout/app/Layout";
import Lecture from "../../../../components/layout/course/Lecture";
import { useRouter } from "next/router";

export default function LecturePage() {
  const router = useRouter();
  const { week, id } = router.query;
  console.log(week, id);

  return (
    <Layout>
      <Lecture />
    </Layout>
  );
}
