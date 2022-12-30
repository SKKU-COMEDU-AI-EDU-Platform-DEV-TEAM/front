import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { userState } from "../../../../recoil";
import { User, QuizType, QuizResultType } from "../../../../types";
import Layout from "../../../../components/Layout";
import CourseLayout from "../../../../components/CourseLayout";
import axios from "axios";
import { Accordion, Box, Button, Text } from "@chakra-ui/react";
import QuizResult from "../../../../components/course/QuizResult";
import { mockupQuizResult } from "../../../../mockupData";
import { useQuery } from "react-query";

export default function QuizResultPage() {
  const router = useRouter();
  const { week } = router.query;
  const [quiz, setQuiz] = useState<QuizType[]>([]);
  const user = useRecoilValue<User>(userState);
  const [result, setResult] = useState<QuizResultType>(mockupQuizResult);

  const getQuizResultData = async () => {
    const { data } = await axios.get(`/api/quiz/${week}`);
    return data;
  };
  const { isLoading, data, isError } = useQuery(
    "quizResult",
    getQuizResultData,
    {
      onSuccess: () => {
        setQuiz(data.data);
        setResult(data.result);
      }
    }
  );

  return (
    <Layout>
      <CourseLayout title={`${week}주차 퀴즈`} type={user.type} metaverse={""}>
        <>
          <Accordion allowMultiple>
            <>
              {quiz.map(function (q, i) {
                return (
                  <QuizResult
                    key={`quiz${i}`}
                    id={i + 1}
                    question={q.question}
                    definition={q.definition}
                    option={q.option}
                    correctAnswer={result.correctAnswer[i]}
                    userAnswer={result.userAnswer[i]}
                  />
                );
              })}
            </>
          </Accordion>
          <Text pl={5} pt={5} fontWeight={"bold"} fontSize={24}>
            Score: {result.correctQuizNum}/{result.totalQuizNum}
          </Text>
          <Box display="flex" justifyContent={"left"}>
            <Button
              height="40px"
              width="20%"
              borderRadius={"2xl"}
              bgColor="rgb(144, 187, 144)"
              onClick={() => router.push(`/course/${week}/quiz`)}
            >
              다시 풀어보기
            </Button>
          </Box>
        </>
      </CourseLayout>
    </Layout>
  );
}
