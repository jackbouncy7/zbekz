import { lazy } from 'react';
const Header = lazy(() => import("@components/Header/Header"));
import './_products.scss';

const Products = () => {
	return (
		<>
		<Header/>
		<section className='section products'>
			<div className='container'>
				<h2 className='products-title'>Featured case studies!</h2>
			</div>
		</section>
		</>
	)
}

export default Products;