import React from 'react'

const FinalOrderDetails = ({OrderDetails}) => {
  return (
    <>
    <div className='d-flex justify-content-center row'>

    <div className='shadow-lg p-5 col-xl-6 col-md-6 col-sm-12 col-12'>
<h4 className=''> Delivery address :-</h4>    
      <h5>{OrderDetails.f_nameVal} {OrderDetails.l_nameVal}</h5>
      <p>{OrderDetails.mobVal}</p>
      <p>{OrderDetails.addressVal}</p>
      <p>{OrderDetails.streetVal}</p>
      <p>{OrderDetails.pin_codeVal}</p>
      
    </div>
<div className='shadow-lg p-5 col-xl-6 col-md-6 col-sm-12 col-12'>
    <h3>Make Payment:</h3>
    <div className='d-flex m-3 justify-content-between'>

    <label htmlFor="firstName">Card No</label>
      <input type="text" name=""  className='w-75    ' id="firstName" />
    </div>
    <div className='d-flex m-3 justify-content-between'>

    <label htmlFor="firstName"> Name</label>
      <input type="text" name=""  className='w-75    ' id="firstName" />
    </div>
    <div className='d-flex m-3 justify-content-between'>

    <label htmlFor="firstName">Expiry year</label>
      <input type="number" name=""  className='w-75    ' id="firstName" />
    </div>
<button className='ms-5 btn btn-primary w-50 d-flex justify-content-center'>PAY</button>
</div>
    </div>
    </>
  )
}

export default FinalOrderDetails
