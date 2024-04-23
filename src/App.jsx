import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import InventoryTable from "./components/Inventory";
import SaleTable from "./components/Sale";

const App = () => {
  return (
    
   <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Inventory" element={<InventoryTable />} />
      <Route path="/Sale" element={<SaleTable />} />

    </Routes>
    <Footer/>
    </Router>
   
  )
}

export default App ;
