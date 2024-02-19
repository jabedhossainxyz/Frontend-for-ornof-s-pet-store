import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSingup from "./Pages/LoginSingup";
import Footer from "./Components/Footer/Footer";
import cat_banner from "./Components/Assets/banner_mens.png";
import fish_banner from "./Components/Assets/banner_women.png";
import duck_banner from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route
            path="/cats"
            element={<ShopCategory banner={cat_banner} category="cats" />}
          ></Route>
          <Route
            path="/fishs"
            element={<ShopCategory banner={fish_banner} category="fishs" />}
          ></Route>
          <Route
            path="/ducks"
            element={<ShopCategory banner={duck_banner} category="ducks" />}
          ></Route>
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<LoginSingup />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
