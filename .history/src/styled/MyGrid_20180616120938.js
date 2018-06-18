import styled, { keyframes } from "styled-components";
import { Grid } from "@material-ui/core";
import { bounce, flash, pulse, shake } from "react-animations";

const bounceAnimation = keyframes`${bounce}`;
const flashAnimation = keyframes`${shake}`;

const MyGrid = styled(Grid)`
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: all 0.5s ease;
`;

const MyGridTwo = styled(Grid)`
  display: ${props => (props.visible ? "block" : "none")};
  ${props => (props.visible ? "animation : 1s " + bounceAnimation : null)};
`;
const MyGridThree = styled(Grid)`
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: all 0.5s ease;
  display: ${props => (props.visible ? "block" : "none")};
  ${props => (props.visible ? "animation : 2s " + flashAnimation : null)};
`;
export { MyGrid, MyGridTwo, MyGridThree };
