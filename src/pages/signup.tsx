import React, { useState } from "react";

import StyledSignup from "../components/signup";
import StyledHome from "../components/home";

const initialAccountInfo = {
  username: "",
  password: "",
};

const Signup = () => {
  const [{ username, password }, setAccountInfo] = useState(initialAccountInfo);

  const clearState = () => {
    setAccountInfo({ ...initialAccountInfo });
  };

  const handleChange = (e: import("react").ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setAccountInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: import("react").FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // clean form
    clearState();
  };

  return (
    <StyledSignup.Container>
      <StyledHome.H1>Ticket Tracker App</StyledHome.H1>
      <StyledSignup.FormWrapper onSubmit={handleSubmit}>
        <StyledSignup.InputWrapper>
          <StyledSignup.Label htmlFor="username"></StyledSignup.Label>
          <StyledSignup.Input
            type="text"
            name="username"
            value={username}
            autoComplete="username"
            placeholder="enter your username"
            onChange={handleChange}
            required
          />
        </StyledSignup.InputWrapper>

        <StyledSignup.InputWrapper>
          <StyledSignup.Label htmlFor="password"></StyledSignup.Label>
          <StyledSignup.Input
            type="password"
            name="password"
            value={password}
            autoComplete="password"
            placeholder="enter your password"
            onChange={handleChange}
            required
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
