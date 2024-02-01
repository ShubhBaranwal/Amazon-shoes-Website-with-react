import {createSlice} from "@reduxjs/toolkit"

let categorySlice=createSlice({
name:'filterBtn',
initialState:"All",
reducers:{
    filtersItemsByCategory:(state,action)=>{
        return action.payload;
        
    }


}
})
export let filterBtnAction=categorySlice.actions;


export default categorySlice;