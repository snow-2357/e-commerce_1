import { useState , useEffect } from "react";

import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import {commerce} from "./lib/Commerse"

function App() {
  const fetchProduct = async ()=>{
    const {data} =await commerce.products.list();
    setProducts(data);
  } 

  useEffect(()=>{
    fetchProduct();
  },[])

  const [products, setProducts]=useState([])
  return (
    <div className="App">
      <Navbar />
     {products && <Products products={products}/>}
     {console.log(products)}
    </div>
  );
}

export default App;
