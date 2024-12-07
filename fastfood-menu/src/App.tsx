// import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import OrderList from "./component/OrderList";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header title="فست فود آنلاین"/>
      <OrderList />
    </>
  );
}

export default App;
