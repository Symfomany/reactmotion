import styled, { keyframes } from "styled-components";
import { Grid } from "@material-ui/core";
import {
  bounce,
  flash,
  pulse,
  shake,
  tada,
  flip,
  merge
} from "react-animations";

const bounceAnimation = keyframes`${bounce}`;
const flashAnimation = keyframes`${shake}`;
const tadaFlip = keyframes`${merge(tada, flip)}`;

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
  transition: all 0.2s ease;
  ${props => (props.visible ? "animation : 0.5s " + flashAnimation : null)};
`;

const MyGridFour = styled(Grid)`
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: all 0.2s ease;
  ${props => (props.visible ? "animation : 0.5s " + tadaFlip : null)};
`;
export { MyGrid, MyGridTwo, MyGridThree, MyGridFour };
