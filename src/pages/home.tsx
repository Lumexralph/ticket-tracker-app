import React, { StrictMode } from "react";

import StyledHome from "../components/home";

const Home = () => {
  return (
    <StyledHome.Header>
      <StrictMode>
        <StyledHome.H1>Ticket Tracker App</StyledHome.H1>
        <br />
        <StyledHome.Nav>
          <StyledHome.Button colour="palevioletred" as="a" href="/auth/signup">
            Signup
          </StyledHome.Button>
          <StyledHome.Button as="a" href="/auth/login">
            Login
          </StyledHome.Button>
        </StyledHome.Nav>
      </StrictMode>
    </StyledHome.Header>
  );
};

export default Home;
