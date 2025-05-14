import axios, { AxiosRequestConfig } from "axios";
import { Blocks } from "../store/slices/rouletten.slice";

export const getBlocks = async () => {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "/rouletteten/blocks",
    headers: { playerid: "dJay", token: "abcd" },
  };
  return await axios(config);
};

export const getCoins = async () => {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "/rouletteten/coins",
    headers: { playerid: "dJay", token: "abcd" },
  };
  return await axios(config);
};
