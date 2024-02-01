import {createSlice} from "@reduxjs/toolkit"



let searchSlice=createSlice({
    name:"search",
    initialState:" ",
    reducers:{
    searchItem:(state,action)=>{
        return action.payload;
    }
}
})
export let searchAction=searchSlice.actions;

export default searchSlice;
