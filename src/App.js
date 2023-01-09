import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Carts from "./components/cart/Carts";
import Nave from "./components/home/nave/Nave";

function App() {
  return (
    <>
      <Nave />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Carts />} />
      </Routes>
    </>
  );
}

export default App;
