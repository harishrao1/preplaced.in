import React from "react";
import Prize from "../assets/prize.gif";
import { Grid } from "@mui/material";
import Avatar_1 from "../assets/avatars/avatar_1.png";
import Avatar_2 from "../assets/avatars/avatar_2.png";
import Avatar_3 from "../assets/avatars/avatar_3.png";
import star from "../assets/star.png";
import Layout from "./Layout";
import GettingStarted from "./GettingStarted";
import ReviewPage from "./ReviewPage";
const LandingPage = () => {
  return (
    <div className="container">
      <div>
        <div className="landing-page">
          <h1 className="heading">Unlock your dream Career</h1>
          <img className="image-prize" src={Prize} alt="" />
        </div>
        <div className="heading_2">
          <h1 className="heading">With personalized 1:1 mentorship</h1>
        </div>
      </div>

      <div className="heading_3">
        <p>
          1:1 Long term mentorship with industry experts to help you achieve
          your dream career
        </p>
      </div>
      <button className="btn-primary">Select your Mentor</button>
      <div className="text-block">
        <p>
          There's a <strong>FREE TRIAL SESSION </strong>that you can use to find
          your perfect match
        </p>
      </div>

      <div className="review-group">
        <div className="review-avatars">
          <div className="review-avatar first-avatar">
            <img className="avatar-image" src={Avatar_1} alt="" />
          </div>
          <div className="review-avatar">
            <img src={Avatar_2} alt="" className="avatar-image" />
          </div>
          <div className="review-avatar">
            <img src={Avatar_3} alt="" className="avatar-image" />
          </div>
        </div>
        <div className="review-block">
          <div className="review-star">
            <img className="star-image" src={star} alt="" />
          </div>
          <div>
            <div className="rating">4.9/5</div>
            <div className="rating-content">300+ Mentors</div>
          </div>
        </div>
      </div>

      <Grid className="layout-container">
        <Layout />
      </Grid>
      <GettingStarted />
    </div>
  );
};
export default LandingPage;
