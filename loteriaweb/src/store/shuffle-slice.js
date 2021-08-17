import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const shuffleSlice = createSlice({
  initialState,
  name: "shufleSlice",
  reducers: {
    shuffleMaze(state) {
      // Initial empty array
      const arr = [];

      do {
        // Generating random number
        const randomNumber = Math.floor(Math.random() * 54);

        // Pushing into the array only
        // if the array does not contain it
        if (!arr.includes(randomNumber)) {
          arr.push(randomNumber);
        }
      } while (arr.length < 54);

      // Printing the array elements
      

      return (state = [...arr]);
    },
    nextCard(state, payload) {},
  },
});

export default shuffleSlice.reducer;

export const shuffleActions = shuffleSlice.actions;
