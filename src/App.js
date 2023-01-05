import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import Nave from "./components/home/nave/Nave";

function App() {
  return (
    <>
      <Nave />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
