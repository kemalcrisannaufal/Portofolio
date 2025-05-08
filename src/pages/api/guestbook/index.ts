import { addData, retreiveData } from "@/lib/firebase/service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const collectionName = "guestbook";
  if (req.method === "GET") {
    const data = await retreiveData(collectionName);
    if (data) {
      res
        .status(200)
        .json({ status: true, statusCode: 200, message: "success", data });
    } else {
      res
        .status(400)
        .json({ status: false, statusCode: 400, message: "failed" });
    }
  } else if (req.method === "POST") {
    const { data } = req.body;
    await addData(collectionName, data, (status: true) => {
      if (status) {
        res
          .status(200)
          .json({ status: true, statusCode: 200, message: "success" });
      } else {
        res
          .status(400)
          .json({ status: false, statusCode: 400, message: "failed" });
      }
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
