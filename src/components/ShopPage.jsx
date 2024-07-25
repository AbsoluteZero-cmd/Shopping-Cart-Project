import { useOutletContext } from 'react-router-dom';
import CartList from './CartList';

function ShopPage() {
	const [cart, setCart] = useOutletContext();

	if (cart.length === 0)
		return (
			<div>
				<h1 className='text-black font-bold text-2xl mb-4'>Shop page</h1>
				<p>Nothing here yet</p>
			</div>
		);

	const submitPayment = () => {
		console.log('payment was successful');
		setCart([]);
	};

	const totalSum = cart
		.reduce((a, b) => a + b.product.price * b.count, 0)
		.toFixed(2);

	return (
		<>
			<h1 className='text-black font-bold text-2xl mb-4'>Shop page</h1>
			<CartList cart={cart} setCart={setCart} />
			<p className='font-bold mt-6'>Total sum: {totalSum}</p>
			<button
				onClick={() => submitPayment()}
				className='px-4 py-2 mt-2 bg-blue-600 rounded-md text-white'
			>
				Submit payment
			</button>
		</>
	);
}

export default ShopPage;
