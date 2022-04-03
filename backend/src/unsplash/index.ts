import { createApi } from "unsplash-js";
import * as nodeFetch from "node-fetch";

import { getUnsplashPhotosI } from "../interfaces/getUnsplashPhotosI";

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
  fetch: nodeFetch.default as unknown as typeof fetch,
});

export const getUnsplashPhotos = async (data: getUnsplashPhotosI) => {
  try {
    let response;
    if (data.query === "") {
      response = await unsplash.photos.list({
        perPage: 9,
        ...data,
      });
    } else {
      response = await unsplash.search.getPhotos({
        perPage: 9,
        ...data,
      });
    }

    return response;
  } catch (error) {
    console.log({ error });
    throw error;
  }
};
