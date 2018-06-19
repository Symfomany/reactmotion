import React, { Component } from "react";
import { Button } from "@material-ui/core";

class Gsap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Button variant="outlined" color="secondary">
          Cliquez-moi
        </Button>
      </div>
    );
  }
}

export default Gsap;
