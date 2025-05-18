import { createSlice } from "@reduxjs/toolkit";
import { Row } from "../../types/row.type";
import { fourthRow } from "../../mock";

export interface SelectedBets {
  number: string;
  betPlaced: number;
}

interface Bet {
  currentBet: number;
  lowHeighBets: Row[];
  selctedBets: SelectedBets[];
}

const initialState: Bet = {
  currentBet: 45,
  lowHeighBets: fourthRow,
  selctedBets: [],
};

const blockSlice = createSlice({
  name: "bets",
  initialState,
  reducers: {
    setBet(state, action: { payload: number }) {
      state.currentBet = action.payload;
    },

    setLowHeighBets(state, action: { payload: Row[] }) {
      state.lowHeighBets = action.payload;
    },
    setSelectedBets(state, action: { payload: SelectedBets[] }) {
      state.selctedBets = action.payload;
    },
  },
});

export const betReducer = blockSlice.reducer;
export const { setBet, setLowHeighBets, setSelectedBets } = blockSlice.actions;
