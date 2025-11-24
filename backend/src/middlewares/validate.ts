import { Request, Response, NextFunction } from "express";

import { ZodObject, ZodError } from "zod";

export const validate = (schema: ZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse({
            body: req.body,
        })
        next();
    } catch (error: any) {
        const issue = error.issues[0];
        let errorString = "";
        if (error.issues[0].path[1] !== 'email') {
            errorString = `${issue.message} for  ${error.issues[0].path[1]}`;
        }
        else {
            errorString = issue.message
        }
        return res.status(400).json({
            success: false,
            errors: errorString
        });
    }
}


