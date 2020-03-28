import React from "react";

type Props = {};

export const AuthenticationForm = (props: Props) => {
  return (
    <form className="form-example">
      <div className="form-example">
        <label htmlFor="username"></label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter your username"
          required
        />
      </div>
      <div className="form-example">
        <label htmlFor="password"></label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          required
        />
      </div>
      <div className="form-example">
        <input type="submit" value="Subscribe!" />
      </div>
    </form>
  );
};
