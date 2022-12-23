// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ScoreList } from "../../types/index";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ScoreList>
) {
  return res.send({
    score: [1, 5, 3, 1, 4, 1, 8, 5, 3, 2, 1, 6, 4, 1]
  });
}
