/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  addData,
  deletedData,
  retreiveData,
  retreiveDataById,
  updateData,
} from "@/lib/firebase/service";
import { NextApiRequest, NextApiResponse } from "next";

const collectionName = "projects";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { id } = req.query;

    if (id) {
      const data = await retreiveDataById(collectionName, id[0]);
      if (data) {
        res
          .status(200)
          .json({ status: true, statusCode: 200, message: "success", data });
      } else {
        res
          .status(400)
          .json({ status: false, statusCode: 400, message: "failed" });
      }
    } else {
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
    }
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
      res
        .status(400)
        .json({ status: false, statusCode: 400, message: "failed" });
    }
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    if (id) {
      await deletedData(collectionName, id[0], (status: boolean) => {
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
