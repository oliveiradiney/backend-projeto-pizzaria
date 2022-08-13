import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface  Payload{
    sub: string;
}

export function isAuthenticated(
    req:Request,
    res: Response,
    next: NextFunction
){
    //Receber o token
    const authToken = req.headers.authorization;

    if(!authToken){
        return res.status(401).end();
    }
    //pegando só o token
    const [, token] = authToken.split(" ")

    try {
        //Validar o token
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as Payload;

        return next();

        console.log(sub)
    } catch (err) {
        return res.status(401).end();
    }


}