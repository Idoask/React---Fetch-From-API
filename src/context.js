import { createContext, createFactory, useEffect, useState } from "react";

export const CartContext = createContext("");
const productsUrl = "https://fakestoreapi.com/products";
export function CartContextProvider(props) {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(function () {
    fetch(productsUrl)
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        setProducts(body); //update products
      });
  }, []);
  return (
    <CartContext.Provider value={{ cart, setCart,products }}>
      {props.children}
    </CartContext.Provider>
  );
}
