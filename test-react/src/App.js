import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Home';
import AllProducts from './redux-project/AllProducts';
import Card from './redux-project/Card';
import AddProducts from './redux-project/addproduct';


function App() {
  return (
    <div>
 

      <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="allproduct" element={<AllProducts/>} />
        <Route path="/add-product" element={<AddProducts/>} />
        <Route path="/card" element={<Card/>} />
      </Routes>
    </div>
  );
}

export default App;
