import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import AddProducts from './redux-project/addproduct';
import Home from './Home';


function App() {
  return (
    <div>
 

      <Routes>
      <Route path="/home" element={<Home/>} />

        <Route path="/add-product" element={<AddProducts/>} />
      </Routes>
    </div>
  );
}

export default App;
