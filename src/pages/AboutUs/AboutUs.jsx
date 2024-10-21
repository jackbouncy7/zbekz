import { lazy } from "react";
import { Link } from "react-router-dom";
const Header = lazy(() => import("@components/Header/Header"));
const Footer = lazy(() => import("@components/Footer/Footer"));
const Team = lazy(() => import("@components/Team/Team"));
import BgHero from "@images/parallax.jpg";
import About1 from "@images/about/1_1.jpg";
import About2 from "@images/about/2_1.jpg";
import About3 from "@images/about/3_1.jpg";
import About4 from "@images/about/4_1.jpg";
import './_about-as.scss';

const AboutUs = () => {
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
              <h1>About Us</h1>
            </div>
            <div className="col-lg-12">
              <ol className="breadcrumb">
                <li><Link to="/">Home</Link></li>
                <li className="active">About Us</li>
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
          <div className="col-lg-12">
            <p>Proin pellentesque quam at quam aliquet, eget mattis quam euismod. Curabitur imperdiet suscipit facilisis. Maecenas diam quam, sodales eu est eu, posuere ultricies augue. Sed rhoncus facilisis risus, nec sagittis dui luctus in. Nunc eget ante odio. Suspendisse eu diam ut nisi ullamcorper interdum. Pellentesque sit amet quam risus.</p>
            {/* <!-- ***** Gallery Start ***** --> */}
            <div className="row page-gallery-wrapper">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <a href="assets/images/photos/about/1.jpg" className="page-gallery" title="About Us">
                  <img src={About1} alt="about image people" />
                </a>
              </div>
              <div className="col-lg-4 col-md-8 col-sm-12">
                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <a href="assets/images/photos/about/2.jpg" className="page-gallery small" title="About Us">
                      <img src={About2} alt="" />
                    </a>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <a href="assets/images/photos/about/3.jpg" className="page-gallery small" title="About Us">
                      <img src={About3} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <a href="assets/images/photos/about/4.jpg" className="page-gallery" title="About Us">
                  <img src={About1} alt="" />
                </a>
              </div>
            </div>
            {/* <!-- ***** Gallery End ***** --> */}
            <p>Quisque quis faucibus tellus, non tincidunt urna. Pellentesque faucibus aliquet mi, id efficitur nisl aliquam at. Phasellus volutpat lobortis consectetur. Duis efficitur iaculis ipsum ut sodales. Phasellus suscipit lectus eget sapien accumsan, vitae auctor magna suscipit. Ut sagittis mauris auctor dictum feugiat. Duis lectus neque, aliquet quis justo euismod, rutrum vehicula felis. In luctus dui nec pretium gravida. In mauris lorem, accumsan sit amet lacinia non, auctor id dui. </p>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- ***** Page Content End ***** --> */}
  </section>

  {/* <!-- ***** Parallax Start ***** --> */}
  <section className="parallax">
    <div className="parallax-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="info">
              <p>We design and develop <span>mobile apps</span> that delight your users and grow your business.</p>
              <Link className="btn-white-line" to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- ***** Parallax End ***** --> */}

  <Team/>
  <Footer/>
    </>
  );
};

export default AboutUs;
