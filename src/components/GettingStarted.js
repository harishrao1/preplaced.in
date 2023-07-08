import { Grid, Card, CardContent, useTheme } from "@mui/material";
import React from "react";

const GettingStarted = () => {
  const theme = useTheme();

  return (
    <div className="getting-started">
      <h1>Getting Started is Easy</h1>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Card className="card">
            <CardContent>
              <button className="btn">1</button>
              <div className="card-content">
                <h3>Shortlist a Mentor According to Your Preferences</h3>
              </div>
              <button className="custom-button">
                View Mentors
                <img
                  style={{
                    height: "20px",
                    width: "20px",
                    marginLeft: "5px",
                  }}
                  src="https://assets.website-files.com/5fa298c0bded9141021f03fa/62efe6a89147fea7245facd4_ArrowUpRight%20Black.svg"
                  alt=""
                />
              </button>
            </CardContent>
          </Card>
        </Grid>
        <div className="arrow">
          <img
            src="https://assets.website-files.com/61039da7b5adadd21dd8f6be/6104b5ca6d463dcfd9d3eeec_Arrow%2001.svg"
            alt="arrow"
          />
        </div>
        <Grid item xs={12} md={4}>
          <Card className="card">
            <CardContent>
              <button className="btn">2</button>
              <div className="card-content">
                <h3>
                  Book a Free Trial Session to See How the Mentor Can Help You
                </h3>
              </div>
              <button className="custom-button">
                Book Free Trial
                <img
                  style={{
                    height: "20px",
                    width: "20px",
                    marginLeft: "5px",
                  }}
                  src="https://assets.website-files.com/5fa298c0bded9141021f03fa/62efe6a89147fea7245facd4_ArrowUpRight%20Black.svg"
                  alt=""
                />
              </button>
            </CardContent>
          </Card>
        </Grid>
        <div className="right-arrow">
          <img
            src="https://assets.website-files.com/61039da7b5adadd21dd8f6be/6104b814bda194733b41a3cd_Arrow%2002.svg"
            alt="arrow"
          />
        </div>
        <Grid item xs={12} md={4}>
          <Card className="card">
            <CardContent>
              <button className="btn">3</button>
              <div className="card-content">
                <h3>
                  Start Preparing via 1:1 Long-Term Mentorship with Your Mentor
                </h3>
              </div>
              <button className="custom-button">
                Get Started
                <img
                  style={{
                    height: "20px",
                    width: "20px",
                    marginLeft: "5px",
                  }}
                  src="https://assets.website-files.com/5fa298c0bded9141021f03fa/62efe6a89147fea7245facd4_ArrowUpRight%20Black.svg"
                  alt=""
                />
              </button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default GettingStarted;
