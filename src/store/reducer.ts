import { betReducer } from "./slices/bet.slice";
import { rouletteGameReducer } from "./slices/rouletteGame.slice";
import { blockReducer } from "./slices/rouletten.slice";
import { tableBlocksReducer } from "./slices/tableBlock.slice";

// }

const reducer = {
  blocks: blockReducer,
  bets: betReducer,
  tableBlocks: tableBlocksReducer,
  rouletterGame: rouletteGameReducer,
};

export default reducer;
