import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsCartFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import {useSelector,useDispatch} from "react-redux"
import { itemAction } from '../store/itemSlice';
import { filterBtnAction } from '../store/CategorySlice';
import { searchAction } from '../store/SearchSlice';

const Navbar = () => {

    let bagItems=useSelector(store => store.bag)
     
let dispatch=useDispatch()

    function handleInputChange(event){
        const newValue=event.target.value;
dispatch(searchAction.searchItem(newValue))

    }


  return (
    <nav className="shadow-lg container-fluid bg-dark text-light ">
        <div className="row py-2">
            <div className="col-xl-2 col-md-2 col-sm-6 col-6 order-xl-1 order-md-1 order-sm-1 order-1 d-flex">
                
                <Link to="/"><img src="./logo2.png" className="logo" alt=""/></Link>
            </div>
            <div
                className="col-xl-2 col-md-2 col-sm-12 col-12 order-xl-2 order-md-2 order-sm-4 order-4 d-flex  flex-xl-column flex-md-column flex-sm-row flex-row text-center justify-content-center">
                <div className='location-text'> <FaLocationDot /> delevered to shubh </div>
                <div>ayodhya</div>
            </div>
            <div
                className="col-xl-5 col-md-5 col-sm-12 col-12 order-xl-3 order-md-3 order-sm-3 order-3 d-flex justify-content-center">
                <input type="text" onChange={handleInputChange} placeholder='Search Your Shoes' className="w-75 py-2 px-3 search_bar"  />

            </div>
            <div
                className="col-xl-3 col-md-3 col-sm-6 col-6 d-flex justify-content-around order-xl-4 order-md-4 order-sm-2 order-2 text-center">
                <div>shubh <FaUser /></div>

                <Link   to="/Bag" className="text-decoration-none text-white">cart<BsCartFill /> 
                <span className="cart-length">{bagItems.length-1}</span>
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar

