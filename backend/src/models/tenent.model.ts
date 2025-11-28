import sequelize from "../config/sequelize";
import { TenantAttributes } from "../types/user";

import { Model, DataType, Optional, DataTypes, UUIDV4 } from "sequelize";
import User from "./user.model";

interface TenantCreationAttributes extends Optional<TenantAttributes, "id"> {}

class Tenant
  extends Model<TenantAttributes, TenantCreationAttributes>
  implements TenantAttributes
{
  public id: string;
  public tenant_name: string;
  public created_by:string
  public updated_by: string;
  public created_at: Date;
  public updated_at: Date;
  
}

Tenant.init({
      id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
   tenant_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  created_by:{
    type:DataTypes.UUID,
    allowNull:true,
    references:{
        key:"id",
        model:User
    }
  },
  updated_by:{
    type:DataTypes.UUID,
    allowNull:true,
    references:{
        key:"id",
        model:User
    }
  }, 
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue:DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue:DataTypes.NOW
  }
},
    {   sequelize,
        timestamps:false,
        modelName:'tenants',
        tableName:"tenants"
    }
)


export default Tenant