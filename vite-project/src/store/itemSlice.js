  import {createSlice} from "@reduxjs/toolkit"

  const itemSlice=createSlice(
      {
        name:'item',
        initialState:[],
        reducers:{
          addInitialItems:(state,action)=>{
            return action.payload
          }
          
        }
      }
  )
  export const itemAction=itemSlice.actions;
  export default itemSlice;