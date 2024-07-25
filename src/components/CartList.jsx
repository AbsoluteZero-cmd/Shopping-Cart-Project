import CartItem from './CartItem';

export default function CartList({ cart, setCart }) {
	const changeProductCount = (product, newCount) => {
		const index = cart.findIndex((el) => el.product.id === product.id);
		setCart(
			cart.map((item, i) =>
				index === i ? { product: item.product, count: newCount } : item
			)
		);
	};

	return (
		<div className='flex flex-col justify-evenly gap-y-4 my-4'>
			{cart.map((item) => (
				<CartItem
					product={item.product}
					count={item.count}
					changeProductCount={changeProductCount}
				/>
			))}
		</div>
	);
}
