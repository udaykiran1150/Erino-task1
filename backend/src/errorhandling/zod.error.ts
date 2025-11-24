
import {Response} from "express"
export  const validationError=(error:any,res:Response)=>{
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
            message: errorString
        });
}

