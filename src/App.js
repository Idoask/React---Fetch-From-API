import {
  createContext,
  createFactory,
  useContext,
  useEffect,
  useState,
} from "react";
import "./App.css";
import { CartContext } from "./context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProductDetails } from "./pages/ProductDetails";
const productsUrl = "https://fakestoreapi.com/products";


// JSX

function Spinner() {
  return <span className="smooth spinner" />;
}

function App() {
  const [products, setProducts] = useState([]);

  const { cart, setCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    fetch(productsUrl)
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        setProducts(body); //update products
        setLoading(true);
      });
  }, []);


  if (loading === false) {
    return <Spinner />;
  }

  return (
    <div >
      <BrowserRouter>
        <h2> header</h2>
        <Routes>
          <Route path="" element={<Home   />}></Route>
          <Route path="products/:id" element={<ProductDetails />}></Route>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
