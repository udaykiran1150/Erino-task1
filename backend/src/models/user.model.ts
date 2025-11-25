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
       public created_at?: Date;
       public updated_at?: Date;
}
User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    
    },
    updated_at: {
      type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
    },
  },
  {
    sequelize,
    tableName: "erinousers",
    timestamps: false,
  }
);
 
export default User;
