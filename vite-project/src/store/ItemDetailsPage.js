import {createSlice} from "@reduxjs/toolkit"

let detailsPageSlice=createSlice({
name:"detailPageItem",
initialState:{

},
reducers:{
    sendClickedItem:(state,action)=>{
        return action.payload;
    }
}
})
export let detailPageAction=detailsPageSlice.actions;
export default detailsPageSlice;