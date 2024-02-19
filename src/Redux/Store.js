import { configureStore } from "@reduxjs/toolkit";
import allReducers from "./Reducers/combineReducer";

const store = configureStore({
    reducer: allReducers,
});
export default store;
