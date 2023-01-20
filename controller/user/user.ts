import { executeQuery } from "../../config/db";

const getUser = async (req: any, res: any) => {
  const userData = await executeQuery("select * from user", []);
  res.send(userData);
};

export { getUser };
