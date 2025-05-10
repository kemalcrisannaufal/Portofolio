import { retreiveDataByField } from "@/lib/firebase/service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const collectionName = "blogs";
  if (req.method === "GET") {
    const { slug } = req.query;
    if (slug) {
      const data = await retreiveDataByField(
        collectionName,
        "slug",
        slug as string
      );
      if (data) {
        res
          .status(200)
          .json({ status: true, statusCode: 200, message: "success", data });
      } else {
        res
          .status(404)
          .json({ status: false, statusCode: 404, message: "not found" });
      }
    } else {
      res
        .status(400)
        .json({ status: false, statusCode: 400, message: "failed" });
    }
  } else {
    res
      .status(405)
      .json({ status: false, statusCode: 405, message: "method not allowed" });
  }
}
