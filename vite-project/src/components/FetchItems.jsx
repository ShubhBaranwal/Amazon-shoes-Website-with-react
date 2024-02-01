import React, { useEffect } from 'react'
import {useDispatch} from "react-redux";
import { itemAction } from '../store/itemSlice';
import { fetchSliceAction } from '../store/fetchStatusSlice';

const FetchItems = () => {
let dispatch=useDispatch()
    useEffect(()=>{
dispatch(fetchSliceAction.markFetchStarted())
fetch("http://localhost:8080/items").
then((response)=>{
    return response.json()
}).then(({items})=>{
    dispatch(fetchSliceAction.markFetchDone())
    dispatch(itemAction.addInitialItems(items[0]))

    dispatch(fetchSliceAction.markFetchedFinished())
})

},[])

  return (
    <>
      
    </>
  )
}

export default FetchItems
