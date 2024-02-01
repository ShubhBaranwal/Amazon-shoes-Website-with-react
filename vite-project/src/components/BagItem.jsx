import React from 'react'
import {useDispatch} from "react-redux"
import { bagAction } from '../store/bagSlice';
const BagItem = ({item}) => {
  
let dispatch=useDispatch();

function removefromBag(){
  dispatch(bagAction.removeFromBag(item.id))
}
  return (
    <div className="col-12 shadow-lg d-flex justify-content-evenly p-2 mb-2">
    <div className="w-25"> 
    <img src={item.Img} className="img-fluid " alt=""/>
</div>
<div className="d-flex  flex-column justify-content-center">
    <h4 className="text-end" onClick={removefromBag}>❎</h4>
    <h5>₹{item.Price}</h5>
    <del className="fw-lighter shoes-font">₹{item.MRP}</del>
    <p className="shoes-font">{item.Category}</p>
    <p className="shoes-font text-center">{item.Name}</p>
    <p className="shoes-font text-center"> {item.tag} , {item.Type} </p>
</div>


 </div>
  )
}

export default BagItem
