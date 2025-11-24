"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sequelize_1 = __importDefault(require("./config/sequelize"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
sequelize_1.default.authenticate()
    .then(() => console.log("Database Connected Successfully"))
    .catch(() => console.log("Error at connecting Database"));
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use(express_1.default.json());
app.use("/api/v1", user_route_1.default);
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "internal server error",
    });
});
app.listen(port, () => {
    return console.log(`Express  listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map