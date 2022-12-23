// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { QuestionList } from "../../types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<QuestionList>
) {
  return res.send({
    questions: [
      "학습 성향 분석 질문1",
      "학습 성향 분석 질문2",
      "학습 성향 분석 질문3",
      "학습 성향 분석 질문4",
      "학습 성향 분석 질문5",
      "학습 성향 분석 질문6"
    ]
  });
}
