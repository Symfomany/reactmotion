import styled from "styled-components";
import { Grid } from "@material-ui/core";
import { bounce } from "react-animations";

const bounceAnimation = keyframes`${bounce}`;


const MyGrid = styled(Grid)`
  opacity: ${props => (props.visible ? 1 : 0)};
  ${props => (props.visible ? ("animation : 1s" bounceAnimation) : null)};
  transition: all 0.5s ease;
`;

export { MyGrid };
