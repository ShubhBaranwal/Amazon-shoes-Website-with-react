import React from 'react'
import {useSelector} from "react-redux"
const ItemsDetailsPage = ({handleShowDetailsPage}) => {
    let detailsItemsObj=useSelector(store => store.detailsPage);
    console.log(detailsItemsObj,"kuch")
  return (
    <div className='container-fluid'>
        <button onClick={()=>handleShowDetailsPage(false)} className='btn btn-dark my-3'> ✗</button>
        <div className="row">
            <div className="col-xl-4 col-md-4 col-sm-12 col-12">
                 <img src={detailsItemsObj.Img} className='img-fluid' alt="" />
            </div>
            <div className="col-xl-8 col-md-8 col-sm-12 col-12 ps-sm-3">
                 <h2>{detailsItemsObj.Name}</h2>
                 <h6 className=''>3.8 ⭐⭐⭐⭐⭐  {Math.floor(Math.random() * (100 - 10) + 10)} ratings</h6>
                 <p className='h4'><del className='text-danger'>₹{detailsItemsObj.MRP}</del> ₹{detailsItemsObj.Price}</p>
              <p>Inclusive of all taxes</p>
              <div className='d-flex justify-content-around w-75 page-details-icon'>
                <div>
                  <img src="public\img\icon-returns._CB484059092_.png" className='' width="45px" alt="" />
                   <p>10 days returns <br />and exchanges</p>
                </div>
                <div>
                  <img src="public\img\icon-cod._CB485937110_.png" alt="" width="45px"/>
                   <p>Pay on Delivary</p>
                </div>
                <div>
                  <img src="public\img\freeship.png" width="45px" alt="" />
                   <p>Free Delivery</p>
                </div>
                <div>
                  <img src="public\img\cod.png" width="45px" alt="" />
                   <p>Top Brands</p>
                </div>

              </div>
              <div className='d-flex'>
                Sizes:-{detailsItemsObj.Size.map((item,index) => <span className='ms-1'  key={index}>{item} , </span>)}
              </div>
              <div className='mt-3 fw-bold text-danger'>
                  <div className=''>Category :-  <span className='m-5 text-center '>{detailsItemsObj.Category}</span></div>
                  <div>Tags :-  <span className='m-5 text-center'>{detailsItemsObj.Tag}</span></div>
                  <div>Type :-  <span className='m-5 text-center'>{detailsItemsObj.Type}</span></div>
                  <div>Colour :-  <span className='m-5 text-center'>{detailsItemsObj.ColorTag}</span></div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ItemsDetailsPage

