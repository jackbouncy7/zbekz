import { lazy } from 'react';
import { Link } from "react-router-dom";
const Header = lazy(() => import("@components/Header/Header"));
const Footer = lazy(() => import("@components/Footer/Footer"));
import BgHero from "@images/parallax.jpg";
import './_contact.scss';

const Contact = () => {
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
							<h1>Contact Us</h1>
						</div>
						<div className="col-lg-12">
							<ol className="breadcrumb">
								<li><Link to="/">Home</Link></li>
								<li className="active">Contact Us</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- ***** Page Top End ***** --> */}

		{/* <!-- ***** Page Content Start ***** --> */}
		<div className="page-bottom">
			<div className="map-wrapper">
				{/* <!-- ***** Google Maps Start ***** --> */}
		    <iframe className='map-canvas'
		      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48326.492848050554!2d-74.01469926442953!3d40.75904043464411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855d2e11ab3%3A0x80bfb3a12226d8b5!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1697632905989!5m2!1sen!2sus"
		      allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
		    </iframe>
				{/* <!-- ***** Google Maps End ***** --> */}

				{/* <!-- ***** Contact Informations Start ***** --> */}
				<div className="container ">
					<div className="row">
						<div className="offset-lg-8 col-lg-4 col-md-12 col-sm-12">
							<div className="contact-info">
								<div className="item">
									<i className="fa fa-location-arrow"></i>
									<div className="txt">
										<span>455 West Orchard Street<br/>Kings Mountain, NC 28086</span>
									</div>
								</div>
								<div className="item">
									<i className="fa fa-phone"></i>
									<div className="txt">
										<span>(272) 211-7370<br/>(524) 386-5730</span>
									</div>
								</div>
								<div className="item">
									<i className="fa fa-envelope"></i>
									<div className="txt">
										<span><a href="mailto:support@yourbrand.com">support@yourbrand.com</a></span>
									</div>
								</div>
								<ul className="social">
									<li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
									<li><a href="#"><i className="fab fa-twitter-square"></i></a></li>
									<li><a href="#"><i className="fab fa-linkedin"></i></a></li>
									<li><a href="#"><i className="fab fa-google-plus-square"></i></a></li>
									<li><a href="#"><i className="fab fa-github-square"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- ***** Contact Informations End ***** --> */}
			</div>

			<div className="container">
				<div className="row">
					{/* <!-- ***** Contact Text Start ***** --> */}
					<div className="col-lg-4 col-md-6 col-sm-12">
						<h5 className="mbottom-30">Get in touch</h5>
						<div className="contact-text">
							<p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam tempus magna vel turpis pharetra dictum. </p>
							<p>Sed blandit tempus purus, sed sodales leo rutrum vel. Nam vulputate ipsum ac est congue, eget commodo magna lobortis.</p>
						</div>
					</div>
					{/* <!-- ***** Contact Text End ***** --> */}

					{/* <!-- ***** Contact Form Start ***** --> */}
					<div className="col-lg-8 col-md-6 col-sm-12">
						<div className="contact-form">
							<div className="row">
								<div className="col-lg-6 col-md-12 col-sm-12">
									<input type="text" placeholder="Name, surname" required />
								</div>
								<div className="col-lg-6 col-md-12 col-sm-12">
									<input type="text" placeholder="E-Mail" required />
								</div>
								<div className="col-lg-12">
									<textarea placeholder="Your message"></textarea>
								</div>
								<div className="col-lg-12">
									<button className="btn-primary-line">SEND</button>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- ***** Contact Form End ***** --> */}
				</div>
			</div>
		</div>
		{/* <!-- ***** Page Content End ***** --> */}
	</section>
	 <Footer/>
		</>	
	)
}

export default Contact;