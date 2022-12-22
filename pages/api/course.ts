// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { weekData } from "../../types";

type sendData = {
  data: weekData[];
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<sendData>
) {
  return res.send({
    data: [
      {
        subject: "강의 제목1",
        contents: {
          video: ["/videolink1", "/videolink2"],
          quiz: "/quizlink1",
          metaverse: "/metaverselink1"
        },
        isdone: { video: [1, 0], quiz: 1 }
      },
      {
        subject: "강의 제목2",
        contents: {
          video: ["/videolink3", "/videolink4", "/videolink5"],
          quiz: "/quizlink2",
          metaverse: "/metaverselink2"
        },
        isdone: { video: [0, 1], quiz: 0 }
      }
    ]
  });
}
