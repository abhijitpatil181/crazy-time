import axios, { AxiosRequestConfig } from "axios";

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
