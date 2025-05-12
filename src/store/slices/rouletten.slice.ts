import { createSlice } from "@reduxjs/toolkit";
import { Option } from "../../types/option.type";
import { Coin } from "../../types/roulette.type";

interface TableData {
  high: Option;
  low: Option;
}

export interface Blocks {
  blocks: Option[];
  tableData: TableData | null;
  coins: Coin[] | [];
}

const initialState: Blocks = {
  blocks: [],
  tableData: null,
  coins: [],
};

const blockSlice = createSlice({
  name: "blocks",
  initialState,
  reducers: {
    setBlocks: (state, action: { payload: Option[] }) => {
      state.blocks = action.payload;
    },
    setTableData: (state, action: { payload: TableData }) => {
      state.tableData = action.payload;
    },
    setCoins: (state, action: { payload: Coin[] }) => {
      state.coins = action.payload;
    },
  },
});

export const blockReducer = blockSlice.reducer;
export const { setBlocks, setTableData, setCoins } = blockSlice.actions;
