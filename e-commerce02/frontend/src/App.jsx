import React from 'react'
import Header from './navbar/Header'
import Footer from './navbar/Footer'
import Layout from './components/Layout'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Home from './components/Home';
import Sidebar from './components/Sidebar';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}></Route>
            <Route path='sidebar' element={<Sidebar/>}></Route>
            {/* <Route path='contact' element={<Contact/>}></Route> */}
            {/* <Route path='about' element={<About />}></Route> */}
      </Route>
    )
  )
  
    return (
      <RouterProvider router={router} />
    )
  // return (
  //   <div >
  //      <h1 className="text-3xl font-bold underline">
  //     Hello world!
  //   </h1>
  //   <Header />
  //   <Footer />
  //   </div>
  // )
}

export default App
