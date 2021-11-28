import { useState , useEffect } from "react";
import Cart from "./Components/Cart/Cart";

import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import {commerce} from "./lib/Commerse"

function App() {
  const [products, setProducts]=useState([]);
  const [cart,setCart]=useState([]);
  const fetchProduct = async ()=>{
    const {data} =await commerce.products.list();
    setProducts(data);
  } 

  const fetchCart= async ()=>{
    const data = await commerce.cart.retrieve();
    setCart(data);
  }
  const addToCart=async (productId,quantity)=>{
    const data = await commerce.cart.add(productId,quantity);
    setCart(data.cart);
  }

  useEffect(()=>{
    fetchProduct();
    fetchCart();
  },[])

  console.log(cart);
  return (
    <div className="App">
      <Navbar cart={cart}/>
     {/* {products && <Products  products={products} addToCart={addToCart}/>} */}
     <Cart cart={cart} />
    </div>
  );
}

export default App;
