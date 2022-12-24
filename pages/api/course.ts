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
          video: ["/course/1/lecture/1", "/course/1/lecture/2"],
          quiz: "/course/1/quiz",
          metaverse: "https://chakra-ui.com/docs/components/link/usage#"
        },
        isdone: { video: [1, 0], quiz: 1 }
      },
      {
        subject: "강의 제목2",
        contents: {
          video: [
            "/course/2/lecture/1",
            "/course/2/lecture/2",
            "/course/2/lecture/3"
          ],
          quiz: "/course/2/quiz",
          metaverse: "https://chakra-ui.com/docs/components/link/usage#"
        },
        isdone: { video: [0, 1], quiz: 0 }
      },
      {
        subject: "강의 제목3",
        contents: {
          video: [
            "/course/3/lecture/1",
            "/course/3/lecture/2",
            "/course/3/lecture/3"
          ],
          quiz: "/course/3/quiz",
          metaverse: "https://chakra-ui.com/docs/components/link/usage#"
        },
        isdone: { video: [0, 1], quiz: 0 }
      }
    ],
    metaverse: "https://chakra-ui.com/docs/components/link/usage#"
  });
}
