/* eslint-disable @typescript-eslint/no-explicit-any */
import { addData, retreiveData, updateData } from "@/lib/firebase/service";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import response from "@/utils/response";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const COLLECTION_NAME = "blogs";

  if (req.method === "GET") {
    const data = await retreiveData(COLLECTION_NAME);
    response.success(res, data, "Success Get Blogs");
  } else if (req.method === "POST") {
    const { data } = req.body;
    const token = req.headers.authorization?.split(" ")[1] || "";

    jwt.verify(
      token,
      process.env.NEXTAUTH_SECRET || "",
      async (err: any, decoded: any) => {
        if (!(decoded && decoded.role === "admin")) {
          return response.unauthorized(res);
        }

        await addData(COLLECTION_NAME, data, (status: boolean, result: any) => {
          if (!status) {
            return response.error(res, "Failed to add data");
          }

          response.success(res, { id: result.id }, "Success add data");
        });
      }
    );
  } else if (req.method === "PUT") {
    const { id } = req.query;
    const { data } = req.body;
    const token = req.headers.authorization?.split(" ")[1] || "";

    jwt.verify(
      token,
      process.env.NEXTAUTH_SECRET || "",
      async (err: any, decoded: any) => {
        if (!(decoded && decoded.role === "admin")) {
          return response.unauthorized(res);
        }

        if (!id) {
          return response.error(res, "Id not found");
        }

        await updateData(COLLECTION_NAME, id[0], data, (status: boolean) => {
          if (!status) {
            return response.error(res, "Failed to update data");
          }

          response.success(res, "Success update data");
        });
      }
    );
  } else {
    response.error(res, "Method not allowed");
  }
}
