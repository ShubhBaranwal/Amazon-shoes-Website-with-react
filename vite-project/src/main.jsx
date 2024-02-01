import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home.jsx'
import Bag from './routes/Bag.jsx'
import {Provider} from "react-redux"
import amazonStore from "./store/index.js"
let router= createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"/", element:<Home/>},
      {path:"/Bag", element:<Bag/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={amazonStore}>

  <RouterProvider router={router}>

  </RouterProvider>
    </Provider>

    

  </React.StrictMode>,
)
