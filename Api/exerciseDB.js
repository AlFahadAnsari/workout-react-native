import axios from "axios";
import { ApiKey } from "../constants/SliderImages";

const baseUrl = "https://exercisedb.p.rapidapi.com/";
// const baseUrl = "https://dummyjson.com/products";

const apiCall = async (url, params) => {
  try {
    const options = {
      method: "GET",
      url,
      params,
      headers: {
        "x-rapidapi-key": "cffca5683cmshde4ec8943bb0f09p14ba9bjsn004df59ac7b5",
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      },
      // headers: {
      //     'x-rapidapi-key': ApiKey,
      //     'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
      // }
    };
    const response = await axios.request(options);
    return response.data; // Return the data from the response
  } catch (error) {
    // console.log("error is", error);
    return null;
  }
};

export const ApiCallBodyPart = async (bodyPart) => {
  const url = `${baseUrl}exercises/bodyPart/${bodyPart}`;
  return await apiCall(url);
};
