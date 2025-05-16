import { useEffect } from "react";
import Roulette from "../../components/roulette/Roulette";
import useBlocks from "../../hooks/useBlocks";
import useCoins from "../../hooks/useCoins";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { getTableBlocks } from "../../utils/block.utils";
import { setTableBlocks } from "../../store/slices/tableBlock.slice";

const CrazyTime = () => {
  useCoins();
  useBlocks();
  const { blocks } = useAppSelector((state) => state.blocks);
  const dispatch=useAppDispatch();

  useEffect(() => {
    if (blocks.length > 0) {
      const blocksData = getTableBlocks(blocks);
      dispatch(setTableBlocks(blocksData));
     
    }
  }, [blocks]);

  return (
    <>
      {blocks.length > 0 && (
        <div className="d-flex justify-content-center">
          <Roulette
            user={{ email: "patilabhijeet2652000@gmail.com", name: "ab" }}
          />
        </div>
      )}
    </>
  );
};

export default CrazyTime;
