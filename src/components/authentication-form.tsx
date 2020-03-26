import React from "react";

type Props = {};

export const AuthenticationForm = (props: Props) => {
  return (
    <form className="form-example">
      <div className="form-example">
        <label htmlFor="username">Enter your username: </label>
        <input type="text" name="username" id="username" required />
      </div>
      <div className="form-example">
        <label htmlFor="password">Enter your password: </label>
        <input type="password" name="password" id="password" required />
      </div>
      <div className="form-example">
        <input type="submit" value="Subscribe!" />
      </div>
    </form>
  );
};
