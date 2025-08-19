import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import './index.css'
import Layout from './layout';
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import GitHub, { GitHubLoaderInfo } from './components/Github/Github';



// const router = createBrowserRouter([
//                {
//                   path:'/',
//                   element:<Layout/>,
//                   children:[
                       
//                       {
//                          path:"home",
//                          element:<Home/>
//                       },

//                       {
//                         path:"about",
//                         element:<About/>
//                      },

//                      {
//                       path:"contact",
//                       element:<Contact/>
//                    }
//                   ]
//                }
// ])


const router = createBrowserRouter(
         createRoutesFromElements(
                <Route path="/" element={<Layout/>}>
                     <Route path ="" element= {<Home/>}/>
                     <Route path ="about" element= {<About/>}/>
                     <Route path ="contact" element= {<Contact/>}/>
                     <Route path ="github" element= {<GitHub/>} loader ={
                         GitHubLoaderInfo
                     }/>
                </Route>
         )
)

createRoot(document.getElementById('root')).render(

     <RouterProvider router={router}/>

)
