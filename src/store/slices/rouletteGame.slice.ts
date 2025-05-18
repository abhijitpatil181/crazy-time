import { createSlice } from "@reduxjs/toolkit";

interface RouletteGame {
  spinning: boolean;
  winningNumber: string;
  selectedNumbers: number[];
  disabled: boolean;
}

const initialState: RouletteGame = {
  spinning: false,
  selectedNumbers: [],
  winningNumber: "",
  disabled: false,
};

const rouletteGameSlice = createSlice({
  name: "rouletteGame",
  initialState,
  reducers: {
    setSpinning(state, action: { payload: boolean }) {
      state.spinning = action.payload;
    },

    setSelectedNumber(state, action: { payload: number[] }) {
      state.selectedNumbers = action.payload;
    },

    setWinningNumber(state, action: { payload: string }) {
      state.winningNumber = action.payload;
    },

    setDisabled(state, action: { payload: boolean }) {
      state.disabled = action.payload;
    },
  },
});

export const rouletteGameReducer = rouletteGameSlice.reducer;
export const { setSpinning, setSelectedNumber, setWinningNumber, setDisabled } =
  rouletteGameSlice.actions;
