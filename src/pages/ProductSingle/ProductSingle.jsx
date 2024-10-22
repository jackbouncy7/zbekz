import { lazy } from 'react'; 
import { Link } from "react-router-dom";
const Header = lazy(() => import("@components/Header/Header"));
import BgProduct from "@images/products/project1-detailed.png";
import AppStoreLogo from "@images/download-apple-store.png";
import PlayStoreLogo from "@images/download-google-play.png";
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

	    	{/* Product items start */}
	    	<div className='product-item'>
	    		<div className='container'>
	    			<div className='product-item__wrapper'>
	    			<div className='product-item__side'>
	    				<div className='product-item__info-block'>
	    					<p className='product-item__headText'>Industry</p>
		    				<span className='product-item__val'>Fintech</span>
	    				</div>

	    				<div className='product-item__info-block'>
	    					<p className='product-item__headText'>Supported devices</p>
		    				<span className='product-item__val'>Web, iPhone, iPad, Android</span>
	    				</div>
	    				
	    				<div className='product-item__info-block'>
	    					<p className='product-item__headText'>Available on</p>
		    				<span className='product-item__val'>
		    					<a href="https://google.com" target='_blank'>
		    						<img src={AppStoreLogo} width='150' alt="app store logo" />
		    					</a>
		    					<a href="https://google.com" target='_blank'>
		    						<img src={PlayStoreLogo} width='150' height='50' alt="play store logo" />
		    					</a>
		    				</span>
	    				</div>
	    			</div>
	    			<div className='product-item__side'>
	    				<h3 className='product-item__clientTitle'>About the client</h3>
	    				<div className='product-item__clientDescrWrapper'>
		    				<span className='product-item__clientSubtext'>Aurox is a leading crypto software ecosystem founded in 2017.</span>
		    				<p className='product-item__clientDescr'>The company offers traders, investors, and institutions a suite of tools that facilitate DeFi trading. Its flagship solution, a web-based cryptocurrency trading terminal, helps users make educated trading decisions by predicting market movement with 80% accuracy.</p>
	    				</div>
	    			</div>
	    		</div>
	    		</div>
	    	</div>
	    	{/* Product items end */}
		</section>
		</>
	)
}

export default ProductSingle;