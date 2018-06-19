import React, { Component } from "react";
// import { Fade } from "../styled/Fade";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles, IconButton } from "@material-ui/core";
// import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import { MyGrid, MyGridTwo, MyGridThree, MyGridFour } from "../styled/MyGrid";
// import { VelocityComponent } from "velocity-react";
// import Image from "./Image";
import Menu from "./Menu";

import { TransitionGroup, Transition } from "react-transition-group";
import { Route, Switch, withRouter } from "react-router-dom";
import { TweenMax, TweenLite } from "gsap/TweenMax";

import Home from "./Home";
import Contact from "./Contact";
import Router from "react-router-dom/Router";
import Gsap from "./Gsap";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { Burger } from "../styled/Burger";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import AlarmOffIcon from "@material-ui/icons/AlarmOff";
import "./wickedcss.min.css";
// https://material-ui.com/demos/drawers/#swipeable-temporary-drawer

// Example: https://stackblitz.com/edit/01-styled-transition-group?file=index.js
// Example: https://stackblitz.com/edit/03-styled-transition-group?file=index.js

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  },
  grid: {
    width: 450,
    height: 250
  },
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  sidebar: {
    width: 300
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawerPaper: {
    position: "relative",
    width: 300
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0 // So the Typography noWrap works
  }
});

const completeCall = target => {
  TweenLite.set(target, { clearProps: "position, width" });
};

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
    this.handleVisible = this.handleVisible.bind(this);
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
  handleVisible() {
    this.setState({ show: !this.state.show });
  }

  componentDidMount() {}
  render() {
    const { classes } = this.props;
    const { match, location, history } = this.props;
    const classBurger = this.state.show
      ? "hamburger hamburger--arrow is-active"
      : "hamburger hamburger--arrow";
    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <Burger
              className={classBurger}
              type="button"
              aria-controls="navigation"
              aria-expanded="true/false"
              onClick={this.handleVisible}
            >
              <span className="hamburger-box">
                <div className="hamburger-inner" />
              </span>
            </Burger>
            <Typography variant="title" color="inherit">
              ReactJs Rocks!
            </Typography>
          </Toolbar>
        </AppBar>

        <main className={classes.content}>
          <div className="floater">
            <AlarmOffIcon />
          </div>

          <div className={classes.toolbar} />
          <div style={{ padding: 20 }}>
            <Grid container spacing={40}>
              <Grid item xs={12}>
                <Grid container justify="center" spacing={10}>
                  <Typography variant="display2">
                    Bienvenue dans les animations
                  </Typography>
                  <Gsap />
                </Grid>
              </Grid>
            </Grid>
          </div>

          {/*<Grid container xs={12}>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <button onClick={this.handleVisible}>Cliquez-moi</button>
                {this.state.show && <Image />}
              </Paper>
            </Grid>
    </Grid>

          <Grid container xs={12}>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <Menu />
              </Paper>
            </Grid>
          </Grid>*/}

          {/* <div>
            <TransitionGroup className="col-12">
              <Transition key={location.pathname} timeout={500} mountOnEnter={true} unmountOnExit={true} onEnter={node => {
                  // first kill all tweens of the target
                  TweenMax.killTweensOf(node);
                  const parent = node.parentNode;
                  const targetWidth = parent.clientWidth - parseFloat(getComputedStyle(node.parentNode).paddingLeft) * 2;
                  // set the position and properties of the entering element
                  TweenLite.set(node, {
                    position: "fixed",
                    x: 100,
                    autoAlpha: 0,
                    width: targetWidth
                  });
                  // animate in the element
                  TweenLite.to(node, 0.5, {
                    autoAlpha: 1,
                    x: 0,
                    onComplete: completeCall,
                    onCompleteParams: [node]
                  });
                }} onExit={node => { // on enter end
                  // first kill all tweens of the target
                  TweenMax.killTweensOf(node);
                  const parent = node.parentNode;
                  const targetWidth = parent.clientWidth - parseFloat(getComputedStyle(node.parentNode).paddingLeft) * 2;
                  // set the position of the element
                  TweenLite.set(node, {
                    position: "fixed",
                    width: targetWidth
                  });
                  // animate out the element
                  TweenLite.to(node, 0.5, {
                    position: "fixed",
                    opacity: 0,
                    x: -100
                  });
                }}> // on exit end
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/contact" component={Contact} />
                </Switch>
              </Transition>
            </TransitionGroup>
          </div>

          {/*<MyGrid xs={6} sm={6} visible={this.state.show}>
            <Paper className={classes.paper}>
              <p>ici</p>
              <img src="https://d3p157427w54jq.cloudfront.net/uploads/2018/06/SITE-Selena-Gomez.jpg" />
            </Paper>
    </MyGrid> */}

          {/* <Grid container spacing={24}>
            <Grid item xs={6}>
              <Button
                onClick={this.handleVisible}
                variant="contained"
                color="primary"
              >
                Clicker-moi
              </Button>
            </Grid>

            <Paper className={classes.paper}>
              <VelocityComponent
                animation={{
                  width: this.state.show ? 586 : 386
                }}
                easing="swing"
              >
                <VelocityComponent
                  animation={{
                    height: this.state.show ? 386 : 300
                  }}
                  duration={500}
                  easing="swing"
                  delay={1500}
                >
                  <VelocityComponent
                    animation={{
                      width: this.state.show ? 650 : 500
                    }}
                    duration={500}
                    easing="swing"
                    loop={3}
                  >
                    <VelocityComponent
                      animation={{
                        opacity: this.state.show ? 0 : 1
                      }}
                      duration={600}
                    >
                      <img src="https://d3p157427w54jq.cloudfront.net/uploads/2018/06/SITE-Selena-Gomez.jpg" />
                    </VelocityComponent>
                  </VelocityComponent>
                </VelocityComponent>
              </VelocityComponent>
            </Paper>
          </Grid>

          */}
        </main>
      </div>
    );
    {
      /*<MyGridTwo xs={6} sm={6} visible={this.state.show}>
              <Paper className={classes.paper}>
                <img src="https://d3p157427w54jq.cloudfront.net/uploads/2018/06/SITE-Selena-Gomez.jpg" />
              </Paper>
            </MyGridTwo>
            <MyGridThree xs={6} sm={6} visible={this.state.show}>
              <Paper className={classes.paper}>
                <img src="https://d3p157427w54jq.cloudfront.net/uploads/2018/06/SITE-Selena-Gomez.jpg" />
              </Paper>
            </MyGridThree>
            <MyGridFour xs={6} sm={6} visible={this.state.show}>
              <Paper className={classes.paper}>
                <img src="https://d3p157427w54jq.cloudfront.net/uploads/2018/06/SITE-Selena-Gomez.jpg" />
              </Paper>
            </MyGridFour>/}
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
        <button onClick={this.onAdd}>Add an Item</button> 
      </div>;*/
    }
  }
}

export default withRouter(withStyles(styles)(App));
