import { configureStore } from "@reduxjs/toolkit";

import cardReducer from "./cards-slice";
import shuffleReducer from "./shuffle-slice";

const store = configureStore({
  reducer: {
    card: cardReducer,
    shuffle: shuffleReducer,
  },
});

export default store;
