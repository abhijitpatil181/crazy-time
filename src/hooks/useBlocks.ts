import { useQuery } from "@tanstack/react-query";
import { useAppDispatch } from "./useRedux";
import { getBlocks } from "../apis/rouletten";
import { setBlocks, setTableData } from "../store/slices/rouletten.slice";

const useBlocks = () => {
  const dispatch = useAppDispatch();

  const { data: blocksData } = useQuery({
    queryKey: ["roulette", "blocks"],
    queryFn: async () => {
      try {
        const result = await getBlocks();
        console.log("Blocks data:", result.data);
        if (result.status === 200) {
          dispatch(setBlocks(result?.data?.blocks));
          dispatch(setTableData(result?.data?.tableData));
        }

        return result;
      } catch (error) {
        console.error("Error fetching blocks data:", error);
        throw error; // Rethrow the error to be handled by react-query
      }
    },
  });

  return { blocksData };
};

export default useBlocks;
