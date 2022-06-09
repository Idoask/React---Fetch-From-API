import { useEffect, useState } from "react";
import "./App.css";

const productsUrl = "https://fakestoreapi.com/products";

// JSX

function Spinner() {
	return <span className="smooth spinner" />;
}
function App() {
	const [products, setProducts] = useState([]);
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

	console.log("products", products);

	if (loading === false) {
		return <Spinner />;
	}
	return (
		<div className="App">
			<div className="products">
				{products.map(function (product) {
					return (
						<div className="product">
							<div className="product-title">{product.title}</div>
							<img src={product.image} alt="" />
							<div>Price: ${product.price}</div>
							<div>Rate: {product.rating.rate}</div>
							<div className="description">{product.description}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
