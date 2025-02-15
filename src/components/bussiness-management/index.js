import React from "react";
import Images from "../../assests/images";
import "./styles.css";
import { Link } from "react-router-dom";
import TronButton from "../../layout/hover-button/tourn-but";
const BussinessManagement = () => {
  return (
    <div className="home-page-content" >
      <div className="home-page-section" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        <div className="home-platform">
          <h2>
            Business management cloud software. <br />
            All-in-One Platform
          </h2>
        </div>

        <div className="heding-text-top">
          <h1 className="text">
            to run your <br /> business
          </h1>
        </div>
      </div>
      <div className="image-wrapper" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="700"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
           <img src={Images.landingHero} />
        {/* <div className="macBook-image">
          <div className="big-img-mac">
            <img src={Images.macLeptop} />
            <div className="iphone-image">
              <img src={Images.iphone} />
            </div>
            <div className="create-new-text">
              <img src={Images.rightImage} />
            </div>

            <div className="metric-item">
              <img src={Images.metricItem} />
            </div>
          </div>
        </div> */}
      </div>

      <div className="how-to-use" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="800"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        <p>Easy-to-Use Business Management Software: </p>
        <p>to Start, Run, and Succeed in Your Business</p>
      </div>

      <div className="businesses-mode" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="900"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        <span>
          Made for Small to Medium Businesses for Simplicity and Order
        </span>
      </div>

      <div className="request-btn" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        <Link to='https://dev.memate.com.au/requestdemo' className="nav-btn--get-started navbar-link"><TronButton text="Request a Demo" /></Link>
      </div>
    </div>
  );
};

export default BussinessManagement;
