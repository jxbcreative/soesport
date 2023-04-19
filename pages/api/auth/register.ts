import { Register, User } from "../../../utils/authtype";
import { NextApiRequest, NextApiResponse } from "next";
import * as bcrypt from 'bcrypt';

export const users:User[] = []

export default async function handler(req:NextApiRequest, res: NextApiResponse) {
    // if method not post
    if(req.method !== 'POST')return res.status(405).json({error: 'Method Invalid'});

    const {name, phone_number, address, email, password, retryPassword}:Register = req.body;

    const existingUser = users.find((user) => user.email === email);
    // if existing user
    if(existingUser){
        res.status(409).json({ error: 'User with that email already exists' });
        return;
    }

    // phone_number < 12 digits
    if(phone_number.length < 12) return res.status(401).json({error: "Phone number must be 12 digits"})

    // password < 8 characters
    if(password.length < 8) return res.status(401).json({error: "Password must be 8 characters "})

    // retryPassword !== password || retryPassword == null 
    if(password !== retryPassword || retryPassword === null) return res.status(401).json({error: "Retry password not match"})

    // salt and hash password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    // push user register
    const createUser = {
        name,
        phone_number,
        address,
        email, 
        password: hashPassword,
        retryPassword: hashPassword
    }

    users.push(createUser);

    res.status(201).json({
        message: "Success Register",
        data: createUser
    }) 
}