import { useOutletContext } from 'react-router-dom';
import ProductList from './ProductList';

import { useEffect, useState } from 'react';
// import products from './products.js';

function HomePage() {
	const [cart, setCart] = useOutletContext();
	const [products, setProducts] = useState([]);
	const numberOfProducts = 20;

	const fecthProducts = async () => {
		try {
			const data = await fetch(
				`https://fakestoreapi.com/products?limit=${numberOfProducts}`
			);
			const result = await data.json();
			return result;
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const fetchAndAddProducts = async () => {
			const fetched = await fecthProducts();
			setProducts(fetched);
		};

		fetchAndAddProducts();
	}, []);

	return (
		<>
			<h1 className='text-black font-bold text-2xl mb-6'>Home page</h1>
			<ProductList products={products} cart={cart} setCart={setCart} />
		</>
	);
}

export default HomePage;
