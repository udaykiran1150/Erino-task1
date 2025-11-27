import sequelize from "../config/sequelize";
import { DataTypes, Model, Optional, UUIDV4 } from "sequelize";
import { TokenProps } from "../types/tokens";
import User from "./user.model";

interface TokenCreationAttributes extends Optional<TokenProps, "id"> {}

class Tokens
  extends Model<TokenProps, TokenCreationAttributes>
  implements TokenProps
{
 
  public id: string;
  public user_id: string;
  public token_encrypted: string;
  public expires_at: Date;
  public login_at: Date;
}
Tokens.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    token_encrypted: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expires_at: {
      type: DataTypes.DATE,
    },
    login_at: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    tableName: "refreshtokens",
    timestamps: true,
  }
);

export default Tokens;
