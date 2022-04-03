import express from "express";
import { getPhotos } from "../controllers/photo.controller";

export const photoRouter = express.Router();

photoRouter.get("/", getPhotos);
