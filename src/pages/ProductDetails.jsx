import {
  createContext,
  createFactory,
  useContext,
  useEffect,
  useState,
} from "react";
import { CartContext } from "../context";
import { useParams } from "react-router-dom";
export const ProductDetails = () => {
  console.log("ProductDetails");
  const { products } = useContext(CartContext);
  const { id } = useParams();

  const product = products.find((p) => p.id == id);
  console.log({ product });
  return product ? (
    <div>
      {product.description}
      {product.category}
    </div>
  ) : (
    <div>loading.. </div>
  );
};

//  arrays , methods of array
//exmaple: const product=products.find((p)=>p.id==id)   arr.find/map/findIndex
