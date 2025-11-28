import User from "./user.model";
import Tenant from "./tenent.model";
Tenant.hasMany(User, { foreignKey: "tenant_id", as: "users" });
User.belongsTo(Tenant, { foreignKey: "tenant_id", as: "tenant" });

export { User, Tenant };
