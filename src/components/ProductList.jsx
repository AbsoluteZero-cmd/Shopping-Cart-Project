import ProductCard from './ProductCard';

function ProductList({ products, cart, setCart }) {
	const addToCart = (product) => {
		const index = cart.findIndex((el) => el.product.id === product.id);
		if (index === -1) {
			setCart([...cart, { product: product, count: 1 }]);
		} else {
			setCart(
				cart.map((item, i) =>
					index === i ? { product: item.product, count: item.count + 1 } : item
				)
			);
		}
	};

	const checkInCart = (product) => {
		const index = cart.findIndex((el) => el.product.id === product.id);
		return index !== -1;
	};

	return (
		<div className='flex flex-wrap justify-evenly gap-y-8 gap-x-2 my-4'>
			{products.map((product) => (
				<ProductCard
					addToCart={addToCart}
					product={product}
					inCart={checkInCart(product)}
				/>
			))}
		</div>
	);
}

export default ProductList;
