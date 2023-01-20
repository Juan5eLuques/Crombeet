import pool from "../../../config/db";
import { getUser } from "controller/user/user";
import nextConnect from "next-connect";

const handler = nextConnect();

handler.get(getUser);

export default handler;
