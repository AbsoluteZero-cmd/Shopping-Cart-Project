import { Children } from 'react';
import App from './components/App.jsx';
import HomePage from './components/HomePage.jsx';
import ShopPage from './components/ShopPage.jsx';

const routes = [
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'shop-page/',
				element: <ShopPage />,
			},
		],
	},
];

export default routes;
