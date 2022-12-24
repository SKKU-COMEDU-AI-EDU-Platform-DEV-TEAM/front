// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { WeekData } from "../../types";

type sendWeekData = {
  data: WeekData[];
  metaverse: string;
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<sendWeekData>
) {
  return res.send({
    data: [
      {
        subject: "강의 제목1",
        contents: {
          video: ["/videolink1", "/videolink2"],
          quiz: "/quizlink1",
          metaverse: "https://chakra-ui.com/docs/components/link/usage#"
        },
        isdone: { video: [1, 0], quiz: 1 }
      },
      {
        subject: "강의 제목2",
        contents: {
          video: ["/videolink3", "/videolink4", "/videolink5"],
          quiz: "/quizlink2",
          metaverse: "https://chakra-ui.com/docs/components/link/usage#"
        },
        isdone: { video: [0, 1], quiz: 0 }
      }
    ],
    metaverse: "https://chakra-ui.com/docs/components/link/usage#"
  });
}
