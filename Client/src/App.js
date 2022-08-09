import {Link} from 'react-router-dom'
import "./unprotectedcomponents/product.css"
function App() {
  return (
    <div id='container'>
      <h1 id='welcome'>
      WELCOME TO E-CART!
      </h1> 
      <Link to={"/Signup"}><button className='landinbut'>Signup</button></Link>
      <Link to={"/Login"}><button className='landinbut'>Login</button></Link>
    </div>
  );
}

export default App;
