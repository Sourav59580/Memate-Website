import React from "react";
import "./style.css";
import NextStep from "../next-step";
import { Link } from "react-router-dom";
import SortedMedia01 from "../../assests/images/SortedMedia01.jpg";
import SortedMedia02 from "../../assests/images/SortedMedia02.jpg";
import SortedMedia03 from "../../assests/images/SortedMedia03.jpg";
import SortedMedia04 from "../../assests/images/SortedMedia04.jpg";
import SortedMedia05 from "../../assests/images/SortedMedia05.jpg";
import arrowIconBack from "../../assests/icons/arrowIconBack.svg";
import SuccessStories from "../success-stories";



function SortedMedia() {
  return (
    <>
      <div className="parent-blog-page customerstoriespage">

        <div className="parent-blog">
          <div className="pageBreadcrumbs">
            <ul>
              <li>Home</li>/<li> <Link className="MainPageLink" to="/customer-stories"> Customer Stories</Link></li>/<li> <Link>Sorted Media</Link></li>
            </ul>
            <Link to="/customer-stories" className="backButStories"><img src={arrowIconBack} alt="Arrow" /> Back</Link>
          </div>
          <div className="customerstoriesGrid">
            <div className="innerGrid imageOverlyText">
              <Link ><img
                className="img-container-stories"
                src={SortedMedia01}
                alt="Blog featured image"
              /></Link>
              <div className="customerstoriesDetails">
                <div>
                  <div className="category">Sorted Media</div>
                  <div className="date-heading-title"><Link>Photography and Videography on Demand</Link></div>
                  <Link className="readMoreBut">Read More</Link>
                </div>
              </div>
            </div>
            <div className="gadientText">
              <h2>We are Sorted Media, a company based in Sydney, operating across all states of Australia. </h2>
            </div>
           

            <div className="innerGrid innerGridwrapper">
              <Link ><img
                className="img-container-stories"
                src={SortedMedia02}
                alt="Blog featured image"
              /></Link>

            </div>
            <div className="wrapperText">
           
          <p>We provide photography and videography services for private and corporate clients, capturing events or creating content for projects. We work with a wide range of businesses and have over 50 contractors across Australia.</p>
          <p>We provide photography and videography services for private and corporate clients, capturing events or creating content for projects. We work with a wide range of businesses and have over 50 contractors across Australia.</p>
            </div>
            <div className="wrapperText">
           <h3>Since we started using meMate for our day-to-day operations, we can’t imagine working without it. </h3>
          <p>We rely heavily on its transparent and efficient booking system, allowing clients to book our services online at any time, without needing to speak to a manager. This convenience has significantly enhanced our clients’ experience, and we’re proud to be known for the outstanding service and quality of work we deliver. meMate is instrumental in scheduling and managing all upcoming shifts and shoots for our team. </p>
          <p>Managing over 40 shoots a day was no simple task, especially considering the high stakes if mistakes occur. meMate allows us to maintain control through one simple screen, assigning tasks efficiently and ensuring everything runs smoothly.</p>
            </div>





            <div className="innerGrid">
              <Link ><img
                className="img-container-stories"
                src={SortedMedia03}
                alt="Blog featured image"
              /></Link>

            </div>
            <div className="wrapperText">
              <p>Communication with our contractors is essential for guiding them through the brief, location details, customer notes, and other important information, and meMate makes this process seamless. We also utilise the bonus variation feature, which enables our team members to earn additional remuneration when they submit content within 24 hours.</p>
<p>Our managers receive bonuses based on monthly results, and meMate provides clear and reliable performance statistics that help them set targets and calculate bonuses. This not only works as a motivational system but also ensures that our management team feels part of the company’s overall success.</p>

            </div>




            <div className="innerGrid">
              <Link ><img
                className="img-container-stories"
                src={SortedMedia04}
                alt="Blog featured image"
              /></Link>

            </div>
            <div className="wrapperText">
              <h3>meMate’s Work All feature has been a game-changer.</h3>
              <p>Contractors can accept and track their jobs, confirm and complete them, and schedule their calendar all in one place. It also handles their invoicing and payment tracking, making their lives easier and more organised.</p>
            <p>As we continue to grow and scale our operations, meMate’s ability to adapt to our needs has been invaluable. Whether it’s managing a growing team or dealing with increasing demand, meMate consistently proves to be a flexible and scalable solution that evolves with us. Its customisation options have allowed us to tailor the system to our unique workflows, ensuring that we can continue to deliver the high-quality service our clients expect.</p>
            </div>
            <div className="innerGrid">
              <Link ><img
                className="img-container-stories"
                src={SortedMedia05}
                alt="Blog featured image"
              /></Link>

            </div>
            <div className="wrapperText">
              <p>Looking ahead, we believe that meMate will be key in helping us maintain our competitive edge in the photography and videography industry. By streamlining processes, reducing human error, and improving overall efficiency, meMate allows us to focus on what we do best—creating unforgettable visual content for our clients. We are excited to see how meMate can support our future growth and success.</p>
              <p>www.sortedmedia.com.au</p>
             </div>

          </div>
          <div className="ccStories">
            <SuccessStories />


          </div>



        </div>
        <NextStep text="Request a Demo" />
      </div>
    </>

  );
}
export default SortedMedia;

