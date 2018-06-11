import transition from "styled-transition-group";

const Fade = transition.div`
padding: 20px;
background-color: #ccc;
width: 200px;
margin: 10px auto;
text-align: center;
border-radius: 4px;

&:enter {
  opacity: 0.01;
}
&:enter-active {
  opacity: 1;
  transition: opacity 1000ms ease-in;
}
&:exit {
  opacity: 1;
}
&:exit-active {
  opacity: 0.01;
  transition: opacity 800ms ease-in;
}
`;

export { Fade };
