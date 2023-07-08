import React from "react";
import "./Layout.css";
import star from "../assets/star.png";
import { Grid, Typography, useTheme } from "@mui/material/";

const Layout = () => {
  const theme = useTheme();

  return (
    <Grid className="layout-style" container>
      <Grid item xs={12} sm={6} md={3} sx={{ mb: { xs: 2, sm: 0 } }}>
        <Grid sx={{ display: "flex", alignItems: "center" }}>
          <Grid>
            <img src={star} alt="" className="star-image" />
          </Grid>
          <Grid marginLeft={6}>
            <Typography variant="h4">2000+</Typography>
            <Typography sx={{ color: "#525252" }} variant="body3">
              Placed Mentees
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={3} sx={{ mb: { xs: 2, sm: 0 } }}>
        <Grid sx={{ display: "flex", alignItems: "center" }}>
          <Grid>
            <img className="star-image" src={star} alt="" />
          </Grid>
          <Grid marginLeft={4}>
            <Typography variant="h4">150%</Typography>
            <Typography sx={{ color: "#525252" }} variant="body3">
              Average Hike
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={3} sx={{ mb: { xs: 2, sm: 0 } }}>
        <Grid sx={{ alignItems: "center", color: "#525252" }}>
          <Typography variant="body1">Mentees Placed At</Typography>
          <Typography variant="body1">Top Companies Like</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Grid sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <img
            src="https://assets.website-files.com/5fa298c0bded9141021f03fa/636c9264568f863a25d699c7_youtube.svg"
            alt=""
            className="star-image"
          />
          <img
            src="https://assets.website-files.com/5fa298c0bded9141021f03fa/62efe6a89147fe321e5fad14_Apple%20Black.svg"
            alt=""
            className="star-image"
          />
          <img
            src="https://assets.website-files.com/5fa298c0bded9141021f03fa/642fc59542b43de75846ba1e_2993797_amazon_social%20media_icon.svg"
            alt=""
            className="star-image"
          />
          <img
            src="https://assets.website-files.com/5fa298c0bded9141021f03fa/642fc59457bf67ce7ee3498a_2993798_social%20media_airbnb_icon.svg"
            alt=""
            className="star-image"
          />
          <img
            src="https://assets.website-files.com/5fa298c0bded9141021f03fa/642fc5935d245dbd7c89bfbd_2993685_brand_brands_google_logo_logos_icon.svg"
            alt=""
            className="star-image"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Layout;
