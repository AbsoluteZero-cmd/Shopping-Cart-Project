import { useState } from 'react';

function CartItem({ product, count, changeProductCount }) {
	const [value, setValue] = useState(count);

	const cost = value * product.price;

	return (
		<div className='max-full mx-auto p-4 bg-white rounded-xl shadow-md overflow-hidden'>
			<div className='md:flex flex-row items-center'>
				<div className='md:h-full'>
					<img className='h-36 w-full object-contain' src={product.image} />
				</div>
				<div className='px-4 py-2 w-full'>
					<h3 className='line-clamp-2 mt-1 text-lg leading-tight font-medium text-black hover:underline'>
						{product.title}
					</h3>
					<p className='line-clamp-2 mt-2 text-slate-500'>
						{product.description}
					</p>
					<div className='mt-1 mb-3 font-bold'>${product.price}</div>
				</div>
				<div className='w-20 h-full flex flex-row justify-center items-center text-white rounded-md leading-8'>
					<input
						type='number'
						className='py-2 text-center w-16 bg-white text-slate-500'
						value={value}
						onChange={(e) => {
							setValue(e.target.value);
							changeProductCount(product, parseInt(e.target.value));
						}}
						min={1}
						max={10}
					/>
				</div>
				<div className='w-20 h-full ml-4 text-hidden font-bold text-lg'>
					Cost:
					<br />${cost.toFixed(2)}
				</div>
			</div>
		</div>
	);
}

export default CartItem;
