import styled from "styled-components";

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const H1 = styled.h1``;

const Nav = styled.nav`
  display: flex;
`;

// base button
// the props expected
type ButtonProps = {
  readonly colour?: string;
};

const Button = styled.button<ButtonProps>`
  color: ${({ colour }) => (colour ? colour : "white")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  flex: 1;
  width: 150px;
  text-align: center;
`;

export default {
  Header,
  H1,
  Nav,
  Button,
};
