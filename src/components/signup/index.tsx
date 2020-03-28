import styled from "styled-components";
import StyledHome from "../home";

// TODO: create a reusable style for the home and signup styled components
const Container = styled.body`
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
`;

interface InputProps {
  readonly type: string;
  readonly name: string;
  readonly placeholder?: string;
  readonly required?: boolean;
}
const Input = styled.input<InputProps>``;

const InputWrapper = styled.div``;

interface LabelProps {
  readonly htmlFor: string;
}
const Label = styled.label<LabelProps>``;

const Button = styled(StyledHome.Button)``;

export default {
  Container,
  FormWrapper,
  Input,
  InputWrapper,
  Label,
  Button,
};
