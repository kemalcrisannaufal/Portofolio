import { NextApiResponse } from "next";

const response = {
  success(res: NextApiResponse, data?: unknown, message: string = "Success") {
    res.status(200).json({ success: true, statusCode: 200, data, message });
  },
  error(res: NextApiResponse, message: string = "Error") {
    res.status(400).json({ success: false, statusCode: 400, message });
  },
  unauthorized(res: NextApiResponse, message: string = "Unauthorized") {
    res.status(403).json({ success: false, statusCode: 403, message });
  },
};

export default response;
