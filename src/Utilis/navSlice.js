import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name:"app",
    initialState:{
        ismenushow:"true"
    },
    reducers:{
        toogleMenuSlide:(state)=>{
            state.ismenushow = !state.ismenushow;
        },
        closeMenuSlide:(state)=>{
            state.ismenushow=false;
        }
    }
})

export const {toogleMenuSlide, closeMenuSlide}= navSlice.actions

export default navSlice.reducer