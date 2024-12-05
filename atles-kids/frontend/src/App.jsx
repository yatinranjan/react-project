
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Country from './pages/Country';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
// import ErrorPage from "./pages/ErrorPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     // errorElement: <ErrorPage />
//     children:[
//       {
//         path:"/",
//         Element : <Home />
//       },
//       {
//         path:"about",
//         Element : <About />
//       },
//       {
//         path:"country",
//         Element : <Country />
//       },
//       {
//         path:"contact",
//         Element : <Contact />
//       }
//     ]
//   }  
 
// ]);
function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}></Route>
          <Route path='country' element={<Country/>}></Route>
          <Route path='contact' element={<Contact/>}></Route>
          <Route path='about' element={<About />}></Route>
    </Route>
  )
)

  return (
    <RouterProvider router={router} />
  )
}

export default App
