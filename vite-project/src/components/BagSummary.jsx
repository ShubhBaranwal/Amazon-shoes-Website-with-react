import React, { useState } from 'react'
import {useSelector} from "react-redux"
const BagSummary = ({handleShowOrderForm}) => {

  const bagItems=useSelector(state => state.bag);
  let CONVENIENCE_FEE=99;
  let totalMRP=0;
  let totalDiscount=0;

  const items=useSelector(state => state.item)
 
  const finalItems=items.filter((item) =>{
    const itemIndex=bagItems.indexOf(item.id)
    return itemIndex >= 0;
  })
  finalItems.forEach((bagItem)=>{
   totalMRP += bagItem.MRP;
   totalDiscount=bagItem.MRP-bagItem.Price
  })
  let finalPayment=totalMRP-totalDiscount+CONVENIENCE_FEE

function handlePaymentData(){
  handleShowOrderForm(totalMRP,totalDiscount,CONVENIENCE_FEE,finalPayment)
}




  return (
    <>
      <div className="h5 text-center">PRICE DETAILS ({bagItems.length-1} Items)</div>
              <div className="h6 d-flex justify-content-around">
                <span className="">Total MRP</span>
                <span className="">Rs {totalMRP}</span>
              </div>
              <div className="h6 d-flex justify-content-around">
                <span>Discount MRP</span>
                <span>Rs {totalDiscount}</span>
              </div>
              <div className="h6 d-flex justify-content-around">
                <span>Convenience Fee</span>
                <span>Rs 99</span>
              </div>
              <div className="mt-5 card">
                <div className="h6 d-flex justify-content-around p-2">
                    <span>Total Amount</span>
                    <span> Rs {finalPayment}</span>
                  </div>
{finalItems.length > 0 ? (<button className=" w-75 m-auto btn btn-danger text-white ttext-center" onClick={handlePaymentData}>PLACE ORDER</button>) : null

}                  
              </div>
    </>
  )
}

export default BagSummary
