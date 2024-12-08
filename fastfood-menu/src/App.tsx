import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import OrderList from "./component/OrderList";
import { Cart, Product } from "./Interface"

function App() {
  const [cart, setCart] = useState<OrderList[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart)=>{
      const currentProduct = prevCart.find((item)=> item.id === product.id);
      let lastUpdate;

      if(currentProduct){
        lastUpdate = prevCart.map((item)=>
          item.id === product.id ?{...item, quantity: item.quantity + 1} : item
        )
      } else {
        lastUpdate = [...prevCart, {...product, quantity: 1}];
      }
      return lastUpdate;
    })
  }

  return (
    <>
      <Header title="فست فود آنلاین"/>
      <OrderList addToCart={addToCart}/>
    </>
  );
}

export default App;
