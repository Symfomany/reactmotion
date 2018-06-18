import styled, { keyframes } from "styled-components";
import { Grid } from "@material-ui/core";
import { bounce, fadeOutUpBig } from "react-animations";

const bounceAnimation = keyframes`${bounce}`;
const fadeOutUpBigAnimation = keyframes`${fadeOutUpBig}`;

const MyGrid = styled(Grid)`
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: all 0.5s ease;
`;

const MyGridTwo = styled(Grid)`
  display: ${props => (props.visible ? "block" : "none")};
  ${props => (props.visible ? "animation : 1s " + bounceAnimation : null)};
`;
const MyGridThree = styled(Grid)`
  display: ${props => (props.visible ? "block" : "none")};
  ${props =>
    props.visible ? "animation : 2s " + fadeOutUpBigAnimation : null};
`;
export { MyGrid, MyGridTwo, MyGridThree };
