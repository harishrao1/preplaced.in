import React from "react";
import { Toolbar, Button, Typography } from "@mui/material";
import "./Header.css";

const Header = () => {
  return (
    <header className="root">
      <Toolbar>
        <div className="header-1">
          <Typography variant="h6" className="title">
            <img
              src="https://assets.website-files.com/5fa298c0bded9141021f03fa/6376bceec8b40eeaaeebfeea_Preplaced_Logo_original.svg"
              alt=""
            />
          </Typography>

          <Button
            sx={{ borderRadius: "20px" }}
            variant="outlined"
            color="inherit"
          >
            Select your Mentor
          </Button>
          <Button sx={{ marginRight: "20px" }} color="inherit">
            Group Sessions
          </Button>
          <Button color="inherit">Blogs</Button>
          <Button color="inherit">Ask Mentors</Button>
        </div>
        <div className="header-2">
          <Button color="inherit">Become a Mentor</Button>
          <Button color="inherit">Login</Button>
        </div>
      </Toolbar>
    </header>
  );
};
export default Header;
