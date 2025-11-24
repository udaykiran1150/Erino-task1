import { DataTypes,Optional,Model } from "sequelize";
import sequelize from "../config/sequelize";
import { UserAttributes } from "../types/user.types";
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
    createdAt: {
      type: DataTypes.DATE,
      field: "created_at"
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "updated_at"
    }
    
},{
    sequelize,
    tableName:"erinousers",
    timestamps:true
})

export default User;
