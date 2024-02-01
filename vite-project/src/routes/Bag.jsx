import React, { useState } from 'react'
import BagItem from '../components/BagItem'
import BagSummary from '../components/BagSummary'
import {useSelector} from "react-redux"
import OrderForm from '../components/OrderForm'
const Bag = () => {
let [showOrderForm,setShowOrderForm]=useState(false);
  const bagItems=useSelector(store => store.bag);
 const items=useSelector(store => store.item);
 
 
 const finalItems=items.filter((item) =>{
  const itemIndex=bagItems.indexOf(item.id)
  return itemIndex >= 0;
})



function handleShowOrderForm(totalMRP,totalDiscount,CONVENIENCE_FEE,finalPayment){
   setShowOrderForm(!showOrderForm)
}

  return (
    <main>
    <div className="container-fluid mt-5 my-5">
{showOrderForm ? (<div className="row">

<button onClick={()=>setShowOrderForm(!showOrderForm)} className='btn btn-dark my-3 col-1'> ✗</button>
  <OrderForm/>
</div>) : (<div className="row mt-5 my-5">
        <div className="col-xl-7 col-md-7 col-sm-12 col-12">
           <div className="row cart-item-container">
            {
              finalItems.map((item)=>{
                console.log(item);
                return <BagItem key={item.id} item={item}  /> 
              })
            }

             
              
           </div>
           </div>
           <div className="col-xl-5 col-md-5 col-sm-12 col-12 mt-5 d-flex  flex-column align-content-center shadow-sm">
            
             <BagSummary  handleShowOrderForm={handleShowOrderForm}/> 
        </div>
        </div>
   
    )

}


   </div>     
</main>

  )
}

export default Bag
