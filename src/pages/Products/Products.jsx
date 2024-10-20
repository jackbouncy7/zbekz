import { lazy } from 'react'; 
import { Link } from "react-router-dom";
const Header = lazy(() => import("@components/Header/Header"));
import './_products.scss';

const Products = () => {
	return (
		<>
		<Header/>
		<section className='section products'>
			<div className='container'>
				<h2 className='products__title'>Featured case studies</h2>
				<Link to='/'>
					<div className='products__box'>
					<div className='products__content'>
						<h3 className='products__title--content'>Web 3.0 crypto wallet makes a decentralized experience secure for 5 million users</h3>
						<span className='products__devices'>IOS & Android, Web</span>
						<span className='products__category'>Finance</span>
						<span className='products__country'>US</span>
						<div className='products__button-link'>
						<Link className='products__link' to='/'>Explore more  <i className="fa fa-arrow-right"></i> </Link>
						</div>
					</div>
				</div>
				</Link>
			</div>
		</section>
		</>
	)
}

export default Products;