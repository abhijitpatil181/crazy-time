import { createSlice } from "@reduxjs/toolkit";
import { Row } from "../../types/row.type";

interface TableBlocksState {
  tableBlocks: Row[];
}

const initialState: TableBlocksState = {
  tableBlocks: [],
};

const tableBlocksSlice = createSlice({
  name: "tableBlocks",
  initialState,
  reducers: {
    setTableBlocks(state, action: { payload: Row[] }) {
      state.tableBlocks = action.payload;
    },
  },
});

export const tableBlocksReducer = tableBlocksSlice.reducer;
export const { setTableBlocks } = tableBlocksSlice.actions;
