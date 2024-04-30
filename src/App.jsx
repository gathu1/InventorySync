import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import InventoryTable from "./components/Inventory";
import SaleTable from "./components/Sale";
import Signin from "./components/Signin";
import ErrorPage from "./components/Error-Page";

const App = () => {
  return (
    
   <Router>
    <Navbar/>
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/" element={<Signin />} />
      <Route path="/Inventory" element={<InventoryTable />} />
      <Route path="/Sale" element={<SaleTable />} />
      <Route path="*" element={<ErrorPage />} />

    </Routes>
    <Footer/>
    </Router>
   
  )
}

export default App ;
