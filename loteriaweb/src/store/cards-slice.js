import { createSlice } from "@reduxjs/toolkit";
import Card from "../models/card";
/* import figure from "../assets/images/figures/spr_posicion_baraja_0.png"; */

const initialState = [
  { id: 1, hasRock: false },
  { id: 2, hasRock: false },
  { id: 3, hasRock: false },
  { id: 4, hasRock: false },
  { id: 5, hasRock: false },
  { id: 6, hasRock: false },
  { id: 7, hasRock: false },
  { id: 8, hasRock: false },
  { id: 9, hasRock: false },
  { id: 10, hasRock: false },
  { id: 11, hasRock: false },
  { id: 12, hasRock: false },
  { id: 13, hasRock: false },
  { id: 14, hasRock: false },
  { id: 53, hasRock: false },
  { id: 54, hasRock: false },
];
const cardSlice = createSlice({
  name: "cardSlice",
  initialState,
  reducers: {
    putRock(state, payload) {
      const fId = payload.payload.id;
      const indexFigure = state.findIndex((figure) => figure.id === fId);

      state[indexFigure].hasRock = !state[indexFigure].hasRock;
    },
    changeFigure(state, payload) {
      const fId = payload.payload.id;
      const indexOfFigure = state.findIndex((figure) => figure.id === fId);
      let id = fId;

      while (true) {
        if (id > 54) {
          id = 1;
        }
        const newIndex = state.findIndex((figure) => figure.id === id);

        if (newIndex === -1) {
          break;
        }
        /* console.log(id); */
        id++;
      }

      state[indexOfFigure].id = id;
    },
  },
});

export default cardSlice.reducer;
export const cartActions = cardSlice.actions;
