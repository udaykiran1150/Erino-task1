export interface UserProps{
    full_name:string,
    email:string,
    password:string
}
export interface UserAttributes{
    id:string,
    full_name:string,
    email:string,
    password:string,
    createdAt?:Date,
    updatedAt?:Date
}

