import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/Item/ItemListContainer'
import ItemDetailContainer from './components/Detail/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {CartContextProvider} from './context/CartContextProvider';
import Cart from "./components/Cart/Cart"
import './app.css';
import Checkout from './components/Chekout/Checkout';

function App() {
  return (
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route path="/" element={<ItemListContainer/>}></Route>
              <Route path="/perfume/:id" element={<ItemDetailContainer/>}></Route>
              <Route path="*" element={<h2>404</h2>}></Route>
              <Route path="/perfume/*" element={<h2>404</h2>}></Route>
              <Route path='/category/:categoryID' element={<ItemListContainer/>}></Route>
              <Route path="/cart" element={<Cart/>}></Route>
              <Route path='/chekout' element={<Checkout/>}></Route>
            </Routes>
        </BrowserRouter>
      </CartContextProvider>
  );
}



export default App;