export type Message = {
  name: string;
  message: string;
  role?: string | "guest";
  createdAt?: Date;
};
