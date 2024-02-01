import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { itemAction } from '../store/itemSlice';
import { filterBtnAction } from '../store/CategorySlice';
const FilterButton = () => {
let dispatch =useDispatch()


let  filterButtons=["All","Women's","Sport's","Men's","Kid's"]

function handleCLick(item){

dispatch(filterBtnAction.filtersItemsByCategory(item))
}

  return (
    
    <>
    
    {
        filterButtons.map((item)=>{
            return<div className="col-2 mt-2 d-flex justify-content-center" key={item}>
             <button  className='btn btn-dark px-3' onClick={()=>handleCLick(item)}>{item}</button>
             </div>
        })
    }
    
    </>
  )
}

export default FilterButton
