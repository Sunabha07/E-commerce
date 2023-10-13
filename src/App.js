import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
// import {ProductList} from './features/Product-List/productList';

import { ProductList } from './features/Product-List/ProductList';

function App() {
  return (
    <div className="App">
     <ProductList/>
    </div>
  );
}

export default App;
