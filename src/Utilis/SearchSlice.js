import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
    name:"search",
    initialState : {},
    reducers:{
        cacheSuggestions(state,action){
            // state.cacheSuggestions={...state.cacheSuggestions,...action.payload} check why it is not working
            state = Object.assign(state , action.payload);
        }
    }

})

export const {cacheSuggestions} = SearchSlice.actions;

export default SearchSlice.reducer;