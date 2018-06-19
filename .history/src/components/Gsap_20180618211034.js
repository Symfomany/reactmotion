import React, { Component } from "react";
import { Button, Chip, withStyles } from "@material-ui/core";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  chip: {
    margin: theme.spacing.unit
  }
});

class Gsap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {}
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
          onDelete={this.handleDelete}
          className={classes.chip}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Gsap);
