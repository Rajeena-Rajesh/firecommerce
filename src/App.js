
import './App.css';
import Homepage from './pages/Homepage';
import {Route, BrowserRouter,Routes} from 'react-router-dom'
import CartPage from './pages/CartPage';
import ProductInfo from './pages/ProductInfo';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Homepage/>}/>
        <Route path="/CartPage" exact element={<CartPage/>}/>
        <Route path="/ProductInfo" exact element={<ProductInfo/>}/>
        <Route path="/LoginPage" exact element={<LoginPage/>}/>
        <Route path="/RegisterPage" exact element={<RegisterPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
