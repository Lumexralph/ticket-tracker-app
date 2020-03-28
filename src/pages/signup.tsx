import React from "react";

import StyledSignup from "../components/signup";

const Signup = () => {
  return (
    <StyledSignup.Container>
      <h2>User Signup</h2>

      <StyledSignup.FormWrapper>
        <StyledSignup.InputWrapper>
          <StyledSignup.Label htmlFor="username"></StyledSignup.Label>
          <StyledSignup.Input
            type="text"
            name="username"
            placeholder="Enter your username"
            required={true}
          />
        </StyledSignup.InputWrapper>

        <StyledSignup.InputWrapper>
          <StyledSignup.Label htmlFor="password"></StyledSignup.Label>
          <StyledSignup.Input
            type="password"
            name="password"
            placeholder="Enter your password"
            required={true}
          />
        </StyledSignup.InputWrapper>

        <StyledSignup.InputWrapper>
          <StyledSignup.Button colour="palevioletred">
            Signup
          </StyledSignup.Button>
        </StyledSignup.InputWrapper>
      </StyledSignup.FormWrapper>
    </StyledSignup.Container>
  );
};

export default Signup;
