import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import InventoryTable from "./components/Inventory";
import SaleTable from "./components/Sale";
import Signin from "./components/Signin";

const App = () => {
  return (
    
   <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/Inventory" element={<InventoryTable />} />
      <Route path="/Sale" element={<SaleTable />} />
    </Routes>
    <Footer/>
    </Router>
   
  )
}

export default App ;
