// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type sendType = {
  data: number;
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<sendType>
) {
  return res.send({ data: 1 });
}
