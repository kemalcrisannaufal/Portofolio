import { addData, retreiveData } from "@/lib/firebase/service";
import response from "@/utils/response";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const COLLECTION_NAME = "guestbook";
  if (req.method === "GET") {
    const data = await retreiveData(COLLECTION_NAME);

    if (!data) {
      return response.error(res, "Data not found");
    }

    response.success(res, data, "Success Get Guestbook");
  } else if (req.method === "POST") {
    const { data } = req.body;

    if (!data) {
      return response.error(res, "Data is required");
    }

    await addData(COLLECTION_NAME, data, (status: true) => {
      if (!status) {
        return response.error(res, "Failed to add data");
      }

      response.success(res, "Success add data");
    });
  } else {
    response.error(res, "Method not allowed");
  }
}
