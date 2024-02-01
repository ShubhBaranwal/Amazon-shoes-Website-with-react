import React, { useRef, useState } from 'react'
import FinalOrderDetails from './FinalOrderDetails';

const OrderForm = () => {

let [showFinalDetails,setFinalDetails]=useState(false)
let [OrderDetails,setOrderDetails]=useState()
    let f_name=useRef();
    let l_name=useRef();
    let address=useRef();
    let mob=useRef();
    let street=useRef()
    let pin_code=useRef()

function handleOrderFormSubmit(){
  setOrderDetails({
        f_nameVal:f_name.current.value,
        l_nameVal:l_name.current.value,
        addressVal:address.current.value,
        mobVal:mob.current.value,
        streetVal:street.current.value,
        pin_codeVal:pin_code.current.value  
    })
setFinalDetails(!showFinalDetails)    
}


  return (
    <>
    {showFinalDetails ? (<FinalOrderDetails OrderDetails={OrderDetails}/>) : (
<>

<form className='row d-flex gy-5 bg-light shadow-sm pb-5'>
        <div className="col-xl-6 col-md-6 col-sm-12 col-12 d-flex justify-content-around"><label htmlFor="firstName">First Name</label>
      <input type="text" name="" ref={f_name} className='w-75    ' id="firstName" />
        </div>
        <div className="col-xl-6 col-md-6 col-sm-12 col-12 d-flex justify-content-around"><label htmlFor="firstName">Last Name</label>
      <input type="text" name="" ref={l_name} className='w-75' id="firstName" />
        </div>
        
        <div className="col-xl-6 col-md-6 col-sm-12 col-12 d-flex justify-content-around"><label htmlFor="firstName">Mobile</label>
      <input type="text" name="" className='w-75' id="firstName" ref={mob} />
        </div>
        <div className="col-xl-6 col-md-6 col-sm-12 col-12 d-flex justify-content-around"><label htmlFor="firstName">Address</label>
      <input type="text" name="" className='w-75' ref={address} id="firstName" />
        </div>
        <div className="col-xl-6 col-md-6 col-sm-12 col-12 d-flex justify-content-around"><label htmlFor="firstName">Street</label>
      <input type="text" name="" className='w-75' id="firstName" ref={street}/>
        </div>
        <div className="col-xl-6 col-md-6 col-sm-12 col-12 d-flex justify-content-around"><label htmlFor="firstName">Pin Code</label>
      <input type="text" name="" className='w-75' id="firstName" ref={pin_code}/>
        </div>
    </form>
        <button onClick={handleOrderFormSubmit} className='col-3 m-auto btn btn-dark my-3'>submit</button>  


</>
    )

    }
        </>
  )
}

export default OrderForm
