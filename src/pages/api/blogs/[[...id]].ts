/* eslint-disable @typescript-eslint/no-explicit-any */
import { addData, retreiveData, updateData } from "@/lib/firebase/service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const collectionName = "blogs";
  if (req.method === "GET") {
    const data = await retreiveData(collectionName);
    res
      .status(200)
      .json({ status: true, statusCode: 200, message: "success", data });
  } else if (req.method === "POST") {
    const { data } = req.body;
    await addData(collectionName, data, (status: boolean, result: any) => {
      if (status) {
        res.status(200).json({
          status: true,
          statusCode: 200,
          message: "success",
          data: { id: result.id },
        });
      } else {
        res
          .status(400)
          .json({ status: false, statusCode: 400, message: "failed" });
      }
    });
  } else if (req.method === "PUT") {
    const { id } = req.query;
    const { data } = req.body;
    if (id) {
      await updateData(collectionName, id[0], data, (status: boolean) => {
        if (status) {
          res.status(200).json({
            status: true,
            statusCode: 200,
            message: "success",
          });
        } else {
          res
            .status(400)
            .json({ status: false, statusCode: 400, message: "failed" });
        }
      });
    } else {
      res
        .status(400)
        .json({ status: false, statusCode: 400, message: "failed" });
    }
  } else {
    res
      .status(405)
      .json({ status: false, statusCode: 405, message: "Method not allowed" });
  }
}
