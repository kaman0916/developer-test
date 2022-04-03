"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPhotos = void 0;
const unsplash_1 = require("../unsplash");
const url_1 = __importDefault(require("url"));
const uuid_1 = require("uuid");
const writeFile_1 = require("../utils/writeFile");
const getPhotos = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parse = url_1.default.parse(request.url, true).query || { query: "" };
        const query = Object.assign({ query: "" }, parse);
        if (query.query !== "") {
            const content = `${(0, uuid_1.v4)()},${query.query}`;
            (0, writeFile_1.writeFile)(content);
        }
        const photoResponse = yield (0, unsplash_1.getUnsplashPhotos)(query);
        response.status(200).json(photoResponse);
    }
    catch (error) {
        response.status(500).json(error);
    }
});
exports.getPhotos = getPhotos;
//# sourceMappingURL=photo.controller.js.map