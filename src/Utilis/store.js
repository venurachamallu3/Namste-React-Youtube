import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice";
import SearchSlice from "./SearchSlice";
import LivechatSlice from "./LivechatSlice";

const store = configureStore({
    reducer:{
        nav:navSlice,
        search:SearchSlice,
        Livechat:LivechatSlice
    }
})

export default store;
