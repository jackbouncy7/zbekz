import { lazy } from "react";
import { Link } from "react-router-dom";
const Header = lazy(() => import("@components/Header/Header"));
const Footer = lazy(() => import("@components/Footer/Footer"));
const Team = lazy(() => import("@components/Team/Team"));
import BgBottom from "@images/bg-bottom.svg";
import img1png from "@images/1.png";
import img2png from "@images/2.png";
import img3png from "@images/3.png";
import img4png from "@images/4.png";
import img5png from "@images/5.png";
import img6png from "@images/6.png";
import img7png from "@images/7.png";
import img8png from "@images/8.png";
import WelcomeBg from "@images/welcome.jpg";
import HomeMockup from "@images/home-mockup.png";
import Blog1 from "@images/1_1.jpg";
import Blog2 from "@images/2_1.jpg";
import Blog3 from "@images/3_1.jpg";

import "./_home.scss";

const Home = () => {
  return (
    <>
      <Header />

      {/* <!-- ***** Wellcome Area Start ***** --> */}
      <section className="welcome-area">
        <div
          className="welcome-bg"
          style={{
            backgroundImage: `url(${WelcomeBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img src={BgBottom} alt="bg bottom" />
        </div>
        <div className="welcome-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 align-self-center">
                <h1>Check out our mobile apps we're working on.</h1>
                <p>
                  We design and develop mobile apps that delight your users and
                  grow your business. Enterprise-grade development combined with
                  outstanding design.
                </p>
                <Link className="btn-white-line" to="/products">
                  ALL WORKS
                </Link>
              </div>
              <div className="offset-lg-1 col-lg-5 col-md-12 align-self-center">
                <div className="apps">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                        <a href="app-single.html" className="app-item">
                          <div className="icon">
                            <img
                              src={img1png}
                              className="img-fluid"
                              alt="img"
                            />
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                        <a href="app-single.html" className="app-item">
                          <div className="icon">
                            <img src={img2png} className="img-fluid" alt="" />
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                        <a href="app-single.html" className="app-item">
                          <div className="icon">
                            <img src={img3png} className="img-fluid" alt="" />
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                        <a href="app-single.html" className="app-item">
                          <div className="icon">
                            <img src={img4png} className="img-fluid" alt="" />
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                        <a href="app-single.html" className="app-item">
                          <div className="icon">
                            <img src={img5png} className="img-fluid" alt="" />
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                        <a href="app-single.html" className="app-item">
                          <div className="icon">
                            <img src={img6png} className="img-fluid" alt="" />
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                        <a href="app-single.html" className="app-item">
                          <div className="icon">
                            <img src={img7png} className="img-fluid" alt="" />
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                        <a href="app-single.html" className="app-item">
                          <div className="icon">
                            <img src={img8png} className="img-fluid" alt="" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Wellcome Area End ***** --> */}

      {/* <!-- ***** Home About - Services Start ***** --> */}
      <section className="section services-section pbottom-70">
        <div className="container">
          <div className="row">
            {/* <!-- ***** Home About Start ***** --> */}
            <div className="col-lg-5 col-md-12 col-sm-12 align-self-bottom">
              <div className="left-heading">
                <h2 className="section-title">
                  Start-to-end app development agency
                </h2>
              </div>
              <div className="left-text">
                <p className="dark">
                  Pellentesque posuere vestibulum lorem, ut efficitur erat
                  tristique sed. Ut vitae tincidunt ante.{" "}
                </p>
                <p>
                  Donec vulputate urna sed rutrum venenatis. Cras consequat
                  magna quis arcu elementum, quis congue risus volutpat.
                  Praesent tortor nulla, ullamcorper.
                </p>
              </div>
              <Link to="/services" className="btn-primary-line">
                SERVICES
              </Link>
            </div>
            {/* <!-- ***** Home About End ***** --> */}

            {/* <!-- ***** Home Services Start ***** --> */}
            <div className="offset-lg-1 col-lg-6 col-md-12 col-sm-12 align-self-bottom">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <a
                    href="services-single.html"
                    className="home-services-item mtop-70"
                    data-scroll-reveal="enter bottom move 30px over 0.6s after 0.2s"
                  >
                    <i className="fa fa-clone"></i>
                    <h5 className="services-title">
                      Mobility Services Strategy
                    </h5>
                    <p>
                      Morbi pharetra sapien ut mattis viverra. Curabitur sit
                      amet mattis.
                    </p>
                  </a>
                  <a
                    href="services-single.html"
                    className="home-services-item"
                    data-scroll-reveal="enter bottom move 30px over 0.6s after 0.2s"
                  >
                    <i className="fab fa-connectdevelop"></i>
                    <h5 className="services-title">Native App Development</h5>
                    <p>
                      Proin arcu ligula, malesuada id tincidunt laoreet,
                      facilisis at justo.
                    </p>
                  </a>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <a
                    href="services-single.html"
                    className="home-services-item active"
                    data-scroll-reveal="enter bottom move 30px over 0.6s after 0.3s"
                  >
                    <i className="fa fa-object-ungroup"></i>
                    <h5 className="services-title">
                      Design &amp; User Experience
                    </h5>
                    <p>
                      Donec pellentesque turpis utium lorem imperdiet semper
                      viverra.
                    </p>
                  </a>
                  <a
                    href="services-single.html"
                    className="home-services-item"
                    data-scroll-reveal="enter bottom move 30px over 0.6s after 0.3s"
                  >
                    <i className="fa fa-line-chart"></i>
                    <h5 className="services-title">
                      Maintenance &amp; Monitoring
                    </h5>
                    <p>
                      Facilisis arcu ligula, malesuada id tincidunt laoreet,
                      facilisis at justo.
                    </p>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- ***** Home Services End ***** --> */}
          </div>
        </div>
      </section>
      {/* <!-- ***** Home About - Services End ***** --> */}

      {/* <!-- ***** Features Start ***** --> */}
      <section className="section background">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-12 align-self-center">
              <img
                src={HomeMockup}
                className="img-fluid d-block mx-auto"
                alt=""
              />
            </div>
            <div className="col-lg-7 col-md-12 align-self-center">
              <ul className="features">
                <li data-scroll-reveal="enter bottom move 30px over 0.6s after 0.2s">
                  <div className="count">
                    <span>1</span>
                  </div>
                  <div className="text">
                    <h5 className="title">
                      Design and UX that ensures your app will be loved and used
                    </h5>
                    <p>
                      Quisque nec consectetur arcu. Duis tellus ante, sodales
                      sed molestie at, sagittis id neque. Quisque condimentum
                      libero arcu. Mauris tellus sem, ultrices varius nisl at.
                    </p>
                  </div>
                </li>
                <li data-scroll-reveal="enter bottom move 30px over 0.6s after 0.3s">
                  <div className="count">
                    <span>2</span>
                  </div>
                  <div className="text">
                    <h5 className="title">
                      Enterprise-grade development secures reliability and
                      quality
                    </h5>
                    <p>
                      Praesent tortor nulla, ullamcorper vel ante at, varius
                      tincidunt augue. Cras vitae consectetur arcu. Proin at
                      velit vel risus elementum accumsan sed non neque. Aenean
                      risus.
                    </p>
                  </div>
                </li>
                <li data-scroll-reveal="enter bottom move 30px over 0.6s after 0.4s">
                  <div className="count">
                    <span>3</span>
                  </div>
                  <div className="text">
                    <h5 className="title">
                      A proven and tested process guarantees your success
                    </h5>
                    <p>
                      Aliquam bibendum velit ut ante cursus, et efficitur lectus
                      rutrum. Maecenas ac convallis lorem, non ultricies sem.
                      Duis elit metus, ullamcorper sed ante sed, viverra
                      bibendum neque.
                    </p>
                  </div>
                </li>
                <li data-scroll-reveal="enter bottom move 30px over 0.6s after 0.5s">
                  <div className="count">
                    <span>4</span>
                  </div>
                  <div className="text">
                    <h5 className="title">
                      Start-to-end app development agency
                    </h5>
                    <p>
                      Cras imperdiet faucibus sem, a dignissim urna feugiat sed.
                      Interdum et malesuada fames ac ante ipsum primis in
                      faucibus. Pellentesque posuere vestibulum lorem.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Features End ***** --> */}

      <Team/>

      {/*<!-- ***** Counter Parallax Start ***** -->*/}
      <section className="parallax">
        <div className="parallax-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="count-item">
                  <strong>126</strong>
                  <span>Mobile App<br/>Complate</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="count-item">
                  <strong>98</strong>
                  <span>Happy<br/>Customer</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="count-item">
                  <strong>176</strong>
                  <span>App<br/>Version</span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="count-item">
                  <strong>16</strong>
                  <span>Award<br/>Win</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<!-- ***** Counter Parallax End ***** -->*/}

      {/* <!-- ***** Blog Start ***** --> */}
      {/* <section className="section pbottom-70"> */}
      {/* <div className="container"> */}
      {/*   <div className="row"> */}
      {/*     <div className="col-lg-12"> */}
      {/*       <div className="center-heading"> */}
      {/*         <h2 className="section-title">Latest Blog Posts</h2> */}
      {/*       </div> */}
      {/*     </div> */}
      {/*     <div className="offset-lg-3 col-lg-6"> */}
      {/*       <div className="center-text"> */}
      {/*         <p>Fusce placerat pretium mauris, vel sollicitudin elit lacinia vitae. Quisque sit amet nisi */}
      {/*           erat.</p> */}
      {/*       </div> */}
      {/*     </div> */}
      {/*   </div> */}
      {/*   <div className="row"> */}
      {/*     <div className="col-lg-4 col-md-6 col-sm-12"> */}
      {/*       <div className="blog-post-thumb"> */}
      {/*         <div className="img"> */}
      {/*           <img src={Blog1} alt="blog pic" /> */}
      {/*         </div> */}
      {/*         <h3> */}
      {/*           <a href="blog-single.html">5 steps to becoming GDPR compliant on mobile apps</a> */}
      {/*         </h3> */}
      {/*         <div className="text"> */}
      {/*           Mauris tellus sem, ultrices varius nisl at, convallis iaculis mauris. Sed eget sem vitae */}
      {/*           purus tempus dignissim. */}
      {/*         </div> */}
      {/*         <a href="blog-single.html" className="btn-primary-line">Read More</a> */}
      {/*       </div> */}
      {/*     </div> */}
      {/*     <div className="col-lg-4 col-md-6 col-sm-12"> */}
      {/*       <div className="blog-post-thumb"> */}
      {/*         <div className="img"> */}
      {/*           <img src={Blog2} alt="blog pic" /> */}
      {/*         </div> */}
      {/*         <h3> */}
      {/*           <a href="blog-single.html">Measuring app success through mobile analytics</a> */}
      {/*         </h3> */}
      {/*         <div className="text"> */}
      {/*           Cras imperdiet faucibus sem, a dignissim urna feugiat sed. Interdum et malesuada fames ac */}
      {/*           ante ipsum primis in faucibus. */}
      {/*         </div> */}
      {/*         <a href="blog-single.html" className="btn-primary-line">Read More</a> */}
      {/*       </div> */}
      {/*     </div> */}
      {/*     <div className="col-lg-4 col-md-6 col-sm-12"> */}
      {/*       <div className="blog-post-thumb"> */}
      {/*         <div className="img"> */}
      {/*           <img src={Blog3} alt="blog pic" /> */}
      {/*         </div> */}
      {/*         <h3> */}
      {/*           <a href="blog-single.html">How accessibility will influence your app development</a> */}
      {/*         </h3> */}
      {/*         <div className="text"> */}
      {/*           Quisque euismod nec lacus sit amet maximus. Ut convallis sagittis lorem auctor malesuada. */}
      {/*           Morbi auctor tortor eu risus condimentum. */}
      {/*         </div> */}
      {/*         <a href="blog-single.html" className="btn-primary-line">Read More</a> */}
      {/*       </div> */}
      {/*     </div> */}
      {/*   </div> */}
      {/* </div> */}
      {/* </section> */}
      {/* <!-- ***** Blog End ***** --> */}

      <Footer/>
    </>
  );
};

export default Home;
