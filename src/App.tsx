import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Gallery from "./pages/Gallery"
function App() {

  return (
   <BrowserRouter>
   <Navbar />
    <Routes> 
     <Route path="/" element={<Home />}></Route>
     <Route path="/about" element={<About />}></Route>
     <Route path="/gallery" element={<Gallery />}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
