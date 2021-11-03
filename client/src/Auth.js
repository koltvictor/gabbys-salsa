import './App.css';
import ProductList from './components/ProductList'

import { Router, Switch } from 'react-router-dom';

import Header from './components/Header'

export default function Auth() {


//   useEffect(() => {
//     fetch('http://localhost:3000/api/products')
//       .then((r) => r.json())
//       .then(setProducts);
//     }, [])


    return (
    <div>
        
        <Header />
        <ProductList />
        
    </div>
  );
}