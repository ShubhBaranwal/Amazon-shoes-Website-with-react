import {createSlice} from "@reduxjs/toolkit"

let fetchSlice=createSlice({
name:'fetchStatus',
initialState:{
    fetchDone:false,
    currentlyFetch:false,
},
reducers:{
    markFetchDone:(state)=>{
        state.fetchDone=true
    },
    markFetchStarted:(state)=>{
        state.currentlyFetch=true
    },
    markFetchedFinished:(state)=>{
        state.currentlyFetch=false
    }
}


})

export const fetchSliceAction=fetchSlice.actions;
export default fetchSlice;
