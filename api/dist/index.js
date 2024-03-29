"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// modules
const post_routes_1 = __importDefault(require("./routes/post.routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
// basic middlewares
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));
// routes
app.use("/api/v1", post_routes_1.default);
// app listener
app.listen(PORT, () => {
    console.log(`Server running on PORT:${PORT}`);
});
