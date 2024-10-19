import {lazy} from 'react';
import { Link } from "react-router-dom";
const Header = lazy(() => import("@components/Header/Header"));
const Footer = lazy(() => import("@components/Footer/Footer"));
import BgHero from "@images/parallax.jpg";
import './_services.scss';

const Services = () => {
	return (
    <>
    <Header/>
    	<section className="page">
		{/* <!-- ***** Page Top Start ***** --> */}
		<div className="cover" style={{
            backgroundImage: `url(${BgHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
			<div className="page-top">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h1>Services</h1>
						</div>
						<div className="col-lg-12">
							<ol className="breadcrumb">
								<li><Link to="/">Home</Link></li>
								<li className="active">Services</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- ***** Page Top End ***** --> */}

		{/* <!-- ***** Page Content Start ***** --> */}
		<div className="page-bottom pbottom-70">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-12">
						<a href="services-single.html" className="home-services-item">
							<i className="fa fa-clone"></i>
							<h5 className="services-title">Mobility Services Strategy</h5>
							<p>Morbi pharetra sapien ut mattis viverra. Curabitur sit amet mattis.</p>
						</a>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12">
						<a href="services-single.html" className="home-services-item">
							<i className="fab fa-connectdevelop"></i>
							<h5 className="services-title">Native App Development</h5>
							<p>Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at justo.</p>
						</a>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12">
						<a href="services-single.html" className="home-services-item">
							<i className="fa fa-object-ungroup"></i>
							<h5 className="services-title">Design &amp; User Experience</h5>
							<p>Donec pellentesque turpis utium lorem imperdiet semper look viverra.</p>
						</a>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12">
						<a href="services-single.html" className="home-services-item">
							<i className="fa fa-line-chart"></i>
							<h5 className="services-title">Maintenance and App Monitoring</h5>
							<p>Facilisis arcu ligula, malesuada id tincidunt laoreet, facilisis at justo.</p>
						</a>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12">
						<a href="services-single.html" className="home-services-item">
							<i className="fa fa-user"></i>
							<h5 className="services-title">User Definition and User Profiling</h5>
							<p>Morbi pharetra sapien ut mattis viverra. Curabitur sit amet mattis.</p>
						</a>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12">
						<a href="services-single.html" className="home-services-item">
							<i className="fa fa-image"></i>
							<h5 className="services-title">Graphic Assets for App Stores</h5>
							<p>Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at justo.</p>
						</a>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12">
						<a href="services-single.html" className="home-services-item">
							<i className="fa fa-code"></i>
							<h5 className="services-title">API Development Using Node.js</h5>
							<p>Donec pellentesque turpis utium lorem imperdiet semper look viverra.</p>
						</a>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12">
						<a href="services-single.html" className="home-services-item">
							<i className="fa fa-database"></i>
							<h5 className="services-title">Database Solutions - MongoDB</h5>
							<p>Facilisis arcu ligula, malesuada id tincidunt laoreet, facilisis at justo.</p>
						</a>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12">
						<a href="services-single.html" className="home-services-item">
							<i className="fa fa-cubes"></i>
							<h5 className="services-title">Back-End and API Development</h5>
							<p>Facilisis arcu ligula, malesuada id tincidunt laoreet, facilisis at justo.</p>
						</a>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- ***** Page Content End ***** --> */}
	</section>
    <Footer/>
    </>
  );
};

export default Services;