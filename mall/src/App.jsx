import { useState } from 'react'
import './App.css'
import root from './router/root'
import { RouterProvider } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={root} />
    </>
  )
}

export default App
