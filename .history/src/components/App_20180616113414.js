import React, { Component } from "react";
import { Fade } from "../styled/Fade";
import { TransitionGroup } from "react-transition-group";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

// Example: https://stackblitz.com/edit/01-styled-transition-group?file=index.js
// Example: https://stackblitz.com/edit/03-styled-transition-group?file=index.js

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      items: [
        "Je suis le premier",
        "Je suis le second",
        "Je suis le troisième",
        "Je suis le quatrieme"
      ]
    };
    this.changer = this.changer.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }
  onRemove(i) {
    const items = this.state.items.slice();
    items.splice(i, 1);
    this.setState({ items });
  }
  onAdd() {
    console.log("laa");
    const items = [...this.state.items];
    items.push("Laaaaa");
    this.setState({ items });
  }
  changer() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              ReactJs Rocks!
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Button variant="contained" color="primary">
                Hello World
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
          </Grid>
        </div>
        {/*  <button onClick={this.changer}>Cliquer moi</button>
        <TransitionGroup>
          {this.state.items.map((id, i) => (
            <Fade key={id} in={this.state.show} onClick={this.onRemove(i)}>
              Click to remove
            </Fade>
          ))}
        </TransitionGroup>
        <button onClick={this.onAdd}>Add an Item</button> */}
      </div>
    );
  }
}

export default withStyles(styles)(App);
