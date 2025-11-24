import { DataTypes,Optional,Model } from "sequelize";

import sequelize from "../config/sequelize";

interface UserAttributes{
    id:string,
    full_name:string,
    email:string,
    password:string,
    createdAt?:Date,
    updatedAt?:Date
}

interface UserCreationAttributes extends Optional<UserAttributes,"id">{}

class User extends Model<UserAttributes,UserCreationAttributes>
 implements UserAttributes{
       public id:string;
       public full_name: string;
       public email: string;
       public password: string;
       public createdAt?: Date;
       public updatedAt?: Date;
}
User.init({
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
    },
    full_name:{
        type:DataTypes.STRING,
        allowNull:false

    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false,
    }
    ,
    password:{
        type:DataTypes.STRING,
        allowNull:false,

    },
    
},{
    sequelize,
    tableName:"erinousers",
    timestamps:true
})

export default User;
