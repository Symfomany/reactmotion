import styled from "styled-components";
import { Grid } from "@material-ui/core";

const MyGrid = styled(Grid)`
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: all 0.5s ease;
`;

export { MyGrid };
