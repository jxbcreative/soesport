import * as bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import { Login } from "../../../utils/authtype";
// import { serialize } from "cookie";
import * as jwt from 'jsonwebtoken';
import { users } from "./register";



const secret = "secret";
const expirationTime = '1h';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Invalid method" });

  const { email, password }: Login = req.body;

  // check user
  const user = users.find((user) => user.email === email);

  if (!user)
    return res.status(401).json({ error: "Invalid email and password" });

  // password < 8 characters
  if (password.length < 8)
    return res.status(401).json({ error: "Invalid email and password" });

  // check validation password
  const validPasword = await bcrypt.compare(password, user.password);
  if (!validPasword)
    return res.status(401).json({ error: "Invalid email and password" });

    const token = jwt.sign({ email }, secret, { expiresIn: '1h' });

  // Set token as HTTP-only cookie
  res.setHeader('Set-Cookie', `token=${token}; HttpOnly`);
    

  res.status(200).json({ message: "Authentication successful" });
}
