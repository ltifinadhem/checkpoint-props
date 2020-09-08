import React from 'react';
import './App.css';
import ProductTable from './productTable';
const products =[
  {name:'iphone',price:1200,category:'electronics'},
  {name:'veste',price:125,category:'clothes'},
  {name:'pull',price:80,category:'clothes'},
] ;
const New =()=>{
  return (  
  products.map(product=> <ProductTable name={product.name} price={product.price} category={product.category}/>)
  )
}
function App() {
  return (
    <div className="App">
      <h1> List of products </h1>
       <table className="list" style={{ width: '80%' }}>
      <tr> 
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
     </tr>

  <New />
  </table>
    </div>
  );
}

export default App;
