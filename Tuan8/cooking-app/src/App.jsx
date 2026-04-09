import { Outlet } from "react-router-dom"
import Footer from "./pages/commons/Footer"
import Header from "./pages/commons/Header"

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
