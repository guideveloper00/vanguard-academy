import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    auth: function (state, action) {
      if (action.payload) {
        state.isAuthenticated = action.payload;
      }
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
