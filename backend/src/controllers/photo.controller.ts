import { Request, Response } from "express";
import { getUnsplashPhotos } from "../unsplash";
import url from "url";
import { v4 as uuidv4 } from "uuid";
import { getUnsplashPhotosI } from "../interfaces/getUnsplashPhotosI";
import { writeFile } from "../utils/writeFile";

export const getPhotos = async (request: Request, response: Response) => {
  try {
    const parse = url.parse(request.url, true).query || { query: "" };

    const query = {
      query: "",
      ...parse,
    };

    if (query.query !== "") {
      const content = `${uuidv4()},${query.query}`;
      writeFile(content);
    }

    const photoResponse = await getUnsplashPhotos(query as getUnsplashPhotosI);
    response.status(200).json(photoResponse);
  } catch (error) {
    response.status(500).json(error);
  }
};
