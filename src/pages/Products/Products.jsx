import { lazy, useEffect, useState } from 'react'; 
import { Link } from "react-router-dom";
import { db } from '../../firebase.js';
import { collection, getDocs } from 'firebase/firestore';
const Header = lazy(() => import("@components/Header/Header"));
import './_products.scss';

const Products = () => {
	const [products, setProducts] = useState([]);

	  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getDocs(collection(db, 'products'));
        const productList = response.docs.map(doc => ({id: doc.id, ...doc.data()}));
        setProducts(productList);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts(); 
  }, []);


	return (
		<>
		<Header/>
		<section className='section products'>
			<div className='container'>
				<h2 className='products__title'>Featured case studies</h2>
				{products.map((product, index) => {
					return (
						<Link key={product.id} to={`/products/${product.id}`}>
					<div className='products__box'>
					<div className='products__content'>
						<h3 className='products__title--content'>{product?.name}</h3>
						<span className='products__devices'>{product.tags.join(', ')}</span>
						{/* <span className='products__category'>Finance</span> */}
						{/* <span className='products__country'>US</span> */}
						<div className='products__button-link'>
						<Link className='products__link' to={`/products/${product.id}`}>Explore more  <i className="fa fa-arrow-right"></i> </Link>
						</div>
					</div>
				</div>
				</Link>
					)
				})}
			</div>
		</section>
		</>
	)
}

export default Products;
// Category
// Client from ✅
// BG Img
// privacy