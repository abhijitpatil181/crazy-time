import axios, { AxiosRequestConfig } from "axios";
import { Blocks } from "../store/slices/rouletten.slice";

export const getBlocks = async () => {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "/rouletteten/blocks",
  };
  return await axios(config);
};

export const getCoins = async () => {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "/rouletteten/coins",
  };
  return await axios(config);
};
