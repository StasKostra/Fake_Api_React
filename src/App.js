import { Route, Routes } from 'react-router-dom';
import { Home } from './Component/Home/Home';
import { Products } from './Component/Products/Products';
import { Sell } from './Component/Sell/Sell';
import { Basket } from "./Component/Basket/Basket";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/sell' element={<Sell />} />
        <Route path='/basket' element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
