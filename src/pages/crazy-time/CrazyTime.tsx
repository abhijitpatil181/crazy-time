import Roulette from "../../components/roulette/Roulette";
import useBlocks from "../../hooks/useBlocks";
import useCoins from "../../hooks/useCoins";
import { useAppSelector } from "../../hooks/useRedux";

const CrazyTime = () => {
  useCoins();
  useBlocks();

  const { blocks } = useAppSelector((state) => state.blocks);
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
