import styled, { keyframes } from "styled-components";
import { StyledBounce } from "./Keyframes";

const StyledImage = styled.img`
  animation: ${StyledBounce} 2s linear infinite;
  -webkit-animation: ${StyledBounce} 2s linear infinite;
`;

export { StyledImage };
