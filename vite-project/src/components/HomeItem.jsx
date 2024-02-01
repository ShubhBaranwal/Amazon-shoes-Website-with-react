import React from 'react'
import {useDispatch,useSelector } from "react-redux"
import { bagAction } from '../store/bagSlice'
import { detailPageAction } from '../store/ItemDetailsPage';
const HomeItem = ({item,handleShowDetailsPage}) => {
  const bagItem=useSelector(store => store.bag);
  const dispatch=useDispatch()
  const isInBag=bagItem.includes(item.id);
  

function handleAddToBag(){
  dispatch(bagAction.addToBag(item.id))
  
}
function handleRemoveBag(){
  dispatch(bagAction.removeFromBag(item.id))
}
function sendCurrItem(){
  dispatch(detailPageAction.sendClickedItem(item))
  handleShowDetailsPage(true)
  
}

    const dynamicStyle = {
        backgroundColor: item.ColorTag,
        // Add other styles as needed...
      };
    return (
    <div className="col-xl-3 col-md-4 col-sm-6 justify-content-around col-6 p-4"  >
    <img className="img-fluid shoes-img" src={item.Img} alt="" />
    <h5>₹{item.Price}</h5>
    <del className="fw-lighter shoes-font">₹{item.MRP}</del>
    <p className="shoes-font">{item.Category}</p>
    <p className="shoes-font text-center">{item.Name}</p>
            <p className="shoes-font text-center">{item.Tag}, {item.Type}</p>
            <div className="d-flex align-content-center justify-content-around">
                <div className="size">{item.Size}</div>
                <div style={dynamicStyle} className="shoes-color shadow-lg"></div>
            </div>
            {
              !isInBag ?<button className="btn btn-dark w-50 text-white text-center" onClick={handleAddToBag} > Cart</button>:<button  className="btn btn-danger w-50 text-white text-center" onClick={handleRemoveBag} >Remove</button>  
            }
            <button className='w-50 btn btn-primary'  onClick={sendCurrItem}>Details</button>
            
        </div>
  )
}

export default HomeItem
