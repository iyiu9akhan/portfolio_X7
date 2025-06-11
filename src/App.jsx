import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import ErrorPage from './components/layout/errorPage/ErrorPage'
import Banner from './components/banner/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Banner></Banner>
      {/* <ErrorPage></ErrorPage> */}
    </>
  )
}

export default App
