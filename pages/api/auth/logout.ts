import { NextApiRequest, NextApiResponse } from "next";
import * as cookie from 'cookie';


export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    // check request method
    if(req.method !== 'POST') return res.status(405).json({error: "Invalid method"})

    const deleteCookieHeader = cookie.serialize('token', '', {
        httpOnly: true,
        sameSite: 'strict',
        expires: new Date(0)
    })
    res.setHeader('Set-Cookie', deleteCookieHeader)

    return res.status(200).json({ message: 'Logged out successfully' })
    

}