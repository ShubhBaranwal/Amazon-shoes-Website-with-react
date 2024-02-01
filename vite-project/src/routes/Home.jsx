import React, { useState } from 'react'
import HomeItem from '../components/HomeItem'
import {useSelector} from "react-redux"
import FilterButton from '../components/FilterButton';
import ItemsDetailsPage from '../components/ItemsDetailsPage';
const Home = () => {

let [showDetailsPage,setShowDetails]=useState(false);
  let items=useSelector(store => store.item);
let selectedButton=useSelector(store => store.filterBtn);
let searchValue=useSelector(store => store.searchItem);

let finalItems=items.filter((item)=>{
  let categoryMatch=selectedButton==="All" || item.Category === selectedButton;
  let SearchMatch=item.Name.toLowerCase().includes(searchValue.toLowerCase())
  return categoryMatch && SearchMatch;
})



function handleShowDetailsPage(value){
     setShowDetails(value)
}


  return (
    <div className="rightmain col-xl-12 col-md-12 col-sm-12 col-sm-12 ">
     {showDetailsPage ? (<ItemsDetailsPage handleShowDetailsPage={handleShowDetailsPage}/>) : (
      <>
      <div className="row button-container d-flex justify-content-between">
        
        <FilterButton/>
    
        
            </div>
            <div className="row my-5 shoes-item-container ">
        {
            finalItems.map((item)=>{
                return <HomeItem handleShowDetailsPage={handleShowDetailsPage} key={item.id} item={item} />
            })
        }
         
        </div>
        </>
     )

     }
     
      
    </div>
  )
}

export default Home
