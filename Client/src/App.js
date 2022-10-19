import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Signup from './unprotectedcomponents/Signup';
import Login from './unprotectedcomponents/Login';
import Products from './unprotectedcomponents/Products';
import Cart from './protectedcomponents/Cart';
import Orders from './protectedcomponents/Orders';
import Logout from './protectedcomponents/Logout';
import Protected from './protectedcomponents/Protected';


function App() {

  return (
    <div>  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Signup/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/Products" element={<Products/>}></Route>
    <Route path="/cart" element={<Protected><Cart/></Protected>}></Route>
    <Route path="/order" element={<Protected><Orders/></Protected>}></Route>
    <Route path="/Logout" element={<Protected><Logout/></Protected>}></Route>
    </Routes>
    </BrowserRouter></div>
  );
}

export default App;
