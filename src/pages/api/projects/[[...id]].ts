/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  addData,
  deletedData,
  retreiveData,
  retreiveDataByField,
  updateData,
} from "@/lib/firebase/service";
import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import response from "@/utils/response";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const COLLECTION_NAME = "projects";
  if (req.method === "GET") {
    const { id: slug } = req.query;

    if (!slug) {
      const data = await retreiveData(COLLECTION_NAME);
      return response.success(res, data, "Success Get Projects");
    }

    const data = await retreiveDataByField(COLLECTION_NAME, "slug", slug[0]);

    if (!data) {
      return response.error(res, "Data not found");
    }

    response.success(res, data[0], "Success Get Project");
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

    if (!id) {
      return response.error(res, "Id is required");
    }

    const { data } = req.body;
    const token = req.headers.authorization?.split(" ")[1] || "";

    jwt.verify(
      token,
      process.env.NEXTAUTH_SECRET || "",
      async (error: any, decoded: any) => {
        if (!(decoded && decoded.role === "admin")) {
          return response.unauthorized(res);
        }

        await updateData(COLLECTION_NAME, id[0], data, (status: boolean) => {
          if (!status) {
            return response.error(res, "Failed to update data");
          }

          response.success(res, "Success update data");
        });
      }
    );
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    const token = req.headers.authorization?.split(" ")[1] || "";

    if (!id) {
      return response.error(res, "Id is required");
    }

    jwt.verify(
      token,
      process.env.NEXTAUTH_SECRET || "",
      async (err: any, decoded: any) => {
        if (!(decoded && decoded.role === "admin")) {
          return response.unauthorized(res);
        }

        await deletedData(COLLECTION_NAME, id[0], (status: boolean) => {
          if (!status) {
            return response.error(res, "Failed to delete data");
          }

          response.success(res, "Success delete data");
        });
      }
    );
  } else {
    response.error(res, "Method not allowed");
  }
}
