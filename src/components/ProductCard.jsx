function ProductCard({ product, addToCart, inCart = false }) {
	return (
		<div className='max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
			<div className='md:flex flex-col md:w-48'>
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
					<button
						className={`text-slate-600 px-6 py-3 border rounded-md w-full ${
							inCart ? 'bg-gray-300 cursor-not-allowed' : ''
						}`}
						onClick={() => addToCart(product)}
						disabled={inCart}
					>
						{inCart ? 'In Cart' : 'Add to Cart'}
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
