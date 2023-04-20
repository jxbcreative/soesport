import { NextApiRequest, NextApiResponse } from "next";
import * as cookie from 'cookie'
import * as jwt from 'jsonwebtoken'

const secret = "secret";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    // check request method
    if(req.method !== 'GET') return res.status(405).json({error: "Invalid method"})

    const cookies = cookie.parse(req.headers.cookie ?? '')
    const token = cookies.token;
    // If there is no token, return an error
    if(!token)return res.status(401).json({ message: 'Unauthorized' })
    
    try {
        // Verify the token using the secret key
        const decoded = jwt.verify(token, secret)
  
        // If the token is valid, return the user data
        return res.status(200).json(decoded)
      } catch (err) {
        // If there is an error verifying the token, return an error
        return res.status(401).json({ message: 'Unauthorized' })
      }

}
