import {Request as req, Response as res, NextFunction as Next} from "express"

interface User {
    user?: {
        _id: string;
        name: string;
        email: string;
        isAdmin?: boolean;
    };
}

export type Request = req & User;
export type Response = res & User;
export type NextFunction = Next