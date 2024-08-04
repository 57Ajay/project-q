"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/api/1", function (req, res) {
    res.send("Hello World! this is Ajay");
});
app.get("/api", function (req, res) {
    res.send("Hello World! this is Ajay from /api route");
});
app.get("/api/2", function (req, res) {
    res.send("Hello World! this is Ajay from /api/2 route testing in mobile");
});
app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
exports.default = app;
//# sourceMappingURL=index.js.map