import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Router from './Router.jsx'

import About from './components/About/About.jsx'
import Use from "./components/Use/Use.jsx"
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import Review from './components/Review/Review.jsx'
import Signup from './components/Signup/Signup.jsx'
import Login from './components/Login/Login.jsx'
import Drone from './components/Drone/Drone.jsx'
import Book from './components/Book/Book.jsx'
import AgriDrone from './components/ExplorePage/AgriDrone.jsx'
import ConDrone from './components/ExplorePage/ConDrone.jsx'
import DefDrone from './components/ExplorePage/DefDrone.jsx'
import DisDrone from './components/ExplorePage/DisDrone.jsx'
import EnvDrone from './components/ExplorePage/EnvDrone.jsx'
import SurDrone from './components/ExplorePage/SurDrone.jsx'
import AutoFeature from './components/Features/AutoFeature.jsx'
import GpsFeature from './components/Features/GpsFeature.jsx'
import MultiFeature from './components/Features/MultiFeature.jsx'
import RealFeature from './components/Features/RealFeature.jsx'
import ReviewGiven from './components/Review/ReviewGiven.jsx'
import BlogPage from './components/Blog/Blog.jsx'
import BlogWrite from './components/Blog/BlogWrite.jsx'
import Faq from './components/FAQ/Faq.jsx'
import Terms from './components/Terms/Terms.jsx'
import Security from './components/Terms/Security.jsx'
import Privacy from './components/Terms/Privacy.jsx'
import DroneModel from './components/Drone/DroneModel.jsx'
import BuildPage from './components/Drone/BuildPage.jsx'
import Service from './components/Service/Service.jsx'
// import Industry from './components/Service/Industry.jsx'
import Pilot from './components/Service/Pilot.jsx'
import Maintenance from './components/Support/Maintence.jsx'
import Training from './components/Support/Training.jsx'
import Community from './components/Support/Community.jsx'
import Upload from './components/Support/Upload.jsx'
import Beginner from './components/Support/Training_Page/Beginner.jsx'
import Intermediate from './components/Support/Training_Page/Intermediate.jsx'
import DroneMapping from './components/Support/Training_Page/DroneCerti.jsx'

import DGCACertification from './components/Support/Training_Page/Dgca.jsx'
import CertificateGenerator from './components/Support/Training_Page/Generate.jsx'
import SupportPage from './components/Support/Support.jsx'
import Quote from './components/Support/Maintence_Page/Quote.jsx'
import Repair from './components/Support/Maintence_Page/Repair.jsx'
import Request from './components/Support/Maintence_Page/Request.jsx'
import Warranty from './components/Support/Maintence_Page/Warranty.jsx'
import { CartProvider } from './components/Buy/Cart.jsx'
import CartPage from './components/Buy/CartPage.jsx'
import Checkout from './components/Buy/Checkout.jsx'
import Consultation from "./components/Buy/Consultation"


const router = createBrowserRouter([
  {
    path:'/',
    element: <Router/>,
    children:[
      {
        path:"about",
        element:<About/>
      }
      ,{
        path:"/"
        ,
        element:<Home/>
      }
      ,{
        path:"use"
        ,element:<Use/>
      }
       
      ,{
        path:"contact",
        element:<Contact/>
      }
      ,{
        path:"review",
        element:<Review/>
      }
      ,{
        path:"signup",
        element:<Signup/>
      }
      ,{
        path:"login",
        element:<Login/>
      }
      ,{
        path:"drone",
        element:<Drone/>
      },{
        path:"book",
        element:<Book/>
      }
      ,{
        path:"use/agridrone",
        element:<AgriDrone/>
      },{
       path:"use/condrone",
        element:<ConDrone/>
      }
      ,{
       path:"use/defdrone",
        element:<DefDrone/>
      },{
       path:"use/disdrone",
        element:<DisDrone/>
      },{
       path:"use/envdrone",
        element:<EnvDrone/>
      },{
       path:"use/surdrone",
        element:<SurDrone/>
      }
      ,{
       path:"/auto",
        element:<AutoFeature/>
      },{
       path:"/gps",
        element:<GpsFeature/>
      },{
       path:"/mul",
        element:<MultiFeature/>
      },{
       path:"/real",
        element:<RealFeature/>
      },{
        path:"/reviewgive",
        element:<ReviewGiven/>
      },{
        path:"blog",
        element:<BlogPage/>
      },{
        path:"blogwrite",
        element:<BlogWrite/>
      },{
        path:"faq",
        element:<Faq/>
      },{
        path:"terms",
        element:<Terms/>
      },{
        path:"security",
        element:<Security/>
      }
      ,{
        path:"privacy",
        element:<Privacy/>
      },{
        path:"model",
        element:<DroneModel/>
      },{
        path:"build",
        element:<BuildPage/>
      }
      ,{
        path:"service",
        element:<Service/>
      },
      // {
      //   path:"industry",
      //   element:<Industry/>
      // },
      {
        path:"pilot",
        element:<Pilot/>
      },{
        path:"maintence",
        element:<Maintenance/>
      },{
        path:"training",
        element:<Training/>
      },{
        path:"comm",
        element:<Community/>
      },{
        path:"upload",
        element:<Upload/>
      },{
        path:"beginner",
        element:<Beginner/>
      },{
        path:"intermedi",
        element:<Intermediate/>
      },{
        path:"mapcerti",
        element:<DroneMapping/>
      },{
        path:"mapprofcerti",
        element:<CertificateGenerator/>
      },{
        path:"dgca",
        element:<DGCACertification/>
      },{
        path:"support",
        element:<SupportPage/>
      },{
        path:"quote",
        element:<Quote/>
      },
      {
        path:"repair",
        element:<Repair/>
      }
      ,{
        path:"request",
        element:<Request/>
      },{
        path:"warranty",
        element:<Warranty/>
      },{
        path:"carts",
        element:<CartPage/>
      },{
        path:"checkout",
        element:<Checkout/>
      },{
        path:"consultation",
        element:<Consultation/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
 
  <StrictMode>
    <CartProvider>
    <RouterProvider router={router}/>
    </CartProvider>
  </StrictMode>,
  
)
