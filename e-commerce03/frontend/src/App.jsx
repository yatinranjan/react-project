import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter,  Route,  Routes} from 'react-router-dom';
// createBrowserRouter, createRoutesFromElements,RouterProvider,
// import Layout from './components/Layout';
import Home from './pages/Home';
// import About from './pages/About';
import Cart from './pages/Cart';
// import Contact from './pages/Contact';
import Header from './UI/Header';
import productList from './components/Data';

function App() {
  const [productId, setProudctId] = useState("");
  const [cartAllProduct, setCartAllProduct] = useState([]);

  useEffect(() => {

    const filteredObject = productList.filter(
      (product) => product.id == productId
    );
    setCartAllProduct([...cartAllProduct, ...filteredObject]);

  }, [productId]);
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path='/' element={<Layout/>}>
  //         <Route index element={<Home setProductId={setProudctId}/>}></Route>
  //           <Route path='cart' element={<Cart cartAllProduct={cartAllProduct} setCartAllProduct={setCartAllProduct}/>}></Route>
  //           <Route path='contact' element={<Contact/>}></Route>
  //           <Route path='about' element={<About />}></Route>
  //     </Route>
  //   )
  // )

  return (
    <>
{/* <RouterProvider router={router} /> */}

<BrowserRouter>
  <Header cartAllProduct={cartAllProduct}/>
  <Routes>
    <Route
      path="/"
      element={<Home setProductId={setProudctId} />}
    ></Route>
    <Route
      path="/cart"
      element={<Cart cartAllProduct={cartAllProduct} setCartAllProduct={setCartAllProduct}/>}
    ></Route>
  </Routes>
</BrowserRouter>
</>
  )
}

export default App
