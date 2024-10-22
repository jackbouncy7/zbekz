import { lazy } from 'react'; 
import { Link } from "react-router-dom";
const Header = lazy(() => import("@components/Header/Header"));
import BgProduct from "@images/products/project1-detailed.png";
import './_productSingle.scss';

const ProductSingle = () => {
	return (
		<>
		<Header/>
		<section className='section product-single'>
			<div className='container'>
				<nav className='product-single__breadcrumb' aria-label="breadcrumb">
		      <ol className="product-single__breadcrumb-list">
		        <li className="product-single__breadcrumb-item">
		          <Link to="/">Home</Link>
		        </li>
		        <li className="product-single__breadcrumb-item">
		          <Link to="/products">Products</Link>
		        </li>
		        <li className="product-single__breadcrumb-item active" aria-current="page">
		          [ Product name ]
		        </li>
		      </ol>
		    </nav>

		    {/* Details start */}
		    <div className='product-details'>
		    	<div className='product-details__titleWrapper'>
			    	<h2 className='product-details__title'>Web 3.0 crypto wallet makes a decentralized experience secure for 5 million users</h2>
		    	</div>
		    </div>
		    {/* Details end */}
			</div>

			<div className='product-details__imageWrapper'>
		    		<img src={BgProduct} alt="product image" />
	    	</div>

	    	{/* Product details start */}
	    	{/* Product details end */}
		</section>
		</>
	)
}

export default ProductSingle;