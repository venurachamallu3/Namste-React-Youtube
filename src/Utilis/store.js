import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import SearchSlice from "./SearchSlice";

const store = configureStore({
    reducer:{
        nav:navSlice,
        search:SearchSlice
    }
})

export default store;
