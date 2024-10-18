import './App.css';
import Footer from './components/Fotter'; 
import Fashion from './components/Fashion';
import Electronics from './components/Electronics'; 
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import SearchResults from './components/SearchResults';
import Fastune from './components/Fastune';
import Wallboad from './components/Wallboad';
// import OurTeam from './components/OurTeam';
import Login from './components/Login';

function App() {
  return (
    <div>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Fashion />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/electronics" element={<Electronics />} />
        {/* <Route path="/ourteam" element={<OurTeam />} /> */}
        
        <Route path="/jewellery" element={<Footer />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/Fastune" element={<Fastune />} />
        <Route path="/Wallboad" element={<Wallboad />} />
        <Route path="/Login" element={<Login />} />



        <Route path="/search" element={<SearchResults />} /> {/* Use element instead of component */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App; 