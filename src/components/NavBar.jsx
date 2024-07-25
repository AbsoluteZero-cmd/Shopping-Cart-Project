import { Link } from 'react-router-dom';

function NavBar({ cart }) {
	const totalItems = cart.reduce((a, b) => a + b.count, 0);

	return (
		<div className='py-4 flex justify-between'>
			<div>
				<Link to='/' className='mr-4 text-blue-600 font-medium hover:underline'>
					Home Page
				</Link>
				<Link
					to='shop-page/'
					className='mr-4 text-blue-600 font-medium hover:underline'
				>
					Shop Page
				</Link>
			</div>
			<p>Items in cart: {totalItems}</p>
		</div>
	);
}

export default NavBar;
