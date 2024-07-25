import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

function App() {
	const [cart, setCart] = useState([]);

	return (
		<div className='max-w-screen-lg mx-auto'>
			<NavBar cart={cart} />
			<Outlet context={[cart, setCart]} />
		</div>
	);
}

export default App;
