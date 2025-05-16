import { betReducer } from "./slices/bet.slice";
import { blockReducer } from "./slices/rouletten.slice";
import { tableBlocksReducer } from "./slices/tableBlock.slice";

// }

const reducer = {
  blocks: blockReducer,
  bets: betReducer,
  tableBlocks: tableBlocksReducer,
};

export default reducer;
