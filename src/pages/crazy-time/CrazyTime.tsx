import Roulette from "../../components/roulette/Roulette";
import useBlocks from "../../hooks/useBlocks";

const CrazyTime = () => {
  useBlocks();
  return (
    <>
      <Roulette
        user={{ email: "patilabhijeet2652000@gmail.com", name: "ab" }}
      />
    </>
  );
};

export default CrazyTime;
