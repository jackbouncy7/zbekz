import './_team.scss';
import Team1 from "@images/1.jpg";
import Team2 from "@images/2.jpg";
import Team3 from "@images/3.jpg";
import Team4 from "@images/4.jpg";

const Team = () => {
	return (
		<>
			{/* <!-- ***** Our Team Start ***** --> */}
      <section className="section pbottom-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="center-heading">
                <h2 className="section-title">Our Team</h2>
              </div>
            </div>
            <div className="offset-lg-3 col-lg-6">
              <div className="center-text">
                <p>
                  Fusce placerat pretium mauris, vel sollicitudin elit lacinia
                  vitae. Quisque sit amet nisi erat.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="team-item">
                <div className="header">
                  <div className="img">
                    <img src={Team1} alt="team 1" />
                  </div>
                  <div className="info">
                    <strong>Fletch Skinner</strong>
                    <span>Product Strategist</span>
                  </div>
                </div>
                <div className="body">
                  Proin arcu ligula, malesuada id tincidunt laoreet, facilisis
                  at justo. Sed at lorem malesuada.
                </div>
                <ul className="social">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="team-item">
                <div className="header">
                  <div className="img">
                    <img src={Team2} alt="team 2" />
                  </div>
                  <div className="info">
                    <strong>Lance Bogrol</strong>
                    <span>Visual Designer</span>
                  </div>
                </div>
                <div className="body">
                  Proin arcu ligula, malesuada id tincidunt laoreet, facilisis
                  at justo. Sed at lorem malesuada.
                </div>
                <ul className="social">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="team-item">
                <div className="header">
                  <div className="img">
                    <img src={Team3} alt="" />
                  </div>
                  <div className="info">
                    <strong>Valentino Morose</strong>
                    <span>Android Developer</span>
                  </div>
                </div>
                <div className="body">
                  Proin arcu ligula, malesuada id tincidunt laoreet, facilisis
                  at justo. Sed at lorem malesuada.
                </div>
                <ul className="social">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="team-item">
                <div className="header">
                  <div className="img">
                    <img src={Team4} alt="" />
                  </div>
                  <div className="info">
                    <strong>Giles Posture</strong>
                    <span>iOS Developer</span>
                  </div>
                </div>
                <div className="body">
                  Proin arcu ligula, malesuada id tincidunt laoreet, facilisis
                  at justo. Sed at lorem malesuada.
                </div>
                <ul className="social">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Our Team End ***** --> */}
	</>	
 );
};

export default Team;