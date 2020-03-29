import styled from "styled-components";
import StyledHome from "../home";

// TODO: create a reusable style for the home and signup styled components
const Container = styled.main`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const FormWrapper = styled.form`
  display: grid;
  gap: 15px;
`;

const Input = styled.input`
  padding: 5px;
`;

const InputWrapper = styled.div``;

const Label = styled.label``;

const Button = styled(StyledHome.Button)`
  margin: 0;
  background: transparent;
`;

export default {
  Container,
  FormWrapper,
  Input,
  InputWrapper,
  Label,
  Button,
};
