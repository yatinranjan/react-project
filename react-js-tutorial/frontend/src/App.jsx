import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tu_70 from './pages/Tu_70'
import ReducerComp from './pages/ReducerComp'
import UseCallBackHook_74 from './pages/UseCallBackHook_74'


function App() {
  const [count, setCount] = useState(0)

  return (
<div>
    <Tu_70 />
    <UseCallBackHook_74 />
    <ReducerComp />
    

</div>
  )
}

export default App
