import { configureStore } from "@reduxjs/toolkit";
import userSliceReducers from "./userSlice";

const store = configureStore({
    reducer: {
        user: userSliceReducers
    }
})

export default store