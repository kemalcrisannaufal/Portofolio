import { retreiveDataByField, updateData } from "@/lib/firebase/service";
import response from "@/utils/response";
import { NextApiRequest, NextApiResponse } from "next";
import { BlogComment } from "@/types/comment";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const COLLECTION_NAME = "blogs";
  if (req.method === "GET") {
    const { slug } = req.query;
    if (!slug) {
      return response.error(res, "Slug is required");
    }

    const data = await retreiveDataByField(
      COLLECTION_NAME,
      "slug",
      slug as string
    );

    if (data.length === 0) {
      return response.error(res, "Blog not found");
    }
    response.success(res, data[0], "Success Get Blog");
  } else if (req.method === "PUT") {
    const { slug: id } = req.query;
    const { data } = req.body;

    if (!id) {
      return response.error(res, "Id is required");
    }

    const payload = data.comments.map((item: BlogComment) => ({
      name: item.name,
      comment: item.comment,
      createdAt: item.createdAt,
    }));

    console.log(payload);

    if (payload.length === 0) {
      return response.error(res, "Comment is required");
    }

    await updateData(
      COLLECTION_NAME,
      id as string,
      { comments: payload },
      (status: boolean) => {
        if (!status) {
          return response.error(res, "Failed to update data");
        }

        response.success(res, { data }, "Success update data");
      }
    );
  } else {
    response.error(res, "Method not allowed");
  }
}
