import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null
  },
  reducers: {
    signin: (state, action) => {
      state.userInfo = action.payload; // Update the state directly
    },
    signOutApp: (state) =>{
      state.userInfo = null
    }
  },
});

export default userSlice.reducer;
export const { signin, signOutApp } = userSlice.actions;
