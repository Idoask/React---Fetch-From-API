import {
  createContext,
  createFactory,
  useContext,
  useEffect,
  useState,
} from "react";
import { CartContext } from "../context";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardActions } from "@mui/material";
import { Cart } from "../Cart";

function Spinner() {
  return <span className="smooth spinner" />;
}
export const Home = (props) => {
  console.log(props);
  const { cart, setCart, products } = useContext(CartContext);
  // const [loading, setLoading] = useState(false);
  const navigation = useNavigate();
  function moveTo(productId) {
    navigation(`products/${productId}`);
  }

  // if (loading === false) {
  //   return <Spinner  />;
  // }
  return (
    <div className="Home">
      <div className="products">
        {products.map(function (product) {
          return (
            <Card className="product">
              <CardContent>
                <div className="product-title">{product.title}</div>
                <img src={product.image} alt="" />
                <div>Price: ${product.price}</div>
                <div>Rate: {product.rating.rate}</div>
                <div className="description">{product.description}</div>
              </CardContent>
              <CardActions>
                <button
                  onClick={function () {
                    const count = cart[product.id] ? cart[product.id] + 1 : 1;
                    setCart({ ...cart, [product.id]: count });
                  }}
                >
                  add to chart
                </button>
                <button onClick={() => moveTo(product.id)}>see details</button>
              </CardActions>
            </Card>
          );
        })}
      </div>
      <Cart />
    </div>
  );
};
