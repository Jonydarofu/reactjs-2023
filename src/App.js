import Footer from "./componentes/Footer/Footer";
import CartWidget from "./componentes/CartWidget/CartWidget";
import Navbar from "./componentes/Navbar/Navbar";
import ProductCard from "./componentes/ProductCard/ProductCard";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemCount from "./componentes/ItemCount/ItemCount";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BsTypeH1 } from "react-icons/bs";

function App() {
  const onAdd = (cantidad) => {
    console.log(`se agrrego al carrito ${cantidad} elementos`);
  };
  let stock = 10;
  let initial = 1;
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
