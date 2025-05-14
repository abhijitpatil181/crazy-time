import { betReducer } from "./slices/bet.slice";
import { blockReducer } from "./slices/rouletten.slice";

// }

const reducer = {
  blocks: blockReducer,
  bets: betReducer,
};

export default reducer;
