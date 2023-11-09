import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Products from './Pages/Products';
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Login /> }></Route>
        <Route path='/products' element={ <Products /> }></Route>
        <Route path='/details' element={ <ProductDetails /> }></Route>
        <Route path='/cart' element={ <Cart /> }></Route>
      </Routes>
    </>
  );
}

export default App;
