import { configureStore } from "@reduxjs/toolkit";

import { Reducers } from "./reducers";

const { auth } = Reducers.authReducer;

const store = configureStore({
  reducer: { auth },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
