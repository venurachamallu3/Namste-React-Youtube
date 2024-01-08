import { createSlice } from "@reduxjs/toolkit";

const LivechatSlice = createSlice({
    name:"Livechat",
    initialState:{
        message:[]
    },
    reducers:{
        addmessage:(state,action)=>{
            state.message.splice(25, 1)
            state.message.unshift(action.payload)
        }
    }
})


export const {addmessage} = LivechatSlice.actions
export default LivechatSlice.reducer