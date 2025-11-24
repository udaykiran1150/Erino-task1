import sequelize from "./Config/sequelize.js";
import User from "./Models/UserModel.js";

(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Database synced!");
    process.exit();
  } catch (err) {
    console.error("Sync error:", err);
    process.exit(1);
  }
})();
