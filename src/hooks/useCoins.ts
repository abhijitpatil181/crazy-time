import { useQuery } from "@tanstack/react-query";
import { useAppDispatch } from "./useRedux";
import { getCoins } from "../apis/rouletten";
import { setCoins } from "../store/slices/rouletten.slice";

const useCoins = () => {
  const dispatch = useAppDispatch();

  const { data: coinsData } = useQuery({
    queryKey: ["roulette", "blocks"],
    queryFn: async () => {
      try {
        const result = await getCoins();
        console.log("Blocks data:", result.data);
        if (result.status === 200) {
          dispatch(setCoins(result?.data));
        }
        return result;
      } catch (error) {
        console.error("Error fetching blocks data:", error);
        throw error; // Rethrow the error to be handled by react-query
      }
    },
  });

  return { coinsData };
};

export default useCoins;
