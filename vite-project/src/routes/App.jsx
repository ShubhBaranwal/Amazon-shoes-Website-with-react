import {Outlet} from "react-router-dom"
import './App.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FetchItems from "../components/FetchItems"
import {useDispatch,useSelector} from "react-redux";

import LoadingSpinner from "../components/LoadingSpinner"
function App() {
const fetchStatus=useSelector(store=>store.fetchingStatus);

  return (
 
 <>
 <Navbar/>
 <FetchItems/>
 {fetchStatus.currentlyFetch ? <LoadingSpinner/> : <Outlet/>}



 <Footer/>
 </>
    )
}

export default App
