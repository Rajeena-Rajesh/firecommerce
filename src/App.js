
import './App.css';
import Homepage from './pages/Homepage';
import {Route, BrowserRouter,Routes,Navigate} from 'react-router-dom'
import CartPage from './pages/CartPage';
import ProductInfo from './pages/ProductInfo';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

import './stylesheet/Layout.css'
import './stylesheet/products.css'
import './stylesheet/Authentication.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
         <ToastContainer/>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<protectedRoutes><Homepage/></protectedRoutes>}/>
        <Route path="/CartPage" exact element={<protectedRoutes><CartPage/></protectedRoutes>}/>
        <Route path="/ProductInfo/:productid" exact element={<protectedRoutes><ProductInfo/></protectedRoutes>}/>
        <Route path="/LoginPage" exact element={<LoginPage/>}/>
        <Route path="/RegisterPage" exact element={<RegisterPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

export const protectedRoutes=({children})=>{
  if(localStorage.getItem('currentUser')){
    return children
  }else{
    <Navigate to ='/LoginPage'/>
  }
}
