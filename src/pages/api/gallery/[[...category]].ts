import { retreiveData, retreiveDataByField } from "@/lib/firebase/service";
import response from "@/utils/response";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const COLLECTION_NAME = "gallery";
  if (req.method === "GET") {
    const { category } = req.query;

    if (category) {
      const data = await retreiveDataByField(
        COLLECTION_NAME,
        "category",
        category[0]
      );
      return response.success(res, data, "Success Get Gallery By Category");
    }

    const data = await retreiveData(COLLECTION_NAME);
    response.success(res, data, "Success Get Gallery");
  } else {
    response.error(res, "Method not allowed");
  }
}
