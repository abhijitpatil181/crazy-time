import { createSlice } from "@reduxjs/toolkit";

interface Bet {
  currentBet: number;
}

const initialState: Bet = {
  currentBet: 45,
};

const blockSlice = createSlice({
  name: "bets",
  initialState,
  reducers: {
    setBet(state, action: { payload: number }) {
      state.currentBet = action.payload;
    },
  },
});

export const betReducer = blockSlice.reducer;
export const { setBet } = blockSlice.actions;
