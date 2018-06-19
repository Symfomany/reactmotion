import React, { Component } from "react";
import { Button, Chip } from "@material-ui/core";

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
        <Chip
          avatar={
            <Avatar src="http://www.iconarchive.com/download/i47414/hopstarter/face-avatars/Female-Face-FC-4.ico" />
          }
          label="Deletable Chip"
          onDelete={handleDelete}
          className={classes.chip}
        />
      </div>
    );
  }
}

export default Gsap;
