"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.photoRouter = void 0;
const express_1 = __importDefault(require("express"));
const photo_controller_1 = require("../controllers/photo.controller");
exports.photoRouter = express_1.default.Router();
exports.photoRouter.get("/", photo_controller_1.getPhotos);
//# sourceMappingURL=photo.router.js.map